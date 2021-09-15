const balance = 15000;
euro = 4.54;

const balanceOnEur = () => {
  console.log("euro amount");
  console.log(balance / euro);
};

const eurOnPln = () => {
  const balance = 15000 / euro;
  console.log(balance * euro);
};

balanceOnEur();
eurOnPln();

const five = () => {
    console.log("euro amount - 5");
  console.log(balance / euro - 5);
};

five();