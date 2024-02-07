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

//-------------------------------------- JavaScript do…while Loop

    // generate a secret number between 1 and 10
    const MIN = 1;
    const MAX = 10;
    
    let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
    
    let guesses = 0; // for storing the number of guesses
    let hint = ''; // for storing hint
    let number = 0;
    do {
      // get input from user
      let input = prompt(`Please enter a number between ${MIN} and ${MAX}` + hint);
    
      // get the integer
      number = parseInt(input);
    
      // increase the number of guesses
      guesses++;
    
      // check input number with the secret number provide hint if needed
      if (number > secretNumber) {
        hint = ', and less than ' + number;
      } else if (number < secretNumber) {
        hint = ', and greater than ' + number;
      } else if (number == secretNumber) {
        alert(`Bravo! you're correct after ${guesses} guess(es).`);
      }
    } while (number != secretNumber);

//-------------------------------------- JavaScript Functions are First-Class Citizens
      function compareBy(propertyName) {
        return function (a, b) {
          let x = a[propertyName],
            y = b[propertyName];
      
          if (x > y) {
            return 1;
          } else if (x < y) {
            return -1;
          } else {
            return 0;
          }
        };
      }
      let products = [
        { name: 'iPhone', price: 900 },
        { name: 'Samsung Galaxy', price: 850 },
        { name: 'Sony Xperia', price: 700 },
      ];
      
      // sort products by name
      console.log('Products sorted by name:');
      products.sort(compareBy('name'));
      
      console.table(products);
      
      // sort products by price
      console.log('Products sorted by price:');
      products.sort(compareBy('price'));
      console.table(products);

//-------------------------------------- JavaScript Anonymous Functions
    //-- #1
      let _person = {
          firstName: 'John',
          lastName: 'Doe'
      };
      (function (p) {
          console.log(p.firstName + ' ' + p.lastName);
      })(_person);

    //-- #2
      let person = {
          firstName: 'John',
          lastName: 'Doe'
      };
      
      (function () {
          console.log(person.firstName + ' ' + person.lastName);
      })(person);
    //-- #2
        let show = function () {
              console.log('Anonymous function');
          };
        let show = () => console.log('Anonymous function');
        let add = (a, b) => a + b;   
