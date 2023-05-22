import React from 'react'
import './MyCard.css';

function MyCard(props) {
  return (
    <>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card border-light" style={{ width: '18rem' }}>
            <img src={props.photo} class="card-img-top" alt={props.id} />
            <div class="card-body text-end">
              <center class="card-title"> {props.id}</center>
              <p class="card-text"> Name : {props.name}</p>
              <p class="card-text"> Cost : {props.cost}</p>
              <p class="card-text"> Credit : {props.credit}</p>
              <p class="card-text">Faculty : {props.faculty}</p>
              <p class="card-text"> Date : {props.day} , {props.time}</p>
                {/* <a href="#" class="btn btn-primary">Watch</a> */}
              </div>
            </div>
          </div>
        </div>

    </>
  )
}

export default MyCard
