import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Header, Footer } from './';

const ContainerPage = (props) => {
    return (
        <>
            <Header />
            <Box mt={5} mb={10} sx={{ width: '100%' }}>
                <Container maxWidth="xl">
                    {props.children}
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export { ContainerPage };