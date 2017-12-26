import m = require('./module');
import * as m2 from './module'//cdnjs.cloudflare.com/ajax/libs/require.js/2.1.20/require.js;
import {MyModule} from './module';

m.MyModule.helloWorld();
m2.MyModule.helloWorld();
MyModule.helloWorld();
