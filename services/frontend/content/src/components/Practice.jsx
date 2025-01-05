import React,{useState} from "react";


// example of how to use props

// function Car(props) {
//   return <h2>I am a { props.brand }!</h2>;
// }

// function App() {
//   return <Car brand='Ford'/>
// }

// creating form 

// function Myform() {
//   return (
//     <form>
//       <label>Enter your name:
//         <input type="text" />
//       </label>
//       <div>
//         <button>Submit</button>
//       </div>
//     </form>
//   )
// }
// const root = ReactDom.createRoot(document.getElementById('root'));

// root.render(< Myform />);






// usestate()
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}

function App() {
  return (
    <div>
      < Car />
    </div>
  )
}


// some example of How to use usestate

// function Aboutyou() {
//   const [fname, setFname] = useState("Aehsan");
//   const [lname, setLname] = useState("Shams");
//   const [byear, setByear] = useState('2002');
//   const [height, setHeight] = useState('6fit');
//   const [color, setColor] = useState("yellow-Brown");
//   const [eyecolor, setEyecolor] = useState("black");
//   return (
//     <>
//       <h3>My Name Is {fname} {lname}</h3>
//       <p>
//         and I Born in {byear} Height {height} Color {color} and Eyecolor {eyecolor}.
//       </p>
//     </>
//   )
// }
// function App(){
//   return(
//     <div>
//       < Aboutyou/>
//     </div>
//   )
// }

// Create a single Hook that holds an object:

// function Aboutyou() {
//   const [aboutyou, setAboutyou] = useState({
//     fname: 'Aehsan',
//     lname: 'Shams',
//     byear: '2002',
//     height: '6ft',
//     color: 'yellow-brown',
//     eyecolor: 'black'
//   });
//   return (
//     <>
//       <h2>About me</h2>
//       <h3>My name is {aboutyou.fname} {aboutyou.lname}</h3>
//       <p>
//         and my birth year is {aboutyou.byear}
//         height {aboutyou.height}
//         color {aboutyou.color}
//         and eyecolor {aboutyou.eyecolor}
//       </p>
//     </>
//   )
// }
// function App() {
//   return (
//     <div>
//       < Aboutyou />
     
//     </div>
//   )
// }

// Use the JavaScript spread operator to update only the eyeColor of the Aboutyou:

// function Aboutyou() {
//   const [aboutyou, setAboutyou] = useState({
//     fname: 'Aehsan',
//     lname: 'Shams',
//     byear: '2002',
//     height: '6ft',
//     color: 'yellow-brown',
//     eyecolor: 'black'
//   });
//   const updateEyeColor = () => {
//     setAboutyou(previousState => {
//       return {...previousState, eyecolor: "brown"}
//     });
//   }
//   return (
//     <>
//       <h2>About me</h2>
//         <h3>My name is {aboutyou.fname} {aboutyou.lname}</h3>
//           <p>
//             and my birth year is {aboutyou.byear}
//             height {aboutyou.height}
//             color {aboutyou.color}
//             and eyecolor {aboutyou.eyecolor}
//           </p>  
//       <button
//         type="button"
//         onClick={updateEyeColor}
//       >Blue</button>
//     </>
//   )
// }
// function App() {
//   return (
//     <div>
//       <Aboutyou />
//     </div>
//   )
// }

// useEfffect

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   });

//   return <h1>I've rendered {count} times!</h1>;
// }
// function App(){
//   <div>
//     < Timer/>
//   </div>
// }