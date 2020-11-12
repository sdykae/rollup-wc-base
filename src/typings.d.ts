// import { CSSResult, CSSResultArray } from "lit-element";
declare module '*.scss'{
  const content: string;
  export = content;
}
declare module '*.sass';
// {
//   const content: {[className: string]: string};
  // const content: CSSResult;
  // export = content;
// }

// export interface CSSStyleSheet {
//   replaceSync(cssText: string): void;
//   replace(cssText: string): Promise<unknown>;
// }