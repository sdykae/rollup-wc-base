import React, { FC } from "react";
import AppStyles from "./app.scss";
import { unsafeCSS } from "lit-element";

import {
  createPrinter,
  Printer,
  SourceFile,
  createSourceFile,
  ScriptTarget,
  ScriptKind,
} from "typescript";

const printer: Printer = createPrinter();
const sourceFile: SourceFile = createSourceFile(
  "test.ts",
  "const x  :  number = 42",
  ScriptTarget.ES2015,
  true,
  ScriptKind.TS
);
console.log(printer.printFile(sourceFile));

const App = () => {
  //@ts-ingore
  //@ts-nocheck
  document.adoptedStyleSheets = [
    ...document.adoptedStyleSheets,
    unsafeCSS(AppStyles).styleSheet,
  ];

  return <div>My component 🧚‍♀️✨</div>;
};

export default App;
