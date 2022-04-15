import React from 'react';
import myPowerPoint from "./files/CloudPresentation.pptx";
import myPDF from "./files/Madden_Richard.pdf";

function App() {
  return (
  <React.Fragment>
    <h1>Systems Architecture - Assigment 2</h1>
    <h3>Files:</h3>
    <ul>
      <li><a href={myPowerPoint}>Q1 - Cloud Presentation</a></li>
      <li><a href={myPDF}>Q2,Q3,Q4 - Identity Management Review</a></li>
    </ul>
  </React.Fragment>
  );
}

export default App;
