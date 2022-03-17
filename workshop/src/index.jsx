import '../assets/stylesheets/application.scss';

import ReactDOM from 'react-dom';
import React from "react"; // importing the JSX

import App from './components/App';
// tell react where in the html i want to act my react code
// here inside our div root
const root = document.querySelector("#root");
// to act some react need to add a package  (see up)
// gives a reactDom object to help to render some stuff in ou selected element
// ReactDOM.render("some stuff", root); it will print Some stuff on our html page
// need to importe react to use JSX (+l4)in our reactDom object

// const Hello = (props) => {
//   // destructuration : store each props value inside a set of variables
//   const { name, flag } = props
//   return <h1>Hello {props.name}!!!</h1> then we don't need to use the "props"
//   return ( //adding parenthesis to do multilines
//     <div>
//       <h1>Hello {name}!!! {flag}</h1>
//     </div>
//   );
// };
// this code can be obtain by rsc+tab (functional component)

// create a class
// eslint-disable-next-line react/prefer-stateless-function
// class Hello extends React.Component {
//   render() {
//     const { name, flag } = this.props  // because we are in a class component, it's not props
//     return ( //adding parenthesis to do multilines
//       <div>
//         <h1>Hello {name}!!! {flag}</h1>
//       </div>
//     );
//   };
// }

ReactDOM.render(<App />, root);

// 2 synthaxes
// JS function :
//  (capital H for react synthax for components) = ( => {
//  react functions takes always a props as a param
