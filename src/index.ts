//! Enums

// const small = 1;
// const medium = 2;
// const large = 3;

// const enum Size{ Small= 1, Medium , Large}
// let mySize: Size = Size.Medium
// console.log(mySize)

//! Functions
//todo As a best practice annotate your functions all the parameters and return types

//** noUnusedLocals/noUnsedParameters/noImplicitReturns make them active
// function calculateTax(income: number, taxYear= 2023) {
//     if(taxYear  < 2023)
//     return income * 1.2;
// return income *1.3
// }

// calculateTax(10_000)

//!OBJECTS

// let employee: {
//   id: number;
//   name: string;
// } = { id: 1 ,name: ''};

// let employee: {
//     id: number;
//     name?: string;          //todo avoid this approach
//   } = { id: 1 };
// employee.name = "Engin";

// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: {} = {
//   id: 1,
//   name: "Engin",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

//! ADVANCED types


// function kgToLbs(weight: number | string):number{
//     //Narrowing
//     if(typeof weight === 'number' )
//     return weight * 2.2
//     else 
//     return parseInt(weight) * 2.2
// }   

// kgToLbs(10);
// kgToLbs('10kg')


//! Intersection  (type intersection)

// type Draggable = {
//     drag: () => void
// }

// type Resizable = {
//     resize: () => void
// }

// type UIWidget= Draggable & Resizable

// let textBox: UIWidget = {
//     drag: () => {},
//     resize : () => {}
// }

//! Literal Types

// Literal (exact, specific)
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Mectric = 'cm' | 'inch'


//! Nullable types

