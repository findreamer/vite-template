const start = () => {
  let count = 0;

  setInterval(() => {
    count++;
    postMessage(count);
  }, 2 * 1000);
};

start();
