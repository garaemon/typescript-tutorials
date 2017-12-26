// The name 'module.ts' is not allowed for AMD

import m = require('./my-module');
import * as m2 from './my-module';
import {MyModule} from './my-module';
m.MyModule.helloWorld();
m2.MyModule.helloWorld();
MyModule.helloWorld();

