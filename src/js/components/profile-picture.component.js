import { html, LitElement } from 'lit-element';

let styles = html`
  <style>
    .profile-picture {
      height: var(--profile-picture-dimension);
      width: var(--profile-picture-dimension);
      overflow: hidden;
      border-radius: 20em;
      position: relative;
    }

    .profile-picture svg {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      transition: opacity 500ms linear;
    }

    .profile-picture img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      transition: opacity 500ms linear;
    }
  </style>
`;

class ProfilePicture extends LitElement {
  render() {
    return html`
      ${styles}

      <div id="profile-picture" class="profile-picture">
        <slot></slot>
      </div>
    `;
  }

  static get properties() {
    return {};
  }

  firstUpdated() {
    const img = new Image();
    img.src = 'images/profile-picture.jpg';
    img.alt = 'Profile picture for Mike Geyser';
    img.style.opacity = '0';

    img.onload = () => {
      const parent = this.shadowRoot.getElementById('profile-picture');
      const placeholder = parent.querySelector('slot');
      placeholder.style.opacity = '0';
      setTimeout((_) => placeholder.remove(), 500);

      parent.appendChild(img);
      setTimeout((_) => (img.style.opacity = '1'), 1);
    };
  }
}

window.customElements.define('profile-picture', ProfilePicture);
