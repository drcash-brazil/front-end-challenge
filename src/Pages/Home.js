import React from 'react';
import { Footer, Header, PaperCard, PaperInfo } from '../Components/UI';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import listPaperInfoItems from '../Config/landing-paper-info';
import listPaperCardItems from '../Config/landing-paper-cards';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <Header />
            <Container maxWidth="xl">
                <Box sx={{ flexGrow: 1, padding: '20px 0', mb: 5 }}>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{
                            m: 5,
                            textAlign: 'center',
                            color: 'text.secondary'
                        }}>
                        O sistema ideal para sua especialidade médica:
                    </Typography>
                    <Grid container spacing={2}>
                        {
                            listPaperInfoItems.map(paper => (
                                <Grid item xs={12} sm={6} md={3} key={paper}>
                                    <PaperInfo label={paper} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>

                <Box sx={{ flexGrow: 1, padding: '0px 5px 50px' }}>
                    <Grid container spacing={2}>
                        {
                            listPaperCardItems.map(paper => (
                                <Grid item xs={12} md={4} key={paper.title}>
                                    <PaperCard {...paper} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
                <Box sx={{ mb: 5 }}>
                    <Grid container justifyContent='center' display='flex'>
                        <Button variant="contained">
                            <Link style={{ color: 'white' }} to="/clinicas">Ir para cadastro de clínicas</Link>
                        </Button>
                    </Grid>
                </Box>
            </Container>
            <Footer />
        </>
    );
}

export { Home };