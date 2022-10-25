import {
  useState,
  useEffect,
  useCallback,
} from 'react';
import {
  Card,
  Grid,
  Button,
  TableRow,
  TextField,
  Container,
  TableCell,
  IconButton,
  CardHeader,
  CardContent,
} from '@mui/material';
import {
  Edit,
  Delete,
  PersonAdd,
  Visibility,
} from '@mui/icons-material';

import { Formik, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import api from '../../services/api';
import Page from '../../components/Page';
import SidePage from '../../components/SidePage';
import CustomList from '../../components/CustomList';
import CustomTable from '../../components/CustomTable';
import CustomModal from '../../components/CustomModal';
import CustomDialog from '../../components/CustomDialog';

import { formatPhone, formatCNPJ } from '../../utils/formatData';

const Clinic = () => {
  const navigate = useNavigate();
  const [id, setId] = useState(false);
  const [info, setInfo] = useState([]);
  const [modal, setModal] = useState(false);
  const [clinics, setClinics] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [dataToTable, setDataToTable] = useState([]);
  const [confirmation, setConfirmation] = useState(false);
  const [openSidePage, setOpenSidePage] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const response = await api.get('/clinicas');
      const { data } = response;

      setClinics(data.clinicas);
      setDataToTable(data.clinicas);
    } catch (e) {
      console.log(e);
    }
  }, []);

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
    fetchData();
    fetchEmployees();
  }, []);

  const removeClinic = async () => {
    try {
      await api.delete(`/clinicas/${id}`);
      fetchData();
      setId('');
      setConfirmation(false);
      toast.success('Clínica removida com successo', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (e) {
      toast.error('Não foi remover a clínica', { position: toast.POSITION.BOTTOM_RIGHT });
    }
  };

  const associateEmployee = async (values) => {
    try {
      await api.patch('/associar-funcionario', {
        clinicaId: Number(id),
        funcionarioId: Number(values.employeeID),
      });
      toast.success(
        'Funcionário associado com sucesso',
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        },
      );
      fetchData();
      setModal(false);
    } catch (e) {
      toast.error(
        'Não foi possível associar o funcionário a clínica',
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        },
      );
    }
  };

  const headersTable = [
    {
      label: 'Nome',
      align: 'left',
    },
    {
      label: 'CNPJ',
      align: 'center',
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

  const handleFilter = (event) => {
    const valueToFilter = event.target.value.toLowerCase();
    setDataToTable(
      clinics.filter((item) => item.nome.toLowerCase().includes(valueToFilter)),
    );
  };

  const showAllInfo = (row) => {
    setInfo(row);
    setOpenSidePage(true);
  };

  const renderTableCells = (row) => (
    <>
      <TableCell align="left">{row.nome}</TableCell>
      <TableCell align="center">{formatCNPJ(row.cnpj.toString())}</TableCell>
      <TableCell align="center">{row.address}</TableCell>
      <TableCell align="center">{row.email}</TableCell>
      <TableCell align="center">{formatPhone(row.fone.toString())}</TableCell>
      <TableCell align="right">
        <IconButton
          size="small"
          onClick={() => showAllInfo(row)}
          title="Visualizar informações da clínica"
        >
          <Visibility />
        </IconButton>
        <IconButton
          size="small"
          title="Editar informações da clínica"
          onClick={() => navigate(`/clinicas/${row.id}`)}
        >
          <Edit />
        </IconButton>
        <IconButton
          title="Remover clínica"
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
          title="Associar funcionário a essa clínica"
          onClick={() => {
            setModal(true);
            setId(row.id);
          }}
        >
          <PersonAdd />
        </IconButton>
      </TableCell>
    </>
  );

  const renderTableRow = (row) => (
    <TableRow key={row.id}>{renderTableCells(row)}</TableRow>
  );

  return (
    <Page title="Clínicas :: iClinic">
      <CustomModal
        open={modal}
        title="Associar funcionário"
        handleClose={() => setModal(false)}
      >
        <Formik
          enableReinitialize
          initialValues={{ employeeID: '' }}
          onSubmit={(values) => associateEmployee(values)}
        >
          {({ values, handleChange }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <h4>
                    Escolha um funcionário para prosseguir:
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
                    name="employeeID"
                    variant="outlined"
                    label="Funcionários"
                    onChange={handleChange}
                    value={values.employeeID}
                  >
                    <option aria-label="None" value="" />
                    {employees?.map((option) => (
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
        title="Remover clínica"
        handleConfirm={removeClinic}
        handleClose={() => setConfirmation(false)}
        content="Tem certeza que deseja remover essa clínica? Caso confirmado, essa ação não poderá ser desfeita."
      />
      <SidePage open={openSidePage} title="Clínica" setOpenSidePage={setOpenSidePage}>
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
                  <h4 style={{ marginBottom: '10px' }}>Funcionários</h4>
                  <CustomList data={values.funcionarios} />
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </SidePage>
      <Container maxWidth={false} style={{ paddingTop: '20px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
          justifyContent: 'flex-end',
        }}
        >
          <Link to="/clinicas/adicionar">
            <Button
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              role="link"
              size="small"
              variant="contained"
            >
              Nova clínica
            </Button>
          </Link>
        </div>

        <Card style={{ marginBottom: '20px' }}>
          <CardHeader title="Filtros" />

          <CardContent>
            <TextField
              fullWidth
              name="nome"
              size="small"
              onChange={handleFilter}
              label="Filtrar pelo nome ou endereço"
            />
          </CardContent>
        </Card>

        <CustomTable
          data={dataToTable}
          headers={headersTable}
          tableRow={renderTableRow}
        />

      </Container>
    </Page>
  );
};

export default Clinic;
