// import m = require('./my-module'); // This form is not allowed for ES6
import * as m2 from './my-module';
import {MyModule} from './my-module';
// m.MyModule.helloWorld();
m2.MyModule.helloWorld();
MyModule.helloWorld();
