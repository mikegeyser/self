import 'css-paint-polyfill';

if ('paintWorklet' in CSS) {
    CSS.paintWorklet.addModule(`${window.location.origin}/js/rough.js`);
}
