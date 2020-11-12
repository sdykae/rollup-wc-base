import React, {FC} from 'react'
import AppStyles from './app.scss';
import {unsafeCSS} from 'lit-element';
const App = () => {
  

  document.adoptedStyleSheets = [...document.adoptedStyleSheets, unsafeCSS(AppStyles).styleSheet];

  return <div>My component 🧚‍♀️✨</div>
}

export default App