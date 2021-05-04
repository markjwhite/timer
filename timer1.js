let args = process.argv.slice(2).sort().map((item) => {
  return Number(item * 1000);
});

const timer1 = (times) => {
  let timeout = 0;
  //timer
  for (let i = 0; i < times.length; i++) {
    //ignore negative numbers
    if (times[i] > 0) {
      timeout = times[i];
      setTimeout(() => {
        process.stdout.write("beep!\n");
      }, timeout);
    }
  }
};
timer1(args);