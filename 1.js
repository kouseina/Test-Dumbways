// kenapa 3/2? , karena burung memerlukan satu pasang induk untuk menetaskan telurnya

const sumLovebird = () => {
  let lovebird = 6969;
  const jumlahNetas = 441 / 21;

  for (let i = 1; i <= jumlahNetas; i++) {
    lovebird = lovebird - lovebird * (11.1 / 100);
    console.log(
      `hari ke: ${i * jumlahNetas}, lovebird idup: ${Math.ceil(lovebird)}`
    );

    lovebird = lovebird * (3 / 2);
    console.log(
      `hari ke: ${i * jumlahNetas}, lovebird idup + anaknya: ${Math.ceil(
        lovebird
      )}`
    );
  }
};

sumLovebird();
