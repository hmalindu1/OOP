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

// Circle.call({}, 1)
// Circle.apply({},[1])

// const another_circle = new Circle(1);



// const Circle1 = Function('radius', `this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }`)

// const circle = new Circle1(1);

// let x = {value:10};
// let y = x;

// x.value = 20;
// y.value = 30;

let number = {
  value: 10
};

function increase(number) {
  number.value++;
}

increase(number);
``
console.log(number);