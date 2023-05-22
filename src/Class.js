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
import { useNavigate } from "react-router-dom";

const sections = [
  { title: 'Open Subject', url: '/class' }
];

export default function Subject() {
  const [subject, setSubject] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
      GetSubject()
  }, [])

  const navigate = useNavigate();
  async function login() {
    await navigate("/login");
  }

  const GetSubject = () => {
      fetch("https://jittery-lime-snail.cyclic.app/Subject")
          .then(res => res.json())
          .then(
              (result) => {
                  setSubject(result)
              }
          )
  }

  return (
      <>
          <nav class="navbar navbar-Warning bg-Warning">
              <div class="container-fluid">
                  <b class="navbar-brand"></b>
                  <form class="d-flex">
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
                      <Button key='my user' sx={{ color: '#000000' }} onClick={login}>Attend Class</Button>
                      </ButtonGroup>
                  </ul>
              ))}


      </>





  );
}