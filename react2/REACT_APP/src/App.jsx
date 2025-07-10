import { useState } from 'react';
import ComponentOne from './Components/ComponentOne.jsx';
import './App.css';




function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="main">
      <h1 class="containermain">India Test Team – 2025 </h1>
      <div class="container">  
      <ComponentOne name="Shubman Gill" role="Captain / Opener" photo="https://media.gettyimages.com/id/2191734132/photo/sydney-australia-shubman-gill-of-india-before-the-start-of-day-one-of-the-fifth-nrma.jpg?s=612x612&w=gi&k=20&c=P94-xfDLb58sbxGL9SYJdjLLNidqULcz0YpJQXh7Hx0="/>
      <ComponentOne name="Rishabh Pant" role="Vice-Captain / Wicketkeeper" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz05MSBvhplarOWWV7Fd0OEaompSZZMoK8Gw&s" />
      <ComponentOne name="Yashasvi Jaiswal" role="Opener" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9_t0y1xgjGLaCvkWpex0UVvBUWHxK2VnHEA&s"/>
      <ComponentOne name="KL Rahul" role="Top-order Batter" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUEMJb_lNW80C05wLcOIEXOhjMeKETOi55Kg&s"/>
      <ComponentOne name="Sai Sudarshan" role="Middle-order Batter" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYnUAqP9hWQO5uL6HqkP32zmj2dyZzcemQdw&s"/>
      <ComponentOne name="Karun Nair" role="Batsman" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCT0wjiGvlgWoPhJbfNpnMFco468hOLJoiQ&s"/>
      <ComponentOne name="N.K.Reddy" role="Batting All-Rounder" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU9BJdPcgG3JvDo-2G2miVDx_SRl3Y47YkLw&s"/>
      <ComponentOne name="Ravindra Jadeja" role="All-Rounder / Spinner" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KGcZzbzcpUaUKOE7oCx_LOMNJOPjbR3IxA&s"/>
      <ComponentOne name="W.Sundar" role="All-Rounder / Spinner" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG2Nls0D_o_w9RfmVytr9Wcxv6I0goIlDEIg&s"/>
      <ComponentOne name="Shardul Thakur" role="All-Rounder / Pacer" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ajK60qUjJPwH0sbi0izAr00x8JjDoELpHw&s"/>
      <ComponentOne name="Jasprit Bumrah" role="Pace Bowler" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTabjUBIZqvuakKFAztv6gEen6eReJ7PovDqg&s"/>
      <ComponentOne name="Mohammed Siraj" role="Pace Bowler" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIRI780n5WpV6R7aQ-oq8cn7YhZ45QSZ1Zw&s"/>
      <ComponentOne name="Prasidh Krishna" role="Pace Bowler" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkiPofbjMUskNx6p8asB-j1d-z_XtFx-e0NA&s"/>
      <ComponentOne name="Akash Deep" role="Pace Bowler" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrPUvXS7a-Ffagdd8dXub4EF-2gDfwbd6-bXe6YE3R3pN3rqarq8ePGc10yWz_j5UVQI&usqp=CAU"/>
      </div>

    </div>
  );
}

export default App;
