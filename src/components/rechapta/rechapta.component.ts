import { LitElement, html, css, property,CSSResult, unsafeCSS, PropertyValues } from 'lit-element';
import cdcss from './rechapta.component.scss';

export class RechaptaComponent extends LitElement {

  constructor() {
    super();


  }
  static styles = [
    unsafeCSS(cdcss)
  ];
  connectedCallback() {
    super.connectedCallback();
  }
  firstUpdated(a: PropertyValues<this>) {
    super.firstUpdated(a);
    // this.onLoad();
    // setTimeout(()=>{
      // this.onLoad()
    // },1000);
  }

 

  script() {
    let script = document.createElement('script');
    // script.async = true;
    script.onload = this.onLoad.bind(this);
    // script.src = 'https://www.google.com/recaptcha/api.js';
    // script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
    script.src = 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit';
    return script;
  }
  verifyCallback(response){
    console.log(response)
  }
  onLoad() {
    
    // @ts-ignore
      // window.grecaptcha.render(this.shadowRoot?.getElementById('html_element'), {
        // 'sitekey' : '6LfpBuAZAAAAANn2NPOc1dgBUXaxrlx11J1zK2J7',
        // 'callback' : 'verifyCallback'
      // });
      window.onloadCallback = function() {
        window.grecaptcha.render(this.shadowRoot?.getElementById('html_element'), {
          'sitekey' : '6LfpBuAZAAAAANn2NPOc1dgBUXaxrlx11J1zK2J7',
          'callback' : 'verifyCallback',
          'theme' : 'dark'
        }).bind(this);
      }.bind(this);




  }




  render() {
    return html`
      <div 
        id='html_element'
      ></div>
      <!-- <button class="g-recaptcha"  -->
        <!-- data-sitekey="reCAPTCHA_site_key"  -->
        <!-- data-callback='onSubmit'  -->
        <!-- data-action='submit'>Submit</button> -->

      <div >hii</div>
      ${this.script()}
    `;
  }
}