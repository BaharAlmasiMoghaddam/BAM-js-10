// Using an example, explain the difference between block,global and function scope in variables.

//==================================

/* 
    Global Scope:
    - declared outside of any function or block.
    - are accessible from anywhere in the file.
*/

let globalVar = "Global var";
let person = {
  name: "John",
  age: 30,
};

function showGlobal() {
  console.log(globalVar);
  console.log(person.name);
}

showGlobal();

//===================================

/*
    Function Scope:
    - declared within a function are in the function scope
    - only accessible in that function.
*/

function showFunctionScope1() {
  let functionVar1 = "A function-scoped variable in function 1";
  let person1 = {
    name: "Alice",
    age: 28,
  };

  console.log(functionVar1);
  console.log(person1.name);
}

function showFunctionScope2() {
  let functionVar2 = "A function-scoped variable in function 2";
  let person2 = {
    name: "Bob",
    age: 32,
  };

  console.log(functionVar2);
}

console.log(person2.name); // error = person2 is not defined becuase we called it in global scope when it was defined in a function scope

showFunctionScope1();
showFunctionScope2();

//====================================

/*
    Block Scope:
    - Variables declared with let or const in a block (in a {}) 
    - only accessible in that block.
*/

function showBlockScope() {
  let person = {
    name: "Mike",
    age: 40,
  };

  if (true) {
    let blockVar = "A block-scoped variable";
    person.name = "Michael";
    console.log(blockVar);
    console.log(person.name);
  }

  console.log(blockVar); // error = blockVar is not defined
  console.log(person.name);
}

showBlockScope();
