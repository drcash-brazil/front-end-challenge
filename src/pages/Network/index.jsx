import {
  useState, useEffect, useCallback, Fragment,
} from 'react';

import {
  Grid,
  List,
  Paper,
  Button,
  Divider,
  TableRow,
  ListItem,
  TableCell,
  Container,
  TextField,
  IconButton,
  CardHeader,
  CardContent,
  ListItemText,
} from '@mui/material';
import {
  Edit, Delete, Visibility, Business,
} from '@mui/icons-material';

import { Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import api from '../../services/api';
import Page from '../../components/Page';
import Spinner from '../../components/Spinner';
import SidePage from '../../components/SidePage';
import CustomList from '../../components/CustomList';
import CustomTable from '../../components/CustomTable';
import CustomModal from '../../components/CustomModal';
import CustomDialog from '../../components/CustomDialog';

import { formatPhone } from '../../utils/formatData';

const Network = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [info, setInfo] = useState([]);
  const [modal, setModal] = useState(false);
  const [clinics, setClinics] = useState([]);
  const [network, setNetwork] = useState([]);
  const [dataToTable, setDataToTable] = useState([]);
  const [confirmation, setConfirmation] = useState(false);
  const [openSidePage, setOpenSidePage] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const response = await api.get('/redes');
      const { data } = response;
      setNetwork(data.redes);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const fetchClinics = useCallback(async () => {
    const response = await api.get('/clinicas');
    setClinics(response.data.clinicas);
  }, []);

  const removeNetwork = async () => {
    try {
      await api.delete(`/redes/${id}`);
      fetchData();
      setId('');
      setConfirmation(false);
      toast.success('Rede criada com sucesso', { position: toast.POSITION.BOTTOM_RIGHT });
    } catch (e) {
      toast.error('Não foi possível remover essa rede', { position: toast.POSITION.BOTTOM_RIGHT });
    }
  };

  const associateClinic = async (values) => {
    try {
      await api.patch('/associar-clinica', {
        clinicaId: Number(values.clinicId),
        redeId: Number(id),
      });
      toast.success(
        'Clínica associada com sucesso',
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        },
      );
      fetchData();
      setModal(false);
    } catch (e) {
      toast.error(
        'Não foi possível associar clínica a rede',
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        },
      );
    }
  };

  useEffect(() => {
    fetchClinics();
    fetchData();
  }, []);

  const handleFilter = (event) => {
    const valueToFilter = event.target.value.toLowerCase();
    setDataToTable(
      network.filter((item) => item.nome.toLowerCase().includes(valueToFilter)),
    );
  };

  const headersTable = [
    {
      label: 'Nome',
      align: 'left',
    },
    {
      label: 'Endereço',
      align: 'center',
    },
    {
      label: 'E-mail',
      align: 'center',
    },
    {
      label: 'Telefone',
      align: 'center',
    },
    {
      label: 'Ações',
      align: 'right',
    },
  ];

  const showAllInfo = (row) => {
    setInfo(row);
    setOpenSidePage(true);
  };

  const renderTableCells = (row) => (
    <>
      <TableCell align="left">{row.nome}</TableCell>
      <TableCell align="center">{row.address}</TableCell>
      <TableCell align="center">{row.email}</TableCell>
      <TableCell align="center">{formatPhone(row.fone.toString())}</TableCell>
      <TableCell align="right">
        <IconButton
          size="small"
          onClick={() => {
            showAllInfo(row);
          }}
        >
          <Visibility />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => {
            setConfirmation(true);
            setId(row.id);
          }}
        >
          <Delete />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => navigate(`/redes/${row.id}`)}
        >
          <Edit />
        </IconButton>
        <IconButton
          size="small"
          title="Associar clínica a essa rede"
          onClick={() => {
            setModal(true);
            setId(row.id);
          }}
        >
          <Business />
        </IconButton>
      </TableCell>
    </>

  );

  const renderTableRow = (row) => (
    <TableRow key={row.id}>{renderTableCells(row)}</TableRow>
  );

  const renderPage = () => {
    if (Object.keys(clinics).length === 0) return <Spinner />;

    return (
      <>
        <CustomModal
          open={modal}
          title="Associar clínica"
          handleClose={() => setModal(false)}
        >
          <Formik
            enableReinitialize
            initialValues={{ clinicId: '' }}
            onSubmit={(values) => associateClinic(values)}
          >
            {({ values, handleChange }) => (
              <Form>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <h4>
                      Escolha um clínica para prosseguir:
                    </h4>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      SelectProps={{
                        native: true,
                      }}
                      select
                      fullWidth
                      size="small"
                      name="clinicId"
                      variant="outlined"
                      label="Clínicas"
                      onChange={handleChange}
                      value={values.clinicId}
                    >
                      <option aria-label="None" value="" />
                      {clinics?.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.nome}
                        </option>
                      ))}
                    </TextField>
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

                    <Button
                      size="small"
                      color="secondary"
                      variant="outlined"
                      onClick={() => setModal(false)}
                    >
                      Cancelar
                    </Button>
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
        </CustomModal>
        <CustomDialog
          open={confirmation}
          title="Remover rede"
          handleConfirm={removeNetwork}
          handleClose={() => setConfirmation(false)}
          content="Tem certeza que deseja remover essa rede? Essa ação não poderá ser desfeita"
        />
        <SidePage
          title="Rede"
          open={openSidePage}
          setOpenSidePage={setOpenSidePage}
        >
          <Formik initialValues={info}>
            {({ values }) => (
              <Form>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <h4>
                      Visualização específica:
                    </h4>
                  </Grid>

                  <Grid item xs={12}>
                    <h4>Dados gerais</h4>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      disabled
                      name="nome"
                      size="small"
                      label="Nome"
                      value={values.nome}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      disabled
                      fullWidth
                      size="small"
                      name="address"
                      label="Endereço"
                      value={values.address}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      disabled
                      fullWidth
                      name="email"
                      size="small"
                      type="email"
                      label="E-mail"
                      value={values.email}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      disabled
                      fullWidth
                      name="fone"
                      size="small"
                      type="text"
                      label="Telefone"
                      value={values.fone}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <h4 style={{ marginBottom: '10px' }}>Clínicas</h4>
                    <CustomList data={values.clinicas} />
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </SidePage>
        <Container
          maxWidth={false}
          style={{ paddingTop: '20px' }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'flex-end',
          }}
          >
            <Link to="/redes/adicionar">
              <Button
                size="small"
                variant="contained"
              >
                Nova rede
              </Button>
            </Link>
          </div>

          <Paper
            elevation={3}
            style={{ marginBottom: '20px' }}
          >
            <CardHeader title="Filtros" />

            <CardContent>
              <TextField
                fullWidth
                size="small"
                name="nome"
                onChange={handleFilter}
                label="Filtrar pelo nome da rede"
              />
            </CardContent>
          </Paper>

          <CustomTable
            data={network}
            headers={headersTable}
            tableRow={renderTableRow}
          />

        </Container>
      </>
    );
  };

  return (
    <Page title="Redes :: iClinic">
      {renderPage()}
    </Page>
  );
};

export default Network;
