import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function SubjectUpdate() {  
  const { s_id } = useParams();
  useEffect(() => {
    fetch("https://jittery-lime-snail.cyclic.app/SubjectUpdate" + s_id)
      .then(res => res.json())
      .then(result => {
        if (result && result.subject && result.subject.s_id) {
          setS_Name(result.subject.s_name || '');
          setFaculty(result.subject.faculty || '');
          setCost(result.subject.cost || '');
          setPhoto(result.subject.photo || '');
          setTime(result.subject.time || '');
          setDay(result.subject.day || '');
          setCredit(result.subject.credit || '');
        }
      })
      .catch(error => {
        console.error('Error fetching subject:', error);
      });
  }, [s_id]);

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
    fetch('https://jittery-lime-snail.cyclic.app/SubjectUpdate', {
      method: 'PUT',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(
      (result) => {
        alert(result['message'])
        if (result['status'] === 'ok') {
          window.location.href = '/';
        }
      }
    )
  }

  const [s_name, setS_Name] = useState('');
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
                number="name"
                label="Name"
                onChange={(e) => setS_Name(e.target.value)}
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