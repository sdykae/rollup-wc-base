import { LitElement, html, css, property,CSSResult, unsafeCSS } from 'lit-element';
import AppStyles from './app-component.scss';

export class AppComponent extends LitElement {
  @property({ type: String }) page = 'main';

  @property({ type: String }) title = '';

  static styles = [
    css` ${unsafeCSS(AppStyles)}`, 
  ];

  render() {
    return html`
      <form>
        <input type="text" name="yourname" required autocomplete="off">
        <input type="text" name="yourname" required autocomplete="off">
        <div clas="a "></div>
        <div clas="b"></div>
        <div clas="c"></div>
        <label for="yourname">Your Name</label>
      </form>
        <input type="text" name="yourname" required autocomplete="off">
        <input type="text" name="yourname" required autocomplete="off">
        <input type="text" name="yourname" required autocomplete="off">
    `;
  }
}