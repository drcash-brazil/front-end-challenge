import React, { useState } from 'react';
import {
    Box,
    Button,
    Paper,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Typography,
    Grid
} from '@mui/material';

import { Link } from 'react-router-dom';

import { clinicFormStepsConfig } from '../../Config/clinic-form-steps';

import { BaseService } from '../../Services';

import { initialValuesForm } from '../../Config/initial-values-form';

import { ContainerPage, Toast } from '../../Components/UI';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ClinicService = new BaseService('/clinic');


const ClinicForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [clinicData, setClinicData] = useState(initialValuesForm);
    const [toast, setToast] = useState({
        openToast: false
    });

    const saveClinic = async (data) => {
        try {
            await ClinicService.save(data);
        } catch (error) {
            setToast({
                openToast: true,
                severity: 'error',
                message: error.message
            });
        }
    }

    const handleNext = (data = {}) => {
        if (activeStep === clinicFormStepsConfig.length - 1) {
            saveClinic(clinicData)
        } else {
            setClinicData({
                ...initialValuesForm,
                ...clinicData,
                ...data
            });
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <ContainerPage>
            <Grid container justifyContent="flex-start">

                <Link to="/clinicas">
                    <Button variant="text" startIcon={<ArrowBackIcon />}>
                        Voltar
                    </Button>
                </Link>
            </Grid>
            <Grid container justifyContent="center">
                <Box sx={{ maxWidth: 400 }} >
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {clinicFormStepsConfig.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel
                                    optional={
                                        index === 2 ? (
                                            <Typography variant="caption">
                                                Revise os dados
                                            </Typography>
                                        ) : null
                                    }
                                >
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    <Typography>{step.description}</Typography>
                                    {
                                        step.component &&
                                        <step.component
                                            nextButtonLabel={index === clinicFormStepsConfig.length - 1 ? 'Finalizar' : 'Próximo'}
                                            nextButtonOnClick={handleNext}
                                            backButtonDisabeld={index === 0}
                                            backButtonOnClick={handleBack}
                                            initialValues={clinicData}
                                        />
                                    }
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === clinicFormStepsConfig.length && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                            <Typography>Clínica adicionada com sucesso</Typography>
                            <Button variant="contained" sx={{ mt: 1, mr: 1 }}>
                                <Link style={{ color: 'white' }} to="/clinicas">gerenciar cadastrados</Link>
                            </Button>
                        </Paper>
                    )}
                    <Toast {...toast} />
                </Box>
            </Grid>
        </ContainerPage>
    );
}
export { ClinicForm };