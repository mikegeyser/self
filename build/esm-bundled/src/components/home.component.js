import{svg,css,html,PageViewElement,SharedStyles}from"./my-app.js";const profilePicture=svg`
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
    <g id="profile-picture-def">
        <rect fill="#ab9f93" />
        <g transform="scale(4.000000) translate(0.5 0.5)">
            <polygon fill="#442d19" fill-opacity="0.501961" points="137,271 61,39 179,62" />
            <polygon fill="#ffffff" fill-opacity="0.501961" points="10,221 120,246 43,102" />
            <polygon fill="#ffffff" fill-opacity="0.501961" points="136,95 225,149 248,238" />
            <polygon fill="#00142a" fill-opacity="0.501961" points="97,194 162,199 137,267" />
            <polygon fill="#0e0e00" fill-opacity="0.501961" points="75,79 139,11 93,24" />
            <polygon fill="#202c40" fill-opacity="0.501961" points="190,170 84,185 91,132" />
            <polygon fill="#fff6f0" fill-opacity="0.501961" points="93,110 12,165 70,270" />
            <polygon fill="#aeb5b0" fill-opacity="0.501961" points="-16,0 -3,213 116,-16" />
            <polygon fill="#930000" fill-opacity="0.501961" points="80,148 64,192 60,170" />
            <polygon fill="#c79063" fill-opacity="0.501961" points="96,139 114,0 188,131" />
            <polygon fill="#0e0900" fill-opacity="0.501961" points="171,57 147,15 166,95" />
            <polygon fill="#ffffff" fill-opacity="0.501961" points="240,175 199,134 189,201" />
            <polygon fill="#ffffff" fill-opacity="0.501961" points="146,243 182,161 181,209" />
            <polygon fill="#91a6b4" fill-opacity="0.501961" points="123,216 180,178 114,171" />
            <polygon fill="#9e0100" fill-opacity="0.501961" points="187,194 181,145 194,151" />
            <polygon fill="#d08656" fill-opacity="0.501961" points="215,191 247,248 106,271" />
            <polygon fill="#e91a00" fill-opacity="0.501961" points="114,192 82,169 91,199" />
            <polygon fill="#e69b65" fill-opacity="0.501961" points="34,223 189,266 -4,271" />
            <polygon fill="#fff8c6" fill-opacity="0.501961" points="139,26 97,54 151,49" />
            <polygon fill="#110700" fill-opacity="0.501961" points="80,90 98,114 96,34" />
            <polygon fill="#b5bcb6" fill-opacity="0.501961" points="257,217 134,-16 271,-7" />
            <polygon fill="#ffffff" fill-opacity="0.501961" points="192,137 170,163 162,131" />
            <polygon fill="#00101f" fill-opacity="0.501961" points="158,135 116,163 167,158" />
            <polygon fill="#acafa4" fill-opacity="0.501961" points="15,151 89,121 57,-9" />
            <polygon fill="#413928" fill-opacity="0.501961" points="96,33 144,14 149,29" />
            <polygon fill="#ffffff" fill-opacity="0.501961" points="14,235 90,125 31,145" />
            <polygon fill="#000000" fill-opacity="0.501961" points="141,252 115,229 151,230" />
            <polygon fill="#aeb9b5" fill-opacity="0.501961" points="150,121 211,142 194,63" />
            <polygon fill="#73422b" fill-opacity="0.501961" points="15,233 42,229 4,271" />
            <polygon fill="#7e5f3f" fill-opacity="0.501961" points="251,234 211,212 221,259" />
            <polygon fill="#33404b" fill-opacity="0.501961" points="151,227 123,225 174,177" />
            <polygon fill="#ffffff" fill-opacity="0.501961" points="194,193 234,189 191,134" />
            <polygon fill="#805f3b" fill-opacity="0.501961" points="82,125 122,151 166,97" />
            <polygon fill="#ffffff" fill-opacity="0.501961" points="139,189 140,171 148,196" />
            <polygon fill="#ffffff" fill-opacity="0.501961" points="118,189 115,169 121,181" />
            <polygon fill="#eaa273" fill-opacity="0.501961" points="160,69 91,88 96,67" />
            <polygon fill="#ffffff" fill-opacity="0.501961" points="80,176 92,140 76,128" />
            <polygon fill="#5a0000" fill-opacity="0.501961" points="188,188 189,209 182,202" />
            <polygon fill="#dccbb9" fill-opacity="0.501961" points="139,259 54,184 83,269" />
            <polygon fill="#f9fbfb" fill-opacity="0.501961" points="71,171 76,231 115,229" />
            <polygon fill="#ffffff" fill-opacity="0.501961" points="70,227 50,139 23,223" />
            <polygon fill="#54371d" fill-opacity="0.501961" points="103,64 170,66 161,50" />
            <polygon fill="#ffe0c0" fill-opacity="0.501961" points="116,34 133,70 137,29" />
            <polygon fill="#acaca3" fill-opacity="0.501961" points="100,120 21,146 41,57" />
            <polygon fill="#465059" fill-opacity="0.501961" points="119,233 163,195 96,199" />
            <polygon fill="#403f2b" fill-opacity="0.501961" points="155,106 159,32 180,83" />
            <polygon fill="#ffc695" fill-opacity="0.501961" points="123,107 111,93 149,102" />
            <polygon fill="#0f2126" fill-opacity="0.501961" points="102,156 86,126 136,163" />
            <polygon fill="#ebb573" fill-opacity="0.501961" points="236,232 199,267 130,254" />
            <polygon fill="#84462d" fill-opacity="0.501961" points="73,73 137,98 143,79" />
        </g>
    </g>
</svg>
`;var svgPictures={profilePicture:profilePicture};const styles=css`
  .profile-picture {
    height: 25vw;
    width: 25vw;
    overflow: hidden;
    border-radius: 20em;
    position: relative;
    float: left;
    margin: 1em 1em 1em 0;
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

  h1 {
    font-size: 2em;
    margin: 1em 0 0.5em 0;
    font-family: var(--app-heading-font);
  }

  div.paragraph {
    padding: 0;
    text-align: justify;
    line-height: 1.8em;
  }

  @media (min-width: 460px) {
    .profile-picture {
      height: 20em;
      width: 20em;
    }

    h1 {
      font-size: 4em;
    }

    div.paragraph {
      float: left;
      width: 35em;
      margin-left: 2em;
  }
`;class Home extends PageViewElement{static get styles(){return[SharedStyles,styles]}render(){return html`
      <section>
        <div class="container">
          <div id="profile-picture" class="profile-picture">
            ${profilePicture}
          </div>

          <div class="paragraph">
            <h1>
              Hi, I'm Mike!
            </h1>
            <p>
              I’m a Google Developer Expert in Web Technologies from Johannesburg, South Africa, where I work in the R&D
              team at a company called BBD. I am a co-organiser of the Jozi.JS meetup group, and a frequent technical
              speaker. I have been hacking on the web since Geocities was a 'thing', and have the keening wail of dialup
              modem etched into my subconscious.
            </p>
            <p>
              While I am fluent in several ‘golden hammer’ programming languages, I have a long-lived love affair with
              JavaScript, and cannot see its (many, obvious) flaws. I have worked on lots of interesting enterprise
              applications, but it is the challenges of the public web that really appeal to me - having spent my
              formative years building transactional websites.
            </p>
            <p>
              I am always eager to talk about the web platform, but be warned, I am prone to hyperbole.
            </p>

            <a href="https://twitter.com/mikegeyser/">@mikegeyser</a>
          </div>
        </div>
      </section>
    `}firstUpdated(){const img=new Image;img.src="images/profile-picture.jpg";img.style.opacity="0";img.onload=()=>{const parent=this.shadowRoot.getElementById("profile-picture"),placeholder=parent.getElementsByTagName("svg")[0];placeholder.style.opacity="0";setTimeout(_=>placeholder.remove(),500);parent.appendChild(img);setTimeout(_=>img.style.opacity="1",1)}}}window.customElements.define("m-home",Home);export{svgPictures as $svgPictures,profilePicture};