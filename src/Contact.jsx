import React from "react";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button, Divider } from "@mui/material";

const Contact = () => {
    return (
        <Container maxWidth="lg">
            <Grid container xs={12} mb={75}>
                <Grid item xs={12}>
                    <Typography mt={10} variant="h5" textAlign="center">Lorem ipsum</Typography>
                    <Typography mt={3}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    </Typography>
                </Grid>
                <Grid container xs={12} xl={3} justifyContent={"space-between"}>
                    <Grid item xs={12} lg={6} xl={3} mt={2}>
                        <Button fullWidth variant="contained" color="success">
                            Success
                        </Button>
                    </Grid>
                    <Grid item xs={12} lg={6} xl={3} mt={2}>
                        <Button fullWidth variant="contained" color="error">
                            Error
                        </Button>
                    </Grid>

                </Grid>
                <Divider />
            </Grid>
        </Container>
    )
};

export default Contact;