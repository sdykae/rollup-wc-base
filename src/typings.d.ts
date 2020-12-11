// import { CSSResult, CSSResultArray } from "lit-element";
declare module "*.scss" {
  const content: string;
  export = content;
}
declare module "*.sass";
declare module "*bg.wasm" {
  // const content: WebAssembly.Module;
  const exp: () => () => WebAssembly.Module;
  // export = function module(): {
  // let modulee: WebAssembly.Module;
  // return modulee;
  // }
  export = exp;
  // export default content;
  // export = ()=> () => {const e : WebAssembly.Module; return e }
}
// {
//   const content: {[className: string]: string};
// const content: CSSResult;
// export = content;
// }

// export interface CSSStyleSheet {
//   replaceSync(cssText: string): void;
//   replace(cssText: string): Promise<unknown>;
// }
