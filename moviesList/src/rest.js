import React from "react";
import Youtube from "./Youtube";
import Hotstar from "./Hotstar";

const favMovie  ="Youtube";

function App() {
  return (
    <>
      <h1>List of top Youtube movie in 2023</h1>
      {favMovie==='Youtube'? <Youtube/>:<Hotstar/>}   {/*conditional rendering*/}
    </>
  );
}
