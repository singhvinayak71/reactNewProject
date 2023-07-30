// import React from "react";
// import Youtube from "./Youtube";
// import Hotstar from "./Hotstar";

// const favMovie  ="Youtube";

// function App() {
//   return (
//     <>
//       <h1>List of top Youtube movie in 2023</h1>
//       {favMovie==='Youtube'? <Youtube/>:<Hotstar/>}   {/*conditional rendering*/}
//     </>
//   );
// }
// export default App;
import React from "react";
import Card from "./Card";
import MyObj from "./MyObj";

function App() {
  return (
    <div>
      <h1>List of top Youtube movie in 2023</h1>
      {MyObj.map((val)=>{
        return(
          <Card
              key={val.id}
              imgSrc={val.imgSrc}
              name={val.name}
              link={val.link}
            />
        )
      })}
    </div>
  );
}
export default App;
