import { useState, useEffect, useCallback } from 'react';

import {
  Card,
  List,
  Grid,
  Radio,
  Button,
  Divider,
  ListItem,
  TextField,
  Container,
  CardHeader,
  CardContent,
  CardActions,
  ListItemText,
  ListItemIcon,
  CardActionArea,
  ListItemButton,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { schema } from './validation';

import api from '../../../services/api';
import Page from '../../../components/Page';

const NewClinic = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    fone: '',
    cnpj: '',
    address: '',
    funcionarios: [
      {
        id: '',
        nome: '',
      },
    ],
  });
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = useCallback(async () => {
    try {
      const response = await api.get('/funcionarios');
      const { data } = response;

      setEmployees(data.funcionarios);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleSubmit = async (payload) => {
    try {
      await api.post('/clinicas', {
        nome: payload.nome,
        email: payload.email,
        fone: Number(payload.fone),
        cnpj: Number(payload.cnpj),
        address: payload.address,
      });
      toast.success('Clínica criada com sucesso', { position: toast.POSITION.BOTTOM_RIGHT });
      navigate('/clinicas');
    } catch (e) {
      toast.success('Não foi possível criar a cliníca', { position: toast.POSITION.BOTTOM_RIGHT });
    }
  };

  return (
    <Page title="Nova Clínica :: iClinic">
      <Container maxWidth={false} style={{ paddingTop: '20px' }}>
        <Card>
          <CardHeader title="Adicionar clínica" />
          <Divider />
          <CardContent>
            <Formik
              enableReinitialize
              initialValues={formData}
              validationSchema={schema}
              onSubmit={(values) => handleSubmit(values)}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                isSubmitting,
              }) => (
                <Form>
                  <Grid container spacing={3}>

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
                        type="text"
                        size="small"
                        name="cnpj"
                        label="CNPJ"
                        value={values.cnpj}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        helperText={touched?.cnpj && errors?.cnpj}
                        error={touched?.cnpj && Boolean(errors?.cnpj)}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        type="email"
                        size="small"
                        name="email"
                        label="E-mail"
                        value={values.email}
                        onBlur={handleBlur}
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
                        value={values.address}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        helperText={touched?.address && errors?.address}
                        error={touched?.address && Boolean(errors?.address)}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        type="text"
                        name="fone"
                        size="small"
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
                      <Link to="/clinicas">
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

    </Page>
  );
};

export default NewClinic;
