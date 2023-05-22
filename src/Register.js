import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CoPresentRoundedIcon from '@mui/icons-material/CoPresentRounded';
import Axios from "axios";
const theme = createTheme();

export default function SignInSide() {

  const [id, setID] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [sname, setSName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [id_card, setIDCard] = useState("");

  const add = async (event) => {
    event.preventDefault();
    try {
    const res = await Axios.post("https://jittery-lime-snail.cyclic.app/AddUser/", {
        id: id,
        pass: pass,
        name: name,
        sname: sname,
        email: email,
        tel: tel,
        id_card: id_card,
      });
      if (res.data.status === "success") {
        alert("Success!");
        window.location = "/home";
      } else {
       alert("Error");
      }
    } catch (err) {
      alert("Error2");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://25.media.tumblr.com/tumblr_mdp35vv3Up1rl4mndo1_400.gif)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <CoPresentRoundedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box noValidate  sx={{ mt: 2 }}>
            <form onSubmit={add}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="id"
                  label="รหัสนักศึกษา"
                  type="number"
                  id="id"
                  autoComplete="id"
                  onChange={(event) => {
                    setID(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="pass"
                  required
                  fullWidth
                  id="pass"
                  label="รหัสผ่าน"
                  onChange={(event) => {
                    setPass(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="ชื่อ"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="นามสกุล"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(event) => {
                    setSName(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  name="email"
                  label="อีเมลล์"
                  id="email"
                  autoComplete="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="tel"
                  label="เบอร์โทรศัพท์"
                  type="tel"
                  id="tel"
                  autoComplete="tel"
                  onChange={(event) => {
                    setTel(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="idcard"
                  label="รหัสบัตรประชาชน"
                  id="idcard"
                  type="number"
                  autoComplete="idcard"
                  onChange={(event) => {
                    setIDCard(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Did you check that the information is complete and correct?"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            </form>
          </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}