import { html, LitElement } from "lit-element";

let styles = full_width => html`
  <style>
    :host {
      display: ${full_width ? "block" : "inline-block"};
    }

    canvas {
      display: block;
      width: 100%;
      height: 30px;
    }
  </style>
`;

class RoughUnderline extends LitElement {
  static get properties() {
    return {
      full_width: Boolean
    };
  }

  render() {
    return html`
      ${styles(this.full_width)}

      <slot></slot>
      <canvas id="underline"></canvas>
    `;
  }

  firstUpdated() {
    setTimeout(() => {
      let width = this.shadowRoot.host.clientWidth;
      let height = 20;

      let canvas = this.shadowRoot.getElementById("underline");
      let rc = rough.canvas(canvas);
      let y = (height * 2 / 3);

      rc.line(0, y, width, y, {
        roughness: 1,
        bowing: 5,
        strokeWidth: 8
      });
    }, 100);
  }
}

window.customElements.define("rough-underline", RoughUnderline);
