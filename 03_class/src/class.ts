class MyClass {
  // Constructor difinition
  constructor(name: string) {
    console.log(`name: ${name}`);
  }

  // Member variables
  private privateValue: number;
  public publicValue: number = 100;

  // getter and setter for variables if needed. It requires ES2015 or above.
  public publicValueWithAccessors: number;
  public get publicValueWithAccessorsGetter(): number {
    console.log('getter of publicValueWithAccessors');
    return this.publicValueWithAccessors;
  }
  public set publicValueWithAccessorsSetter(newValue: number) {
    console.log('setter of publicValueWithAccessors');
    this.publicValueWithAccessors = newValue;
  }

  // method
  public memberMethod(newValue: number): number {
    return newValue * 100;
  }

  // static member variable
  static staticMemberVariable: number;
  // static member variable with accessors
  static get staticMemberVariable2(): number {
    return this.staticMemberVariable;
  }
  static set staticMemberVariable2(newValue: number) {
    this.staticMemberVariable = newValue;
  }

  // static member method
  static staticMethod(arg: number): number {
    console.log('staticMethod');
    return arg * 2;
  }
}

let obj = new MyClass('MyClass');
console.log(`obj.publicValue: ${obj.publicValue}`);
console.log(`MyClass.staticMethod(100): ${MyClass.staticMethod(100)}`);