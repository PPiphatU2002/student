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
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { useState, useEffect } from "react";
import Axios from "axios";
const theme = createTheme();

function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = new FormData(event.currentTarget);
    console.log({
      id: user.get('id'),
      pass: user.get('pass'),
    });
  };

  const [showname, showsetName] = useState('');
  const [showsname, showsetSName] = useState("");
  const [showemail, showsetEmail] = useState("");
  const [showtel, showsetTel] = useState("");
  const [showid_card, showsetIDCard] = useState("");
  const [showaddress, showsetAddress] = useState("");

  const [name, setName] = useState("");
  const [sname, setSName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [id_card, setIDCard] = useState("");
  const [address, setAddress] = useState("");

  const update = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      Axios.defaults.headers.post["Content-Type"] = "application/json";
      const res = await Axios.post("https://jittery-lime-snail.cyclic.app/UpdateUser", {
        name: showname,
        sname: showsname,
        email: showemail,
        tel: showtel,
        id_card: showid_card,
        address: showaddress,
      });
      if (res.user.status === "success") {
       alert("Success");
       localStorage.removeItem("token");
       window.location = "/home";
      } else {
       alert("Error");
       localStorage.removeItem("token");
       window.location = "/login";
      }
    } catch (err) {
      alert("Error2");
      localStorage.removeItem("token");
      window.location = "/login";
    }
  };


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      Axios.defaults.headers.post["Content-Type"] = "application/json";
      Axios.get("https://itchy-fox-crown.cyclic.app/getinformation").then((response) => {
        showsetName(response.user[0].name);
        showsetSName(response.user[0].sname);
        showsetEmail(response.user[0].email);
        showsetTel(response.user[0].tel);
        showsetIDCard(response.user[0].id_card);
        showsetAddress(response.user[0].address);
      });
    }else{
      window.location = "/login";
    }
  }, []);

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
            backgroundImage: 'url(https://i.pinimg.com/originals/68/4e/47/684e477e5fa9d3d06c8187e1d5593c6b.png)',
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
              <EditNoteOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Correct
            </Typography>
            <Box noValidate  sx={{ mt: 2 }}>
            <form onSubmit={update}>
              
             <Grid> 
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="ชื่อ"
                  value={showname}
                  onChange={(event) => {
                    setName(event.target.value);
                    showsetName(event.target.value);
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
                  value={showsname}
                  onChange={(event) => {
                    setSName(event.target.value);
                    showsetSName(event.target.value);
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
                  value={showemail}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    showsetEmail(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="เบอร์โทรศัพท์"
                  id="phone"
                  type="number"
                  autoComplete="phone"
                  value={showtel}
                  onChange={(event) => {
                    setTel(event.target.value);
                    showsetTel(event.target.value);
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
                  value={showid_card}
                  onChange={(event) => {
                    setIDCard(event.target.value);
                    showsetIDCard(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Address"
                  label="ที่อยู่"
                  name="Address"
                  autoComplete="Address"
                  value={showaddress}
                  onChange={(event) => {
                    setAddress(event.target.value);
                    showsetAddress(event.target.value);

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
              Update
            </Button>
            </form>
          </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignInSide;