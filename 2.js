const dataKey = ["dumb", "ways", "the", "best"];

const checkWord = (data, key) => {
  data.forEach((e) => {
    if (key.includes(e)) {
      console.log(`${e} => true`);
    } else {
      console.log(`${e} => false`);
    }
  });
};

checkWord(dataKey, "dumbways is best");
