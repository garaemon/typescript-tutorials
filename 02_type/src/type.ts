var numberVar: number = 1000;
var stringVar: string = 'Hello World';
var booleanVar: boolean = true;
var anyVar: any = {foo: 100, bar: 200};

enum EnumType {
    Foo,
    Bar,
    FooBar
}
var enumVar: EnumType = EnumType.Foo;

console.log('numberVar: ' + numberVar);
console.log('stringVar: ' + stringVar);
console.log('booleanVar: ' + booleanVar);
console.log('anyVar: ' + anyVar);

// function definition
function double(variable: number): number {
  return variable * 2;
}

console.log('double(100): ' + double(100));

