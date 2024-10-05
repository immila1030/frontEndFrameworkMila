const updateText = () => {
  const el = document.querySelector('#text');
  if (el) {
    el.textContent = 'hi123';
  }
};

if (import.meta.hot) {
  //   console.log('vite');
  import.meta.hot.accept((m) => {
    // console.log(m);
    m.updateText();
  });
}

export { updateText };
