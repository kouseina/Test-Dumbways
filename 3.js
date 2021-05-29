const drawImage = (sum) => {
  for (let a = 0; a < sum; a++) {
    let row = "";
    for (let b = 0; b < sum; b++) {
      const middle = Math.floor(sum / 2);

      if (
        a === middle ||
        b === middle ||
        (a === 0 && b === 0) ||
        (a === 0 && b === sum - 1) ||
        (a === sum - 1 && b === 0) ||
        (a === sum - 1 && b === sum - 1)
      ) {
        row += "* ";
      } else {
        row += "= ";
      }
    }
    console.log(row);
  }
};

drawImage(11);
