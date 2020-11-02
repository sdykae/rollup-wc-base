console.log("BREAK-P")
import { LitElement, html, css, property,CSSResult, unsafeCSS } from 'lit-element';
// import {AppStyles} from './app-component.sass';
// import {style}  from '../styles/styles.css';
// import {styles} from '../styles/styles.css';
import something from '../components/app-component.scss';
// export {default as stylees} from '../components/app-component.scss';
// import {styless} from './css-importer';
// import {styless} from './css-importer';
// import './app-component.scss';
// console.log(styleee, "EMIT");

import {MDCTextField} from '@material/textfield/index';
// import { styless } from './css-importer';
console.log(something)
export class AppComponent extends LitElement {

  @property({ type: String }) page = 'main';

  @property({ type: String }) title = '';

  static styles = [
    // plain css
    unsafeCSS(something)
    // css`${styless}`
    // unsafeCSS(stringStyle)
    // styles
    // styleee,
    // css` ${unsafeCSS(AppStyles)}`, 
  ];
  connectedCallback() {
    super.connectedCallback();
    console.log(this.shadowRoot?.querySelector('#my-label-id'))
    console.log(this.shadowRoot?.querySelector('my-label-id'))
    console.log(this.shadowRoot?.querySelector('label'))
  }
  firstUpdated() {
    super.firstUpdated();
    // const textField = new MDCTextField(this.shadowRoot?.querySelect('.mdc-text-field'));
    console.log(this.shadowRoot?.querySelector('#my-label-id'))
    console.log(this.shadowRoot?.querySelector('my-label-id'))
    console.log(this.shadowRoot?.querySelector('.mdc-text-field'))
    new MDCTextField((this.shadowRoot?.querySelector('.mdc-text-field')))
  }

  render() {

    return html`
    <label class="mdc-text-field mdc-text-field--filled">
      <span class="mdc-text-field__ripple"></span>
      <span class="mdc-floating-label" id="my-label-id">Hint text</span>
      <input class="mdc-text-field__input" type="text" aria-labelledby="my-label-id">
      <span class="mdc-line-ripple"></span>
    </label>
    `;
  }
}