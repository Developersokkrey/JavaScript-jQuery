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
        ----
        let show = () => console.log('Anonymous function');
        ----
        let add = (a, b) => a + b;   
#Functions
//-------------------------------------- JavaScript Callbacks  Functions
        //-- #1
        function isOdd(number) {
          return number % 2 != 0;
        }
        function isEven(number) {
          return number % 2 == 0;
        }
        
        function filter(numbers, fn) {
          let results = [];
          for (const number of numbers) {
            if (fn(number)) {
              results.push(number);
            }
          }
          return results;
        }
        let numbers = [1, 2, 4, 7, 3, 5, 6];
        
        console.log(filter(numbers, isOdd));
        console.log(filter(numbers, isEven));
#Functions
  //-- #2 JavaScript Callbacks anonymous function 
        function filter(numbers, callback) {
          let results = [];
          for (const number of numbers) {
            if (callback(number)) {
              results.push(number);
            }
          }
          return results;
        }
        
        let numbers = [1, 2, 4, 7, 3, 5, 6];
        
        let oddNumbers = filter(numbers, function (number) {
          return number % 2 != 0;
        });        
        console.log(oddNumbers);
#Functions //arrow function
   //-- #3 JavaScript Callbacks  arrow function 
        function filter(numbers, callback) {
          let results = [];
          for (const number of numbers) {
            if (callback(number)) {
              results.push(number);
            }
          }
          return results;
        }
        
        let numbers = [1, 2, 4, 7, 3, 5, 6];
        
        let oddNumbers = filter(numbers, (number) => number % 2 != 0);
        
        console.log(oddNumbers);

#Arrays
//-------------------------------------- Basic operations on arrays

//-- #1 Adding an element to the end of an array
      let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
      seas.push('Red Sea');
      console.log(seas); 
       // * Output
          // [ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea' ]

//-- #2 Adding an element to the beginning of an array
      let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
      seas.unshift('Red Sea');
      console.log(seas);
       // * Output
         // [ 'Red Sea', 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea' ]

//-- #3 Removing an element from the end of an array
      let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
      const lastElement = seas.pop();
      console.log(lastElement); 
       // * Output
         // Baltic Sea

//-- #4 Removing an element from the beginning of an array
      let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
      const firstElement = seas.shift();
      console.log(firstElement);
       // * Output
         // Baltic Sea

//-- #5 Finding an index of an element in the array
    let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
    let index = seas.indexOf('North Sea');
    console.log(index); // 2

//-- #6 Check if a value is an array
        console.log(Array.isArray(seas)); // true

#Arrays
#filter
//-------------------------------------- JavaScript array filter() method
#Arrays
#filter
//-- #1 JavaScript Array provides the filter() method
      let cities = [
          {name: 'Los Angeles', population: 3792621},
          {name: 'New York', population: 8175133},
          {name: 'Chicago', population: 2695598},
          {name: 'Houston', population: 2099451},
          {name: 'Philadelphia', population: 1526006}
      ];
      let bigCities = cities.filter(function (e) {
          return e.population > 3000000;
      });
      console.log(bigCities);
       // * Output
          // [
          //   { name: 'Los Angeles', population: 3792621 },
          //   { name: 'New York', population: 8175133 }
          // ]

#Arrays
#filter
#sort() 
#map()
//-- #2 JavaScript Array provides the filter() method
        let cities = [
            {name: 'Los Angeles', population: 3792621},
            {name: 'New York', population: 8175133},
            {name: 'Chicago', population: 2695598},
            {name: 'Houston', population: 2099451},
            {name: 'Philadelphia', population: 1526006}
        ];
        cities
            .filter(city => city.population < 3000000)
            .sort((c1, c2) => c1.population - c2.population)
            .map(city => console.log(city.name + ':' + city.population));
         // * Output
                // Philadelphia:1526006
                // Houston:2099451
                // Chicago:2695598


#Array
#Map
//-------------------------------------- JavaScript Array map: Transforming Elements

//-- #1 JavaScript Array type provides the map() method
    let circles = [
        10, 30, 50
    ];
    function circleArea(radius) {
        return Math.floor(Math.PI * radius * radius);
    }
    let areas = circles.map(circleArea);
    console.log(areas);
    // * Output
         // [314, 2827, 7853]

//-- #2 JavaScript Array type provides the map() method, you can make use of the arrow function in ES6
    let areas = circles.map(radius => Math.floor(Math.PI * radius * radius));
    console.log(areas);

#Promises
#callback
//-------------------------------------- JavaScript Promises
//-- #1 JavaScript Promises with callback functions
      function getUsers(callback) {
      setTimeout(() => {
        callback([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      }, 1000);
    }
    function findUser(username, callback) {
      getUsers((users) => {
        const user = users.find((user) => user.username === username);
        callback(user);
      });
    }
    findUser('john', console.log);
    // * Output
         // { username: 'john', email: 'john@test.com' }

#Promises
//-- #2 JavaScript Promises 
      function getUsers() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            { username: 'john', email: 'john@test.com' },
            { username: 'jane', email: 'jane@test.com' },
          ]);
        }, 1000);
      });
      }
      function onFulfilled(users) {
        console.log(users);
      }
      const promise = getUsers();
      promise.then(onFulfilled);
      // * Output
         // [
         //    { username: 'john', email: 'john@test.com' },
         //    { username: 'jane', email: 'jane@test.com' }
         //  ]
#Promises
//-- #3 JavaScript Promises 
      let success = true;
      function getUsers() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (success) {
              resolve([
                { username: 'john', email: 'john@test.com' },
                { username: 'jane', email: 'jane@test.com' },
              ]);
            } else {
              reject('Failed to the user list');
            }
          }, 1000);
        });
      }
      const promise = getUsers();
      //success = true;
      promise.then((users) => {
        console.log(users);
      });
      // * Output
         // [
         //    { username: 'john', email: 'john@test.com' },
         //    { username: 'jane', email: 'jane@test.com' }
         //  ]
      //success = false;
      promise.catch((error) => {
        console.log(error);
      });

#Promises
//-- #4 JavaScript Promises 
      let success = true;
      function getUsers() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (success) {
              resolve([
                { username: 'john', email: 'john@test.com' },
                { username: 'jane', email: 'jane@test.com' },
              ]);
            } else {
              reject('Failed to the user list');
            }
          }, 1000);
        });
      }
      function onFulfilled(users) {
        console.log(users);
      }
      function onRejected(error) {
        console.log(error);
      }
      const promise = getUsers();
      promise.then(onFulfilled, onRejected);
      // * Output
         // [
         //    { username: 'john', email: 'john@test.com' },
         //    { username: 'jane', email: 'jane@test.com' }
         //  ]
