// Factory function
/*
function create_circle(radius) {
    return{
        radius,
        draw: function () {
            console.log('draw');
        }
    };
};

// const circle = create_circle(1);
// */

// // Constructor function


// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     };
// };

// // Circle.call({}, 1)
// // Circle.apply({},[1])

// const circle = new Circle(1);
// // circle.location = {x:1};
// // circle['locatioin'] = {x:2};
// const propery_name = 'location';
// circle[propery_name] = {x:3};
// delete circle[propery_name];

// function Circle(radius) {
//   this.radius = radius;

//   let default_location = {
//     x: 1,
//     y: 1
//   };

//   this.get_default_location = function() {
//     // console.log(default_location);
//     return default_location;
//   }


//   this.draw = function() {
//     console.log('draw');
//   };

//   Object.defineProperty(this,'default_location',{
//     get:function () {
//       return default_location;
//     },
//     set: function (value) {
//       if (!value.x || !value.y) {
//         throw new Error('Invalid Location');
//       }
//     }
//   })
// };

// const circle = new Circle(1);
// circle.default_location = 1;
// circle.draw()

// for (let key in circle) {
//   if (typeof circle[key] !== 'function') {
//     console.log(key, circle[key])
//   }
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if ('radius' in circle) {
//   console.log('Circle has a radius');
// }
// const Circle1 = Fun{ction('radius', `this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }`)

// const circle = new Circle1(1);

// let x = {value:10};
// let y = x;

// x.value = 20;
// y.value = 30;

// let number = {
//   value: 10
// };

// function increase(number) {
//   number.value++;
// }

// increase(number);
// ``
// console.log(number);

// function Stopwatch() {
//   let start_time, end_time, running, duration = 0;

//   this.start = function () {
//     if (running){
//       throw new Error ("Stopwatch has already started.");
//     } else{
//       running = true;
//     }
//     start_time = new Date();
//   };

//   this.stop = function () {

//   };

//   this. reset = function () {

//   };

//   Object.defineProperty(this, 'duration', {
//     get: function () {
//       return duration;
//     }
//   });
// }

// const s1 = 'Hello';
// console.log(typeof s1);

// const s2 = new String('Hello');
// console.log(typeof s2);

// console.log(window);
// alert('This is just an alert');

// console.log(navigator.userAgent);

/***********************Object Litteral****************/
// const book1 = {
//   title: 'Book1',
//   author: 'Jhon Doe',
//   year: '2022',
//   get_summary: function () {
//     return(`${this.title} was written by ${this.author} in ${this.year}`);
//   } 
// }

// const book2 = {
//   title: 'Book2',
//   author: 'Jhan Doe',
//   year: '2021',
//   get_summary: function() {
//     return (`${this.title} was written by ${this.author} in ${this.year}`);
//   }
// }

// console.log(book2.get_summary());
// console.log(Object.values(book1));
// console.log(Object.keys(book1));

/*******************Constructors *************************/

// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// // get_summary
// Book.prototype.get_summary = function () {
//     return (`${this.title} was wrtiiten by ${this.author} in ${this.year}`);
// }

// Book.prototype.get_age = function () {
//   const years = new Date().getFullYear() - this.year;
//   return (`${this.title} is ${years} old`);
// }

// // Revise - Change year
// Book.prototype.revise = function (new_year) {
//   this.year = new_year;
//   this.revised = true;
// }

// // Instantiate an Object
// const book1 = new Book('Book1', 'Jhon Doe', '2012');
// const book2 = new Book('Book2', 'Jhan Doe', '2013');

// // console.log(book2); 
// // book2.revise('2018');
// // console.log(book2);

// // Magazine Constructor
// function Magazine(title,author,year,month) {
//   Book.call(this,title,author,year);

//   this.month = month;
// }

// // Inherit prototype
// Magazine.prototype = Object.create(Book.prototype);

// // Instantiate Magazine Object
// const mag1  = new Magazine('Mag one', 'Jhon Doe', '2018', 'Jan');
// console.log(mag1);

// console.log(mag1);

// // Use Magazine Constructor
// Magazine.prototype.constructor = Magazine;


/*******************Object of Protos*********/
// const book_protos = {
//   get_summary: function() {
//     return (`${this.title} was wrtiiten by ${this.author} in ${this.year}`);
//   },
//   get_age: function() {
//     const years = new Date().getFullYear() - this.year;
//     return (`${this.title} is ${years} old`);
//   }
// }

// Create Objects
// const book1 = Object.create(book_protos);
// book1.title = 'Book one';
// book1.author = 'Jhon Doe';
// book1.year = '2013';

// console.log(book1);

// Instead of doing that we can also do this

// const book1 = Object.create(book_protos, {
//   title: {
//     value: 'Book one'
//   },
//   author: {
//     value: 'Jhon Doe'
//   },
//   year: {
//     value: '2013'
//   },
// });

// console.log(book1);

/*********Classes*****************/

// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
//   get_summary() {
//     return (`${this.title} was wrtiiten by ${this.author} in ${this.year}`);
//   }
//   get_age() {
//     const years = new Date().getFullYear() - this.year;
//     return (`${this.title} is ${years} old`);
//   }
//   revise(new_year) {
//     this.year = new_year;
//     this.revised = true;
//   }
//   static top_book_store() {
//     return 'Gunasena';
//   }
// }

//   // Instantiate Object

//   const book1 = new Book('Booke one', 'Jhone Doe', '2013');

//   // console.log(book1);
//   // book1.revise('2018');
//   // console.log(book1);

//   console.log(Book.top_book_store());

/******************Sub classes****************/
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  get_summary() {
    return (`${this.title} was wrtiiten by ${this.author} in ${this.year}`);
  }
}

// Magazine Subclass

class Magazine extends Book {
  constructor(title,author,year,month){
    super(title,author,year);
    this.month = month;
  }
}

// Instantiate Magazine

const mag1 = new Magazine ('Mag one', 'Jhon Doe', '2013', 'Jan');

console.log(mag1.get_summary());