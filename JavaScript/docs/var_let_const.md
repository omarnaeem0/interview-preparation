## var, let, and const variables

### var
* global or functional scoped only.
* var declared inside functional scope can not be accessed outside that function.
* var can be re-declared which is the issue with var.
* var is hoisted to the top level of valid scope and initialized as undefined.

### let
* block scoped. anything between `{}`
* let declared inside block scope can not be accessed outside that block.
* let can be re-assigned but can not be re-declared with same variable name.
* re-declaring let with let keyword returns an error: Identifier 'variableName' has already been declared.
* let is hoisted to the top level of block scope but throws a 'Reference Error' when accessed before declaration.

### const
* everything is same as let variable except it has to be assigned a value at the time of declaration and it can not be de-assigned/updated.
