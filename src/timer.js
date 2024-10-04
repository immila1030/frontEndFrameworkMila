const setTimer = (el) => {
  const target = document.querySelector(el);
  if (target) {
    target.textContent = Date.now();
  }
};
export { setTimer };
