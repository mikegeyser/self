import 'css-paint-polyfill';

if ('paintWorklet' in CSS) {
  try {
    CSS.paintWorklet.addModule(`${window.location.origin}/js/sketchy-underline.js`);
  } catch (error) {
    console.log(error);
  }
}
