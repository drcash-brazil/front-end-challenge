import {
  Card,
  Grid,
  Button,
  Divider,
  TextField,
  Container,
  CardHeader,
  CardContent,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Page from '../../../components/Page';
import api from '../../../services/api';

import { schema } from './validation';

const NewEmployee = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await api.post('/funcionarios', {
        fone: Number(values.fone),
        cpf: Number(values.cpf),
        ...values,
      });
      toast.success('Funcionário criado com sucesso', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      navigate('/funcionarios');
    } catch (e) {
      toast.error('Não foi possível criar o funcionário', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  return (
    <Page title="Novo funcionário :: iClinic">
      <Container maxWidth={false} style={{ paddingTop: '20px' }}>
        <Card>
          <CardHeader title="Adicionar funcionário" />
          <Divider />
          <CardContent>
            <Formik
              enableReinitialize
              initialValues={{
                nome: '',
                email: '',
                fone: '',
                cpf: '',
                address: '',
              }}
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
                        name="cpf"
                        label="CPF"
                        value={values.cpf}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        helperText={touched?.cpf && errors?.cpf}
                        error={touched?.cpf && Boolean(errors?.cpf)}
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
                      <Link to="/funcionarios">
                        <Button
                          color="secondary"
                          variant="outlined"
                        >
                          Cancelar
                        </Button>
                      </Link>
                      <Button type="submit" variant="contained">
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

export default NewEmployee;
