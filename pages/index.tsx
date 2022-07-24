import { Grid, Paper, Typography, Link, Box, TextField, FormControlLabel, Checkbox, Button } from '@mui/material'
import { styled, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/system';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import mainTheme from '../utility/util';
import m2 from './m2.png'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Home: NextPage = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <div  >
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <main>

          <Grid container spacing={2}>
            <Grid item xs={6} md={7} >
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} >
                  
                </Grid>
                <Grid item xs={12} md={1} >
                </Grid>
                <Grid item xs={6} md={8} >
                  <Container>
                    <Typography variant="h3" gutterBottom component="div">
                      Welcome TO MYSic
                    </Typography>
                    <Typography variant="body2" gutterBottom component="div">
                      Already Have an Account? <Link href="#" color="inherit">
                        Log in?
                      </Link>
                    </Typography>
                    <Box component={'form'} mt={5} >
                      <TextField fullWidth margin="dense" id="outlined-basic" label="Email" variant="outlined" />
                      <TextField fullWidth margin="dense" id="outlined-basic" label="User Name" variant="outlined" />
                      <TextField fullWidth margin="dense" id="outlined-basic" label="Password" variant="outlined" />
                      <TextField fullWidth margin="dense" id="outlined-basic" label="Confirm Password" variant="outlined" />
                      <FormControlLabel
                        value="end"
                        control={<Checkbox />}
                        label="I want to receive emails and News Letters."
                        labelPlacement="end"
                      />

                      <Typography variant="body2" mt={5} gutterBottom component="div">
                        By creating an account, you agree to the  <Link href="#" color="inherit">
                          terms of use
                        </Link> and  <Link href="#" color="inherit">
                          Privacy Policy
                        </Link>
                      </Typography>

                      <Box mt={2}>
                        <Button variant="contained" size="large">
                          Submit
                        </Button>
                      </Box>
                    </Box>
                    <Typography mt={5} variant="body2" gutterBottom component="div">
                      Already Have an Account? <Link href="#" color="inherit">
                        Log in?
                      </Link>
                    </Typography>
                  </Container>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} md={5} style={{
              height: "102vh !important",
              backgroundImage: `url(${"./m2.png"})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              margin: "none !important",
              padding: "none !important",
            }}>

            </Grid>

          </Grid>
        </main>


      </div>

    </ThemeProvider>
  )
}

export default Home
