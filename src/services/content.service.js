export const getContent = () =>
  fetch('content/index.json')
    .then((response) => response.json())
    .then((index) => console.log(index));
