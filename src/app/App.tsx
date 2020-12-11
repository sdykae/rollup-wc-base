import React, { FC } from "react";
import AppStyles from "./app.scss";
import { unsafeCSS } from "lit-element";

import * as ts from "typescript";

// interface Iname {
//   statement1: string;
//   statement2: number;
//   statement3: boolean;
// }
const baseInterface = `
interface Iname {
  statement1: string;
  statement2: number;
  statement3: boolean;
}
`;

const printer: ts.Printer = ts.createPrinter();
const sourceFile: ts.SourceFile = ts.createSourceFile(
  "test.ts",
  `
  let x = n + 42;
  `,
  ts.ScriptTarget.ES2015,
  true,
  ts.ScriptKind.TS
);

const lit = ts.createAdd(ts.createLiteral(42), ts.createLiteral("foo"));
const sourceEmptyFile: ts.SourceFile = ts.createSourceFile(
  "test2.ts",
  "",
  ts.ScriptTarget.ES2015,
  true,
  ts.ScriptKind.TS
);
// console.log(
// ts.createPrinter().printNode(ts.EmitHint.Expression, lit, sourceEmptyFile),
// "my srcprinter"
// );

const lita = ts.createArrowFunction(
  [],
  [],
  [
    ts.createParameter(
      [],
      [],
      undefined,
      "x",
      undefined,
      ts.createTypeReferenceNode("number", [])
    ),
  ],
  undefined,
  undefined,
  ts.createLiteral(42)
);
const transformer = <T extends ts.Node>(context: ts.TransformationContext) => (
  rootNode: T
) => {
  function visit(node: ts.Node): ts.Node {
    console.log("Visiting " + ts.SyntaxKind[node.kind]);
    return ts.visitEachChild(node, visit, context);
  }
  return ts.visitNode(rootNode, visit);
};

const result = ts.transform(sourceFile, [transformer]);

const transformedSourceFile = result.transformed[0];

// console.log(
// ts.createPrinter().printNode(ts.EmitHint.SourceFile, transformedSourceFile, sourceEmptyFile),
// "my srcprinter for transformed"
// );

// console.log(printer.printFile(sourceFile));
const nodee = sourceFile.statements[0].parent;
// console.log(nodee);

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
