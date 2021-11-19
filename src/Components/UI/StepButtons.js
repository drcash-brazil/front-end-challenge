import React from 'react'
import Controls from '../Form';
import Grid from '@mui/material/Grid';

const StepButtons = (props) => {
    
    const {
        nextButtonLabel,
        backButtonDisabeld,
        backButtonOnClick
    } = props;

    return (
        <Grid item>
            <div>
                <Controls.Button
                    type="submit"
                    text={nextButtonLabel}
                    sx={{ mt: 1, mr: 1 }} />
                <Controls.Button
                    text="Voltar"
                    variant="text"
                    disabled={backButtonDisabeld}
                    onClick={backButtonOnClick}
                    isBackButton={true}
                    sx={{ mt: 1, mr: 1 }} />
            </div>
        </Grid>
    )
}

export { StepButtons };