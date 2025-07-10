import React from "react";

function ComponentOne({ name, role ,photo}) {
  return (
    <>
    <div className="card">
      
      <h1 class="name">Name: {name}</h1>
      <h2 class="role">Role: {role}</h2>
      <a href={photo} >
        <img src={photo} class="image" />
      </a>


    </div>
    </>
  );
}

export default ComponentOne;
