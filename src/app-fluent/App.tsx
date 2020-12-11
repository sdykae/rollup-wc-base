import React, { FC } from "react";
import { unsafeCSS } from "lit-element";
import AppStyles from "./app.scss";
// import Module from "../wasm/dist/project";
// import { PrimaryButton } from "@fluentui/react";

// import { DefaultButton, initializeIcons } from "office-ui-fabric-react";
// import { ThemeProvider, PartialTheme } from '@fluentui/react';

// const appTheme: PartialTheme = {
// palette: {
// themePrimary: 'red'
// }
// };

// console.log(Module.call().then(x=>console.log(x.lerp(1, 2, 0.5))));

import init from "libmee";
import defaa from "libmee/libmee_bg.wasm";
// init("../../node_modules/libmee/libmee_bg.wasm").then(x=>x.greet());
async function moduless() {
  const my_module = await init(await defaa());
  // .thent(x=>x.greet());
  return my_module.greet();
}

moduless();
// init(wasm).then(x=>x.greet());

const App = () => {
  document.adoptedStyleSheets = [
    ...document.adoptedStyleSheets,
    unsafeCSS(AppStyles).styleSheet,
  ];

  return <div>My component 🧚‍♀️ ✨</div>;
};

export default App;
