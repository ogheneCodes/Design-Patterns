//(1) for native javascript modules

import { name } from "./util.js";
console.log(name);
import { double } from "./util.js";
alert(double(5));

//(2)you can also use the import like this too
/*import{name,double as utilityDouble} from "./util.js";  //you can rename your variable here with "as"
console.log(name);
alert(utilityDouble(10));*/

// (3)you can import a full util folder here
/*import * as Utils from './util.js';
alert(Utils.double(5));
console.log(Utils.name);
// alert(`${Utils.age} is lesser`)
alert(Utils.age + " "+"is"+ ""+ "lesser than 10")*/