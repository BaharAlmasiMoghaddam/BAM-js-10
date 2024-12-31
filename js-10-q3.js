// According to your js10 session, write a code that shows why we shouldn't use var?

function scopes() {
  if (true) {
    var functionScopedVar = "I am a var";
  }
  console.log(functionScopedVar);
  // ---> Var is a function-scoped which means it could be accessible outside of a block in a function!
}

scopes();
