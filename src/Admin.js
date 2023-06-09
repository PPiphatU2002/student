import * as React from 'react';
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Header from './Header.js';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from "react-router-dom";
import MyCard from './MyCard';
import login from './login.js';
import Correct from './Correct.js'
import './Class.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Subject() {
  const [subject, setSubject] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
      GetSubject()
  }, [])

  const GetSubject = () => {
      fetch("https://jittery-lime-snail.cyclic.app/Subject")
          .then(res => res.json())
          .then(
              (result) => {
                  setSubject(result)
              }
          )
  }

  const SubjectUpdate = s_id => {
    window.location = '/SubjectUpdate/' + s_id
}

  const DeleteSubject = s_id => {
    const data = {
        's_id': s_id
    }
    fetch('https://jittery-lime-snail.cyclic.app/DeleteSubject', {
        method: 'DELETE',
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
                if (result['status'] === 'OK') {
                    GetSubject();
                }else{
                    console.log(result)
                }
            }
        )
}

  return (
      <>
          <nav class="navbar navbar-Warning bg-Warning">
              <div class="container-fluid">
                  <b class="navbar-brand"></b>
                  <form class="d-flex">
                        <Box>
                            <Link to="/SubjectCreate">
                                <Button variant="contained" color="warning"> CREATE
                                </Button>
                            </Link>
                        </Box>
                      <input
                          placeholder="Search"
                          className="btn btn-outline-dark"
                          onChange={(event) => setQuery(event.target.value)}
                      />
                      
                  </form>
              </div>
          </nav>
          {subject.filter((s_id) => {
                  if (query === '') {
                      return s_id;
                  } else if (
                      s_id.s_id.toLowerCase().includes(query.toLowerCase())
                  ) {
                      return s_id;
                  }
                  return null; // Default return statement
              })
              .map((subject) => (
                  <ul className="grid-container" id={subject.s_id}>
                      <MyCard
                          id={subject.s_id}
                          name={subject.s_name}
                          faculty={subject.faculty}
                          cost={subject.cost}
                          photo={subject.photo}
                          time={subject.time}
                          day={subject.day}
                          credit={subject.credit}
                      />
                      <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button onClick={() => SubjectUpdate(subject.s_id)}>Update</Button>
                      <Button onClick={() => DeleteSubject(subject.s_id)}>Delete</Button>
                      </ButtonGroup>
                  </ul>
              ))}
      </>
  );
}