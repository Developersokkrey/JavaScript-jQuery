//--------------------------------------- JavaScript Ternary Operator
  let speed = 150;
  let message = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'OK';
  console.log(message);

//-------------------------------------- JavaScript Object Spread
  //-- 1
    let colors = ['red', 'green', 'blue','df','sdf','weg'];
    let rgb = [...colors];
    let afrom = Array.from(colors);
    console.log(afrom);
    console.log([...colors]);
      // * Output
      // [ 'red', 'green', 'blue', 'df', 'sdf', 'weg' ]
  //-- 2
    const circle = {
        radius: 10
    };
    const coloredCircle = {
        ...circle,
        color: 'black'
    };
    console.log(coloredCircle);
      // * Output
      // {
      //   radius: 10,
      //   color: 'black'
      // }

