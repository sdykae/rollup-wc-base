console.log("BREAK-P");
import {
  LitElement,
  html,
  css,
  property,
  CSSResult,
  unsafeCSS,
  PropertyValues,
} from "lit-element";
import something from "../components/app-component.scss";

// import { styless } from './css-importer';
export class AppComponent extends LitElement {
  @property({ type: String }) page = "main";

  @property({ type: String }) title = "";

  static styles = [
    // plain css
    unsafeCSS(something),
  ];
  connectedCallback() {
    super.connectedCallback();
  }
  firstUpdated(a: PropertyValues<this>) {
    super.firstUpdated(a);
    a.get("title");
    console.log(a.get("page"));
    a.forEach((oldValue, propName) => {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      // console.log(`${propName} changed. oldValue: ${oldValue}`);
    });
  }

  render() {
    return html``;
  }
}
