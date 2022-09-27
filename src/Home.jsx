import React from "react";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Nature from './img/img.jpg';
import CardMedia from "@mui/material/CardMedia"


const Home = props => {
  return (
    <Container>
      <Grid container xs={12}>
        <Grid item xs={12}>
        <Typography mt={10} variant="h5" textAlign="center">Lorem ipsum</Typography>
        <Typography mt={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        </Grid>
        <Grid item xs={12} mt={5} mb={65}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls=""
              id=""
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
              <CardMedia
                className="img"
                component="img"
                image={Nature}
                alt="Error"
              />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls=""
              id=""
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
              <CardMedia
                className="img"
                component="img"
                image={Nature}
                alt="Error"
              />
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Container>


  )
};

export default Home;