#Ternary
//--------------------------------------- JavaScript Ternary Operator
  let speed = 150;
  let message = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'OK';
  console.log(message);
****
#Spread
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
****
#switch_case
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
****
#do…while_Loop
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
****
#Functions
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
****
#Functions
#Anonymous
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
****
#Functions
#Callbacks
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
****
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
****
#Arrays
#filter
//-------------------------------------- JavaScript array filter() method
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

****
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

****
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

#Reduce 
#Array
//-------------------------------------- JavaScript Array reduce & reduceRight
//-- #1 JavaScript Reducing an Array
    
    let shoppingCart = [
      {
        product: 'phone',
        qty: 1,
        price: 500,
      },
      {
        product: 'Screen Protector',
        qty: 1,
        price: 10,
      },
      {
        product: 'Memory Card',
        qty: 2,
        price: 20,
      },
    ];
    let total = shoppingCart.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.qty * currentValue.price;
    }, 0);
    console.log(total);
    // * Output
             // 550

#Some
#Array
//-------------------------------------- JavaScript Array reduce & reduceRight
//-- #1 JavaScript Array some
      function exists(value, array) {
          return array.some(e => e === value);
      }
      let marks = [4, 5, 7, 9, 10, 2];
      console.log(exists(4, marks));
      console.log(exists(11, marks));
      // * Output
                   // false
//-- #2 JavaScript Array some
       let marks = [4, 5, 7, 9, 10, 2];
      
      const range = {
          min: 8,
          max: 10
      };
      let result = marks.some(function (e) {
          return e >= this.min && e <= this.max;
      }, range);
      console.log(result);
      // * Output
                   // true

#Sort
#Array
//-------------------------------------- JavaScript Array Sorting an array
//-- #1 JavaScript Sorting an array
      let employees = [
          {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
          {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
          {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
      ];
      // sort by salary
      employees.sort(function (x, y) {
          return x.salary - y.salary;
      });
      console.table(employees);
      // * Output
                   // Sort by salary ads
//-- #2 JavaScript Array some
       employees.sort(function (x, y) {
            let a = x.name.toUpperCase(),
                b = y.name.toUpperCase();
            return a == b ? 0 : a > b ? 1 : -1;
        });
        console.table(employees);
      // * Output
                   // Sort by name ads
//-- #2 JavaScript Array some
       employees.sort(function (x, y) {
            let a = new Date(x.hireDate),
                b = new Date(y.hireDate);
            return a - b;
        });
        console.table(employees);
      // * Output
                   // Sort by name ads

#toSorted
#Array
//-------------------------------------- JavaScript Array toSorted method
//-- #1 JavaScript Array toSorted method
// Original array of books
        const books = [
          { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
          { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
          { title: '1984', author: 'George Orwell', year: 1949 },
          { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }
        ];
        // Creating a sorted copy based on the publication year using toSorted()
        const sortedBooks = books.toSorted((a, b) => a.year - b.year);
        // Output the sorted copy and the original array
        console.log(sortedBooks);
        // * Output
            // [
            //   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925},
            //   { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
            //   { title: '1984', author: 'George Orwell', year: 1949 },
            //   { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
            // ]

#concat
#Array
//-------------------------------------- JavaScript Array concat: Merge Arrays
//-- #1 JavaScript Array concat: Merge Arrays
        let odds = [1,3,5];
        let evens = [2,4,6];
        // merge odds and evens array
        let combined = odds.concat(evens);
        console.log('Result:', combined);
        console.log('Odds:', odds);
            // * Output
                  // Result: [ 1, 3, 5, 2, 4, 6 ]
                  // Odds: [ 1, 3, 5 ]
//-- #2 JavaScript Array concat: Merge Arrays
      let upper  = ['A','B','C'];
      let lower  = ['a','b','c'];
      let digits = [1,2,3];
      let alphanumerics = upper.concat(lower, digits);
      // * Output
            // ['A', 'B', 'C', 'a',  'b', 'c', 1,   2,  3]
//-- #3 JavaScript  you can use spread operator to merge multiple arrays
      let odds = [1,3,5];
      let evens = [2,4,6];
      let combined = [...odds, ...evens];
      console.log(combined);
            // * Output
            // [ 1, 3, 5, 2, 4, 6 ]
