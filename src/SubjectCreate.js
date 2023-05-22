import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function SubjectCreate() {  
  const handleSubmit = event => {
    event.preventDefault();
    var data = {
      's_id': s_id,
      's_name': s_name,
      'faculty': faculty,
      'cost': cost,
      'photo': photo,
      'time': time,
      'day': day,
      'credit': credit,
    }
    fetch('https://jittery-lime-snail.cyclic.app/AddSubject', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((result) => {
        alert(result['message'])
        if (result['status'] === 'ok') {
          window.location.href = '/';
        }
      })
  }

  const [s_id, setSID] = useState('');
  const [s_name, setSName] = useState('');
  const [faculty, setFaculty] = useState('');
  const [cost, setCost] = useState('');
  const [photo, setPhoto] = useState('');
  const [time, setTime] = useState('');
  const [day, setDay] = useState('');
  const [credit, setCredit] = useState('');
  return (
    <Container sx={{ p:2 }} maxWidth="sm">    
      <div>
        <Typography component="h1" variant="h5">
          Create
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container sx={{ pt:2 }} spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                number="s_id"
                label="Subject Code"
                onChange={(e) => setSID(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                number="name"
                label="Name"
                onChange={(e) => setSName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                number="faculty"
                label="Faculty"
                onChange={(e) => setFaculty(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                number="cost"
                label="Cost"
                onChange={(e) => setCost(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                number="photo"
                label="Photo"
                onChange={(e) => setPhoto(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                number="time"
                label="Time"
                onChange={(e) => setTime(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                number="day"
                label="Day"
                onChange={(e) => setDay(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                number="credit"
                label="Credit"
                onChange={(e) => setCredit(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Create
            </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}