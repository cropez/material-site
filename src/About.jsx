import React from "react";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Nature from './img/img.jpg';
import CardMedia from "@mui/material/CardMedia"
import './styles/img.css';


const About = () => {
    return (
        <Container maxWidth="lg">

            <Grid container xs={12}>
                <Grid item xs={12}>
                    <Typography mt={10} variant="h5" textAlign="center">Lorem ipsum</Typography>
                    <Typography >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Grid>
                <Grid container xs={12} sx={{ flexWrap: { xl: "nowrap", sx: "wrap" } }} display="flex">
                    <Grid item xs={12} mx={3} my={3}>
                        <CardMedia
                            className="img"
                            component="img"
                            image={Nature}
                            alt="Error"
                        />
                    </Grid>
                    <Grid item xs={12} mx={3} my={3}>
                        <CardMedia
                            className="img"
                            component="img"
                            image={Nature}
                            alt="Error"
                        />
                    </Grid>
                    <Grid item xs={12} mx={3} my={3}>
                        <CardMedia
                            className="img"
                            component="img"
                            image={Nature}
                            alt="Error"
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography mt={3}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Grid>
                <Grid container xs={12} sx={{ flexWrap: { xl: "nowrap", sx: "wrap" } }} display="flex" >
                    <Grid item xs={12} mx={3} my={3}>
                        <CardMedia
                            className="img"
                            component="img"
                            image={Nature}
                            alt="Error"
                        />
                    </Grid>
                    <Grid item xs={12} mx={3} my={3}>
                        <CardMedia
                            className="img"
                            component="img"
                            image={Nature}
                            alt="Error"
                        />
                    </Grid>
                    <Grid item xs={12} mx={3} my={3}>
                        <CardMedia
                            className="img"
                            component="img"
                            image={Nature}
                            alt="Error"
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography mt={3}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Grid>
                <Grid container xs={12} sx={{ flexWrap: { xl: "nowrap", sx: "wrap" } }} display="flex" >
                    <Grid item xs={12} mx={3} my={3}>
                        <CardMedia
                            className="img"
                            component="img"
                            image={Nature}
                            alt="Error"
                        />
                    </Grid>
                    <Grid item xs={12} mx={3} my={3}>
                        <CardMedia
                            className="img"
                            component="img"
                            image={Nature}
                            alt="Error"
                        />
                    </Grid>
                    <Grid item xs={12} mx={3} my={3} pb={10}>
                        <CardMedia
                            className="img"
                            component="img"
                            image={Nature}
                            alt="Error"
                        />
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    )
};

export default About;