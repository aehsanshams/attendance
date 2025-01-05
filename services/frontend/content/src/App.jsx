import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import ReactDom from "react-dom/client";
import './App.css'



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

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



// function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!email || !password) {
//       setErrorMessage('Both fields are required.');
//       return;
//     }

//     // Mock authentication logic
//     if (email === 'user@example.com' && password === 'password123') {
//       alert('Login successful!');
//     } else {
//       setErrorMessage('Invalid email or password.');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
//       <h2>Login</h2>
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '15px' }}>
//           <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
//             required
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
//             required
//           />
//         </div>
//         <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px' }}>Login</button>
//       </form>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <LoginForm />
//     </div>
//   );
// }


// usestate()
// import { useState } from "react";
// import ReactDOM from "react-dom/client";

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

export default App;
