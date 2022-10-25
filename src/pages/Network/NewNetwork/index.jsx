import {
  useState, useEffect, useCallback, Fragment,
} from 'react';

import {
  Card,
  Grid,
  Button,
  Divider,
  TextField,
  Container,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from '@mui/material';

import { Form, Formik } from 'formik';
import { Link, useAsyncError, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import api from '../../../services/api';
import Page from '../../../components/Page';
import Spinner from '../../../components/Spinner';

import { schema } from '../validation';

const NewNetwork = () => {
  const navigate = useNavigate();
  const [clinics, setClinics] = useState([]);

  const fetchClinics = useCallback(async () => {
    const response = await api.get('/clinicas');
    setClinics(response.data.clinicas);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchClinics();
    }, [200]);
  }, []);

  const handleSubmit = async (values) => {
    try {
      const response = await api.post('/redes', {
        nome: values.nome,
        email: values.email,
        address: values.address,
        fone: Number(values.fone),
        ...values,
      });
      toast.success('Rede criada com successo', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      navigate('/redes');
    } catch (e) {
      toast.error('Não foi possível criada a rede', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  const renderPage = () => {
    if (clinics.length === 0) return <Spinner />;

    return (
      <Container maxWidth={false} style={{ paddingTop: '20px' }}>
        <Card>
          <CardHeader title="Adicionar rede" />
          <Divider />
          <CardContent>
            <Formik
              enableReinitialize
              initialValues={{
                nome: '',
                email: '',
                fone: '',
                address: '',
              }}
              validationSchema={schema}
              onSubmit={(values) => handleSubmit(values)}
            >
              {({
                values,
                errors,
                touched,
                setValues,
                handleBlur,
                handleChange,
                isSubmitting,
              }) => (
                <Form>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <h4>Dados gerais</h4>
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        type="text"
                        size="small"
                        name="nome"
                        label="Nome"
                        value={values.nome}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        helperText={touched?.nome && errors?.nome}
                        error={touched?.nome && Boolean(errors?.nome)}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        type="email"
                        size="small"
                        name="email"
                        label="E-mail"
                        onBlur={handleBlur}
                        value={values.email}
                        onChange={handleChange}
                        helperText={touched?.email && errors?.email}
                        error={touched?.email && Boolean(errors?.email)}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        type="text"
                        size="small"
                        name="address"
                        label="Endereço"
                        onBlur={handleBlur}
                        value={values.address}
                        onChange={handleChange}
                        helperText={touched?.address && errors?.address}
                        error={touched?.address && Boolean(errors?.address)}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="fone"
                        size="small"
                        type="number"
                        maxLength="10"
                        label="Telefone"
                        value={values.fone}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        helperText={touched?.fone && errors?.fone}
                        error={touched?.fone && Boolean(errors?.fone)}
                      />
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      style={{
                        gap: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <Link to="/redes">
                        <Button
                          size="small"
                          color="secondary"
                          variant="outlined"
                        >
                          Cancelar
                        </Button>
                      </Link>
                      <Button
                        size="small"
                        type="submit"
                        variant="contained"
                      >
                        Concluir
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Container>
    );
  };

  return (
    <Page title="Nova rede :: iClinic">
      {renderPage()}
    </Page>
  );
};

export default NewNetwork;
