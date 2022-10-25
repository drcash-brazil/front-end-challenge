import { useEffect, useState, useCallback } from 'react';

import {
  Card,
  Grid,
  Button,
  TableRow,
  Container,
  TableCell,
  TextField,
  CardHeader,
  IconButton,
  CardContent,
} from '@mui/material';

import { Form, Formik } from 'formik';
import { Visibility, Delete, Edit } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';
import Page from '../../components/Page';
import SidePage from '../../components/SidePage';
import CustomTable from '../../components/CustomTable';
import CustomDialog from '../../components/CustomDialog';
import { formatCPF, formatPhone } from '../../utils/formatData';

const Employees = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState();
  const [employees, setEmployees] = useState([]);
  const [idToRemove, setIdToRemove] = useState('');
  const [dataToTable, setDataToTable] = useState([]);
  const [confirmation, setConfirmation] = useState(false);
  const [openSidePage, setOpenSidePage] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const response = await api.get('/funcionarios');
      const { data } = response;

      setEmployees(data.funcionarios);
      setDataToTable(data.funcionarios);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const removeEmployee = async () => {
    try {
      await api.delete(`/funcionarios/${idToRemove}`);
      fetchData();
      setIdToRemove('');
      setConfirmation(false);
      toast.success('Funcionário removido com successo', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (e) {
      toast.error('Não foi possível remover o funcionário', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const headersTable = [
    {
      label: 'Nome',
      align: 'left',
    },
    {
      label: 'CPF',
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
      employees.filter((item) => item.nome.toLowerCase().includes(valueToFilter)),
    );
  };

  const showAllInfo = (row) => {
    setInfo(row);
    setOpenSidePage(true);
  };

  const renderTableCells = (row) => (
    <>
      <TableCell align="left">{row.nome}</TableCell>
      <TableCell align="center">{formatCPF(row.cpf.toString())}</TableCell>
      <TableCell align="center">{row.address}</TableCell>
      <TableCell align="center">{row.email}</TableCell>
      <TableCell align="center">{formatPhone(row.fone.toString())}</TableCell>
      <TableCell align="right">
        <IconButton
          size="small"
          onClick={() => showAllInfo(row)}
        >
          <Visibility />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => {
            setConfirmation(true);
            setIdToRemove(row.id);
          }}
        >
          <Delete />
        </IconButton>
      </TableCell>
    </>

  );

  const renderTableRow = (row) => (
    <TableRow key={row.id}>{renderTableCells(row)}</TableRow>
  );

  return (
    <Page title="Funcionários :: iClinic">
      <CustomDialog
        open={confirmation}
        title="Remover funcionário"
        handleConfirm={removeEmployee}
        handleClose={() => setConfirmation(false)}
        content="Tem certeza que deseja remover esse funcionário? Essa ação não poderá ser desfeita"
      />
      <SidePage
        data={info}
        title="Funcionário"
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
                    fullWidth
                    disabled
                    name="cpf"
                    label="CPF"
                    size="small"
                    value={values.cpf}
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
          <Link to="/funcionarios/adicionar">
            <Button
              size="small"
              variant="contained"
            >
              Novo funcionário
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
              label="Filtrar pelo nome"
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

export default Employees;
