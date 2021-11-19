import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { ContainerPage } from '../../Components/UI';
import { DataGrid } from '@mui/x-data-grid';
import { BaseService } from '../../Services';
import { clinicColumnsConfig } from '../../Config/clinic-table-columns';
import { Link } from 'react-router-dom';

const ClinicList = () => {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const ClinicService = new BaseService('/clinic');
            const { data } = await ClinicService.list();
            setRows(data);
        };
        fetchData();
    }, []);

    return (
        <ContainerPage>
            <div style={{ height: 400, width: '100%' }}>
                <Grid container justifyContent="flex-end">
                    <Box my={2}>
                        <Button variant="contained">
                            <Link style={{ color: 'white' }} to="/clinicas/cadastro">Cadastrar</Link>
                        </Button>
                    </Box>
                </Grid>
                <DataGrid
                    rows={rows}
                    columns={clinicColumnsConfig}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                />
            </div>
        </ContainerPage>
    );
}

export { ClinicList };