import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { Camera } from "@material-ui/icons";
export default function Home() {
  return (
    <Container maxWidth="md" style={{ paddingTop: "100px" }}>
      <Grid container>
        <Grid item md={4}>
          <div className="cmr">
            <Camera fontSize="inherit" color="primary" />
          </div>
        </Grid>
        <Grid item md={8}>
          <Typography variant="h2" color="primary" className="header">
            Counter App
          </Typography>
          <Typography variant="h6" color="primary" className="body">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit,
            doloremque quo distinctio modi quia corrupti nisi porro quos, animi
            voluptatibus fuga! Sint harum omnis placeat adipisci repellendus
            recusandae voluptatum fuga.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
