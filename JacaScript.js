//--------------------------------------- JavaScript Ternary Operator
  let speed = 150;
  let message = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'OK';
  console.log(message);

//-------------------------------------- JavaScript Object Spread
  //-- #1
      let colors = ['red', 'green', 'blue','df','sdf','weg'];
      let rgb = [...colors];
      let afrom = Array.from(colors);
      console.log(afrom);
      console.log([...colors]);
        // * Output
        // [ 'red', 'green', 'blue', 'df', 'sdf', 'weg' ]
  //-- #2
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
  //-- #3
          const circle = {
          radius: 10,
          style: {
              color: 'blue'
          }
          };    
          const clonedCircle = {
              ...circle
          };   
          clonedCircle.style = 'red';
          console.log(clonedCircle);
           // * Output
              // { radius: 10, style: 'red' }
  //-- #4
          const circle = {
              radius: 10
          };
          const style = {
              backgroundColor: 'red'
          };
          const solidCircle = {
              ...circle,
              ...style
          };
          console.log(solidCircle);
          // * Output
              // { radius: 10, backgroundColor: 'red' }
  //-- #5
          class Circle {
                constructor(radius) {
                    this.radius = radius;
                }
                set diameter(value) {
                    this.radius = value / 2;
                    console.log('SET ', value);
                }
                get diameter() {
                    return this.radius * 2;
                }
            }
            let circle = new Circle(100);
            let cloneCircle1 = Object.assign(circle, {
                diameter: 200
            });
            let cloneCircle2 = {
                ...circle
            };
  //-- #6
          const blueSquare = {
              length: 100,
              color: 'blue'
          };
          Object.defineProperty(blueSquare, 'color', {
              value: 'blue',
              enumerable: true,
              writable: false
          });
          console.log(blueSquare);
          // merge style and blueSquare objects:
          const style = {
              color: 'green'
          };
          const greenSquare = {
              ...blueSquare,
              ...style
          };
          console.log(greenSquare);
          // * Output
          // { length: 100, color: 'blue' }
          // { length: 100, color: 'green' }

//-------------------------------------- JavaScript switch case

          let year = 2024;
          let month = 3;
          let dayCount;
          
          switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
              dayCount = 31;
              break;
            case 4:
            case 6:
            case 9:
            case 11:
              dayCount = 30;
              break;
            case 2:
              // leap year
              if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
                dayCount = 29;
              } else {
                dayCount = 28;
              }
              break;
            default:
              dayCount = -1; // invalid month
          }
          console.log(dayCount); // 29
