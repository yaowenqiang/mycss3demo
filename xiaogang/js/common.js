function buildUrl () {
  var qu = '?debug=true';
  with(location){
    var url = href + qu; 
    return url;
  }
}
var result = buildUrl();
result;
function add (num1,num2) {
  var sum = num1 + num2;
  return sum;
}
var result = sum(10,20);
num;
function displayInfo (args) {
  var output = '';
  if (typeof args.name == 'string') {
    output+="Name:"+args.name+'\n';
  };
  if (typeof args.age == 'number') {
    output+="Age:"+args.age+'\n';
  };
  console.log(output);
}
displayInfo({
   name:'Jack',
   age:23
});
displayInfo({
   name:'string',
});
var person1 = {
    toLocaleString:function(){
      return "Nikolaos";                
    }
    toString:function(){
     return "Nikolaos";
   }
}
var person2 = {
    toLocaleString:function(){
      return "toLocaleString";                
    }
    toString:function(){
     return "Greg";
   }
}
var person = [person1,person2];
person.toString();
person.toLocaleString();

function compare (value1,value2) {
  if(value1 < value2){
      return -1;
  }
  else if(value1 > value2){
      return 1; 
  }
  else{
      return 0; 
  }
}
var test = 'mom and dady and baby';
var pattern = /mom( and dady( and baby)?)?/gim;
var matchs = pattern.exec(test);
var text = 'cat,bat,sat,fat';
var pattern = /.at/;
var matches = pattern.exec(text);
var text = 'this has been a short summer';
var pattenr = /(.)hort/g;
if (pattern.test(text)) {
  console.log(RegExp.input);
  console.log(RegExp.$_);
  console.log(RegExp.lastMatch);
  console.log(RegExp.["$&"]);
  console.log(RegExp.lastParen);
  console.log(RegExp.["$^"]);
  console.log(RegExp.["$+"]);
  console.log(RegExp.["$*"]);
  console.log(RegExp.["$'"]);
  console.log(RegExp.["$`"]);
  console.log(RegExp.$_);
  console.log(RegExp.[""]);
  console.log(RegExp.$_);
};
function sum (num1,numb) {
  return num1 + num2;
}
alert(sum(3,4));
var anotherSum - sum;
alert(anotherSum(3,4));
sum = null;
alert(anotherSum(3,5));
alert(sum(3,2));
function sum (num1,num2) {
  return num1 + num2;
}
alert(anotherSum(3,5));
var sum = function  (num1,num2) {
  return num1 + num2;
}
function somefunction (str1) {
  console.log(str1);
}
function callsomefunction (somefunction,strings) {
  return somefunction(strings);
}
callsomefunction(somefunction,"hello world");
function createComperisionFunction (properityName) {
  return function  (object1,object2) {
    var value1 = object1[properityName];
    var value2 = object2[properityName];
    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0; 
    }
  }
}
var date = [{name:"Zachary",age:20},{name:"Jane",age:10}];
date.sort(createComperisionFunction("name"));
console.log(date);
date.sort(createComperisionFunction("age"));
console.log(date);
function factorial (num) {
  if(num < = 1){
    return 1; 
  } else {
    return sum*arguments.callee(num -1); 
  }
}
function factorial (num) {
  if(num < = 1){
    return 1; 
  } else {
    return num*arguments.callee(num -1); 
  }
}
var trueFactorial = factorial;
factorial = function () {
  return 0;
}
console.log(trueFactorial(10));
console.log(factorial(10));
window.color = 'red';
function sayColor (argument) {
  return this.color;
}
sayColor();
var o = {color:"blue"};
o.sayColor = sayColor();
o.saycolor();
function sum (num1,num2) {
  return num1 + num2;
}
function callSum1 (num1,num2) {
  return sum.apply(this,arguments);
}
function callSum2 (num1,num2) {
  return sum.apply(this,[num1,num2]);
}
function callSum3 (num1,num2) {
  return sum.call(this,num1,num2);
}
window.color = 'red';
var o = {color:'blue'};
function sayColor (argument) {
  console.log(this.color);
}
sayColor.call(this);
sayColor.call(window);
sayColor.call(o);
var falseObject = new Bollean(false);
var result = falseObject && true;
console.log(result);
var falseValue = false;
result = falseValue && true;
console.log(result);
var a = 100;
a.toExponential();
a.toPrecision(2);
var stringValue = new String("hello world");
console.log(stringValue.charAt(1));
console.log(stringValue.charCodeAt(1));
var result = stringValue.concat("hwllo world.");
console.log(stringValue.slice());
console.log(stringValue.slice());
console.log(stringValue.slice());
console.log(stringValue.slice(-1,-1));
var stringValue = 'hello world';
console.log(stringValue.slice(-3));
console.log(stringValue.substr(-3));
console.log(stringValue.sustring(-3));
console.log(stringValue.slice(3,-3));
console.log(stringValue.substr(3,-3));
console.log(stringValue.sub string(3,-3));
var stringValue = "hello world";
console.log(stringValue.indexOf("o"));
console.log(stringValue.lastIndexOf("o"));

var stringValue = 'lorem ipsum dolor sit amet,consectetur adipisicing elit';
var positions = new Array();
var pos = stringValue.indexOf("e");
while(pos > -1){
  positions.push(pos);
  pos = stringValue.indexOf("e",pos + 1);

}
console.dir(pos);
console.log(stringValue.toUpperCase());
console.log(stringValue.toLowerCase());
console.log(stringValue.toLocaleUpperCase());
console.log(stringValue.toLocaleLowerCase());
var test = 'cat,bat,sat,fat';
var pattern = /.at/;
var matches = test.match(pattern);
console.dir(matches);
var pos = test.search(/at/);
console.dir(pos);
var text = 'cat,bat,sat,fat';
var result = text.replace('at','ond');
console.log(result);
function htmlEscape (text) {
  return  text.replace(/()/g,function (match,pos,originalText) {
      switch(match) {
      case '<':
          return  "&lt;"; 
      case '>':
        return "&gt;";
      case '&':
        return "&amp;";
      case '\"':
        return "&quot;";
      }
  });
}
var htmlstrings = "<p class = \"greeting\">Hello World</p>";
console.log(htmlEscape(htmlstrings));
console.log(stringValue.split(",");
var colorText = 'red,blue,green,yellow';
console.log(colorText.split(","));
console.log(colorText.split(",",2));
console.log(colorText.split(/[^\,]+/));
console.log(colorText.split());
var colors = 'yellow';
console.log(colors.localeCompare("yellow"));
console.log(colors.localeCompare("brick"));
console.log(colors.localeCompare("200"));
function datermineOrder (value) {
  var result = stringValue.localeCompare(value);
  if (result < 0 ) {
    console.log("The string 'yellow' comes before the string '"+value+"'"); 
  }
  else if(result > 0) 
  {
    console.log("The string 'yellow' comes affter the string '"+value+"'"); 
  }
  else  
  {
    console.log("The string 'yellow' is equal to the string '"+value+"'"); 
  }
}
String.formCharCode(104,102,108,108,111);

var uri = "http://www.wrox.com/iilegal value html#start1";
var encodedUri = encodeURI(uri);
var fullEncodedURI encodeURIComponent(uri);
var decodedUri = decodeURI(uri);
var fullDecodeduri decodeURIComponent(uri);
eval("function sayhello() { console.log('inside function.');}");
var color = 'red';
function sayColor (argument) {
  console.log(color);
}
console.dir(Math);
console.log(Math.E);
console.log(Math.LN10);
console.log(Math.LOG2e);
console.log(Math.LOG10e);
console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);
Math.ceil();
Math.floor();
Math.round();
console.dir(Math);
console.log(Math.E);
console.log(Math.LN10);
console.log(Math.LOG2e);
console.log(Math.LOG10e);
console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);

Math.random();

function selectFrom (lowerValue,upperValue) {
  var choices = upperValue = lowerValue + 1;
  return Math.floor(Math.random()*choices + lowerValue);
}

var num = selectFrom(2,10);
console.log(num);
var person = new Object();
person.name = 'Nicholas';
person.age = 20;
person.job = 'Software Engineer';
person.sayName = function  (argument) {
  console.log(this.name);
}
function createPerson (name,age,job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function(argument) {
    console.log(this.name);
  }
  return o;
}

var person1 = createPerson('Nicholas',22,'Software Engineer');
var person2 = createPerson('Greg',27,'Doctor');
console.log(person1.sayName());
console.log(person2.sayName());

function Person (name,age,job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    console.log(this.name);
  }
}

var person1 = new Person('Nikolaos',20,'Software Engineer');
var person2 = new Person('Greg',27,'Doctor');
console.log(person1);
console.log(person2);
person1.sayName();
person2.sayName();
console.log(person1.constructor  == Person);
console.log(person2.constructor  == Person);
console.log(person2 instanceof Person);
console.log(person2 instanceof Person);
console.log(person2 instanceof Object);
console.log(person2 instanceof Object);
Person("Jack",22,"web developer");
window.sayName();
var o =  new Object();
Person.call(o,"Mristen",30,"Nurse");
o.sayName();

console.log(person1.sayName === person2.sayName);
function Person (name,age,job) {
  this.name = name;
  this,age = age;
  this.job = job;
  this.sayName = sayName;
}
function sayName (argument) {
  console.log(this.name);
}
var person1 = new Person('Mristen',22,'Doctor');
var person2 = new Person('Greg',33,'Nurse');
person1.sayName();
person2.sayName();
console.log(person1 instanceof Person);
console.log(person1 instanceof Object);
console.log(person2 instanceof Person);
console.log(person2 instanceof Object);
console.log(person1.constructor === Person);
console.log(person2.constructor ===  Person);
console.log(person1.sayName == person2.sayName);
function Person (argument) {
  // body...            
}
Person.prototype.name = 'Nikolaos';
Person.prototype.age = 20;
Person.prototype.job = 'Doctor';
Person.prototype.sayName = function  (argument) {
  console.log(this.name);
}
var person1 = new Person();
var person2 = new Person();
person1.sayName();
person2.sayName();
console.log(person1.sayName == person2.sayName);
console.log(Person.prototype);
console.log(Person.prototype.isPrototypeOf(Object));
console.log(Person.prototype.isPrototypeOf(Person));

function Person (argument) {
  Person.prototype.name = 'Nicholas';
  Person.prototype.age = 20;
  Person.prototype.job = 'Software Engineer';
  Person.prototype.sayName =function (argument) {
    console.log(this.name);
  };
}
var person1 = new Person();
var person2 = new Person();
person1.name = 'Gerg';
console.log(person1.name);
console.log(person2.name);
delete person1.name;
console.log(person1.name);
console.log(person1.hasOwnProperty('name'));
person1.name = 'jack';
console.log(person1.hasOwnProperty('name'));
delete person1.name;
console.log(person1.hasOwnProperty('name'));
console.log(person1.__proto__);
console.log('name' in person1);
delete person1.name;
console.log('name' in person1);
delete person1.__proto__.name;
console.log('name' in person1);
function hasPrototypeProperty (object,name) {
  return(object.hasOwnProperty(name) && name in object);
}
var o ={
    toString:function  (argument) {
      return 'My Object'; 
    }
};
for (var prop in o) {
  if (prop in o ) {
      alert('Found toString'); 
  }
};
function Person (argument) {
  // body...    
}
Person.prototype = {
    name : 'Nikolaos',
    age  : 20,
    job  : 'Web Developer',
    sayName : function () {
      console.log(this.name); 
    }
};
var person1 = new Person();
console.log(person1 instanceof Person);
console.log(person1 instanceof Object);
console.log(person1.constructor ==  Object);
console.log(person1.constructor ==  Person);

function Person (argument) {
  // body...    
}
Person.prototype = {
    constructor : Prototype,
    name : 'Nikolaos',
    age  : 20,
    job  : 'Web Developer',
    sayName : function () {
      console.log(this.name); 
    }
};
var person1 = new Person();
console.log(person1 instanceof Person);
console.log(person1 instanceof Object);
console.log(person1.constructor ==  Object);
console.log(person1.constructor ==  Person);
Person.prototype.sayHi = function  (argument) {
  console.log('Hi!');
}
person1.sayHi();
function Person () {
  // body...  
}
var person = new Person();
Person.prototype = {
constructor : Person,
name : 'Nikolaos',
age  : 20,
job  : 'Software Developer',
sayName : function ( ) {
    console.log(this.name);
  }
}
person.sayName();
console.log(typeof Array.prototype.sort);
console.log(typeof String.prototype.substring);
String.prototype.startsWith = function  (text) {
  return this.indexOf(text) == 0;
}
var msg = 'hello world';
msg.startsWith('h');
function Person () {
  // body...
}
Person.prototype = {
  constructor : Person,
  name : 'Nikolaos',
  age  : 29,
  job  : 'Software Engineer',
  friends : ['Shelby','Court'],
  sayName : function  (argumen) {
    console.log(this.name);
  }
};

var person1 = new Person();
var person2 = new Person();
person1.friends.push('Van');
console.log(person1.friends);
console.log(person2.friends);
console.log(person1.friends  == person2.friends);
function Person (name,age,job) {
    this.name = name;
    this.job = job;
    this.friends = ['Shelby','Court'];
}
Person.prototype = {
    constructor : Person,
    sayName : function  (argument) {
        console.log(this.name);
    }
};
var person1 = new Person('Nikolaos',20,'Software Engineer');
var person2 = new Person('Greg',33,'Doctor');
person1.friends.push('Van');
console.log(person1.friends);
console.log(person2.friends);
console.log(person1.sayName === person2.sayName);
console.log(person1.friends === person2.friends);
function Person (name,age, job) {
  this.name = name,
    this.job = job,
    this.age = age,
    if (typeof this.sayName != 'function') {
      Person.prototype.sayName = function  (argument) {
        console.log(this.name);
      }
    }
}
var person1 = new Person('Nikolaos',23,'Software Engineer');
person1.sayName();
function Person (name,age,job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function  (argument) {
    console.log(this.name);
  }
  return o;
}
var person1 = new Person('Nikolaos',20,'Software Engineer');
person.sayName();
function SpacialArray () {
  var values = new Array();
  values.push.apply(values,arguments);
  values.toPipeString = function  (argument) {
    return this.join('|');
  }
  return values;
}
var colors = SpacialArray('red','blue','black');
colors.toPipeString();
console.log(colors);
function Person (name,age,job) {
  var o = new Object();
  var name = name;
  var job = job;
  var age = age;
  o.sayName = function  (argument) {
    console.log(name);
  }
  return o;
}
var person = new Person('Nicholas',22,'Doctor'); 
person.sayName();
function SuperType (argument) {
  this.property = true;
}
SuperType.prototype.getSuperValue = function  () {
  return this.property;
}
function SubType (argument) {
  this.subproperty = false;
}
SubType.prototype = new SuperType();
SubType.prototype.getSubvalue = function  (argument) {
  return this.subproperty;
}
var instance = new SubType();
console.log(instance.getSuperValue());
console.log(instance instanceof Object);
console.log(instance instanceof SubType);
console.log(instance instanceof SuperType);
console.log(Object.prototype.isPrototypeOf(instance));
console.log(SuperType.prototype.isPrototypeOf(instance));
console.log(SubType.prototype.isPrototypeOf(instance));

function SuperType (argument) {
  this.property = true;
}
SuperType.prototype.getSuperValue = function  (argument) {
  return this.property;
}
function SubType (argument) {
  this.property = false;
}
SubType.prototype = new SuperType();
SubType.prototype.getSubvalue = function  (argument) {
  return this.property;
}
SubType.prototype.getSuperValue = function  (argument) {
  return false;
}
var instance = new SubType();
instance.getSuperValue();
SubType.prototype = {
    getSubValue : function  (argument) {
      return this.subproperty;
    },
    someOtherMethod : function (argument) {
     return false;
  }
};
var instance = new SubType();
instance.getSuperValue();
function SuperType (argument) {
  this.colors = ['red','blue','green'];
}
function SubType (argument) {
  // body...  
}
SubType.prototype = new SuperType();
var instance1  = new SubType();
instance1.colors.push('yellow');
console.log(instance1.colors);
var instance2  = new SubType();
console.log(instance2.colors);
function SuperType (argument) {
  this.colors = ['red','blue','green'];
}
function SubType (argument) {
  SuperType.call(this);
}
var instance1 = new SubType();
instance1.colors.push('yellow');
console.log(instance1.colors);
var instance2 = new SubType();
console.log(instance2.colors);
function SuperType (name) {
  this.name = name;
}
function SubType (name) {
  SuperType.call(this,'Nicholas');
  this.age = 22;
}
var instance = new SubType();
console.log(instance);

function SuperType (name) {
  this.name = name;
}
function SubType (name) {
  SuperType.call(this,name);
  this.age = 22;
}
var instance = new SubType('jack');
console.log(instance);
 function SuperType (name) {
   this.name = name;
   this.colors = ['red','blue','green'];
 }
SuperType.prototype.sayName = function (argument) {
  console.log(this.name);
}
function SubType (name,age) {
  SuperType.call(this,name);
  this.age = age;
}
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function  (argument) {
  console.log(this.age);
}
var instance1 = new SubType('Nikolaos',19);
instance1.colors.push('black');
console.log(instance1.colors);
instance1.sayName();
instance1.sayAge();
var instance2 = new SubType('Greg',30);
console.log(instance2.colors);
instance2.sayName();
instance2.sayAge();
function object (o) {
  function F (argument) {}
  F.prototype = o;
  return new F();
}
var person = {
    name : 'Nikolaos',
    friends : ['Shelby','Court','Van'],
};
var anotherPerson = object(person);
anotherPerson.name = 'Grag';
anotherPerson.friends.push('Linda');
var yetAnotherPerson = object(person);
yetAnotherPerson.name = 'Linda';
yetAnotherPerson.friends.push('Barbie');
console.log(person.friends);
function createAnother (original) {
    var clone = object(original);
    clone.sayHi = function  (argument) {
    console.log("Hi");
  }
  return clone;
}
var person = {
    name : 'Nikolaos',
    friends : ['Shelby','Court','Van']
};
var anotherPerson = createAnother(person);
anotherPerson.sayHi();
function SuperType (name) {
    this.name = name;
    this.colors = ['red','blue','green'];
}
SuperType.prototype.sayName = function  (argument) {
    console.log(this.name);
}
function SubType (name,age) {
  SuperType.call(this,name);
  this.age = age;
}
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function  (argument) {
  console.log(this.age);
}
var instace1 = new SubType('Nikolaos',22);
function inheritPrototype (subType,superType) {
  var prototype = object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}
function SupeType (name) {
  this.name = name;
  this.colors = ['red','blue','green'];
}
SuperType.prototype.sayName = function  (argument) {
  console.log(this.name);
}
function SubType (name,age) {
  SuperType.call(this,name);
  this.age = age;
}
inheritPrototype(SubType,SuperType);
SubType.prototype.sayAge = function  (argument) {
  console.log(this.age);
}
var instance = SubType('Nikolaos',20);
console.log(instance1);
function factorial (num) {
  if ( num <= 1 ){
    return 1; 
  }
  else {
    return num * arguments.callee(num - 1); 
  }
}
var anotherFactorial = factorial;
factorial = null;
console.log(anotherFactorial(4));
function createFunctions () {
  var result = new Array();
  for (var i = 0; i < 10;i++) {
    result[i] = function () {
      return i;
    }
  };
    return result;
}
var funcs = createFunctions();
for (var i = 0; i < 10; i++) {
  console.log(funcs[i]());
};
function createFunctions (argument) {
  var result = new Array();
  for (var i = 0; i < 10; i++) {
    result[i] = function  (num) {
      return function  () {
        return num;
      }
    }(i);
  }
  return result;
}
var funcs = createFunctions();
for (var i = 0; i < 10; i++) {
  console.log(funcs[i]());
};
var name = 'The Window';
var object = {
    name : 'My object',
    getNameFunc : function () {
      return function () {
        return this.name;
      };
    }
};
console.log(object.getNameFunc()());
var name = 'The Window';
var object = {
    name : 'My object',
    getNameFunc : function () {
      var that = this;
      return function () {
        return that.name;
      };
    }
};
console.log(object.getNameFunc()());
function outputNumbers (count) {
  for (var i = 0; i < count; i++) {
    console.log(i);
  }
  var i;
  console.log(i);
}
(function  () {
})();
function Myobject () {
  var privateVariable = 10;
  function privateFunction () {
    return false;
  }
  this.publicMethod = function  (argument) {
    privateVariable ++;
    return privateFunction();
  }
}
var myObject = new Myobject();
function Person (name) {
  this.getName = function  () {
    return name;
  }
  this.setName = function  (value) {
    name = value;
  }
}
var person = new Person('Nikolaos');
console.log(person.getName());
person.setName('Greg');
console.log(person.getName());
(function  () {
  var privateVariable = 10;
  function privateFunction (argument) {
    return false;
  }
  Myobject = function(){};
  Myobject.prototype.publicMethod = function  () {
    privateVarible ++;
    return privateFunction();
  }
})();
(function  () {
  var name = '';
  Person = function  (value) {
   name = value; 
  };
  Person.prototype.getName = function () {
    return name;
  };
  Person.prototype.setName = function (value) {
    name = value;
  };
})();
var person = new Person('Nikolaos');
console.log(person.getName());
person.setName('Gorg');
console.log(person.getName());

var person2 = new Person('Michael');
console.log(person.getName());
console.log(person2.getName());
var singleton = function  () {
  var privateValibale = 10;
  function privateFunction () {
    return false; 
  }
  return {
    publicProperty : true,
    publicMethod : function  () {
      privateValibale ++;
      return privateFunction();
    }
  };
}();
console.log(singleton);
function BaseComponent () {
}
function OtherComponent () {
}
var application = function  () {
  var components = new Array();
  components.push(new BaseComponent());
  return {
    getComponent : function  () {
      return components.length;
    },
registerCompontent : function  (component) {
  if (typeof component == 'object') {
    components.push(component); 
  }
    }
  };
}();
console.log(application);
application.registerCompontent(new OtherComponent());
application.getComponent();
var singleton = function () {
  var privateVariable = 10;
  function privateFunction () {
    return false;
  }
  var object = new CustomType();
  object.publicProperty = true;
  object.publicMethod = function  () {
    privateVariable ++;
    return privateFunction();
  };
  return object;
}();
var application = function  () {
  var components = new Array();
  components.push(new BaseComponent());
  var app = new BaseComponent();
  app.getComponent = function  () {
    return components.length;
  };
  app.registerCompontent = function (component) {
    if (typeof component == 'object') {
      components.push(component);
    }
  };
  return app;
}();
window.frames[0];
window.frames['topFrame'];
top.frames[0]
top.frames['tpFrame']
frames[0];
frames['topFrame'];
var leftPos = (typeof window.screenLeft == 'number')?window.screenLeft:window.screenX;
var topPos = (typeof window.screenTop == 'number')?window.screenTop:window.screenY;
window.moveTo(0,0);
window.moveBy(100,0);
window.innerWidth;
var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;
if (typeof pageWidth == 'number') {
  if (document.compatMode == 'CSS1Compat') {
    pageWidth = document.documentElement.clientWidth; 
    pageHeight = document.documentElement.clientHeight; 
  }
  else {
    pageWidth = document.body.clientWidth; 
    pageHeight  = document.body.clientHeight; 
  }
}
window.resizeBy(100,100);
window.resizeTo(100,100);

window.open('http://www.baidu.com','height=400.width=400.top=10.left=0.resizable=false','_blank');
var wroxwin =window.open('http://www.baidu.com','height=400.width=400.top=10.left=0.resizable=false','_blank');
console.log(wroxwin.opener == window);
var wroxwin = window.open('http://www.baidu.com','','_blank');
if (wroxwin == null) {
    console.log('The popup was blocked.');
}
var blocked = false;
try {
    var wroxWin = window.open('http://www.baidu.com','','_blank');
    if (wroxWin == null) {
      blocked = true; 
    }
}catch(ex){
    blocked = true;
}
if (blocked) {alcer('The popup was blocked!')}
setTimeout('console.log("Hello World!")',500);
setTimeout(function(){console.log('Hello World!')},500);
setTimeout(function(){console.log('Hello World!')},500);
function test(){
  console.log("Hello World!");
}
var timerId = setTimeout(test,500);
clearTimeout(timerId);
setInterval(test,1000);
var num = 0;
var max = 10;
var intervalId = null;
function incrementNumber () {
  num++;
  if (num > max) {clearInterval(intervalId)}
  console.log('down');
}
intervalId = setInterval(incrementNumber,500);
var num = 0;
var max = 10;
function incrementNumber () {
  console.log('executed once.');
  num++;
  if (num < max) {setTimeout(incrementNumber,500)}
  else {
    console.log('down');
  }
}
setTimeout(incrementNumber,500);
if (confirm('Are Your Sure?')) {
    console.log("I'm glad you're sure!");
}
else{
    console.log("I'a sorry to here you're not sure.");
}
var result = prompt('What\'s your name','');
if (result !== null) {console.log('Welcome,'+result)}

window.print();
window.find();
function getQueryStringArgs (argument) {
  var qs = (location.search.length>0?location.search.substring(1):'');
  var args = [];
  var items = qs.split('&');
  var item = null,
      name = null,
      value = null;
  for (var i = 0; i < items.length; i++) {
      item = items[i].split('=');
      name = decodeURIComponent(item[0]);
      value = decodeURIComponent(item[1]);
      args[name] = value;
  }
  return args;
}
location.assign('http://www.google.com');
function hasPlugin (name) {
  name = name.toLowerCase();
  for (var i = 0; i < navigator.plugins.length; i++) {
    if (navigator.plugins[i].name.toLowerCase().indexOf(name)>-1) {
      return true; 
    }
  }
  return false;
}
console.log(hasPlugin('Flash'));
console.log(hasPlugin('java'));
function hasIePlugin (name) {
  try {
      new ActiveObject(name); 
} catch (ex) {
  return false;
}
  }
alert(hasIePlugin('ShockwaveFlash.ShockwaveFlash'));
alert(hasIePlugin('QuickTime.QuickTime'));
function hasFlash () {
  var result = hasPlugin('Flash');
  if (!result) {
    result = hasIePlugin('ShockwaveFlash.ShockwaveFlash');
  }
  return result;
}
function hasQuickTime () {
  // body...
}
navigator.registerContentHandler();
function getElementById (id) {
  if (document.getElementById) {
    return document.getElementById(id); 
  } else if (document.all) { 
    return document.all(id);
  } else {
    throw new Error('NO way to retrieve element.');
  }
}
function getWindowWidth () {
  if (document.all) {
    return document.documentElement.clientWidth; 
  } else {
    return window.innerWidth; 
  }
}
var isFirefox = !!(navigator.vendor && navigator.vendorSub);
var isIe  = !!(document.all && document.uniqueId);
var hasNSPlugins = !!(navigator.plugins && navigator.plugins.length);
var hasDOM = !!(document.getElementById && document.createElement && document.getElementByTagName);
var hasDontEnumQuirk = function () {
  var o = {toString:function(){}};
  for (var prop in o) {
       if (prop == 'toString') {return false;}
  }
  return true;
}();
var hasEnumShadowQuirk = function  () {
  var o = {toString : function () {}};
  var count = 0;
  for (var prop in o) {
       if (prop == 'toString'){
          count ++; 
       }
  }
  return (count > 1);
}();
obj.attr('attribute', 'value')`
var	client = function () {
	var engine = {
		//呈现引擎
		ie :0,	
		gecko :0,	
		webkit :0,	
		khtml :0,	
		opera :0,	
		ver: null
	};
	var browser = {
		//浏览器
		ie :0,	
		firefox :0,	
		konq :0,	
		opera :0,	
		chrome :0,	
		opera :0,	
		safari :0,	
		ver: null
	};
	var system = {
		win:false,
		mac:false,
		x11:false
	};
	
	var ua = window.navigator.userAgent;
	if (window.opera) { 
	  engine.ver = browser.ver = window.opera.version();
	  engine.opera = browser.opera = parseFloat(engine.ver);
	} else if (/AppleWebKit\/(\S+)/.test(ua)) { 
			engine.ver = RegExp['$1'];
			engine.webkit = parseFloat(engine.ver);
			if (/chrome\/(\s+)/.test(ua)) { 
					browser.ver = RegExp['$1'];
					browser.chrome = parseInt(browser.ver);
			} else if (/Version\/(\s+)/.test(ua)) { 
					browser.ver = RegExp['$1'];
					browser.safari = parseInt(browser.ver);
			} else	{
					var safariVersion = 1;
					if (engine.webkit < 100) { 
					  	safariVersion = 1;
					} else if (engine.webkit < 312) { 
					  	safariVersion = 1.2;
					} else if (engine.webkit < 412) { 
							safariVersion = 1.3;	
					} else { 
							safariVersion = 2;	
					}
					browser.safari = browser.ver = safariVersion;
			}
	} else if(/KHTML\/($+)/.test(ua) || /Konqueror\/[^:]+/.test(ua)){
		engine.ver = browser.ver = RegExp['$!'];
		engine.khtml = browser.konq = parseFloat[engine.ver];
	}else if (/rv:([^\|]+)\| Gerko\/d{8}/.test(ua)){
		engine.ver = RegExp['$1'];
		engine.gecko = parseFloat(engine.ver);
		if (/firefox\/(\s+)/.test(ua)) { 
		 		browser.ver = RegExp['$1'];
		 		browser.firefox = parseFloat(browser.ver);
		}
	} else if(/MSIE ([^:|+]+)/.test(ua)){
		engine.ver = browser.ver = RegExp['$1'];
		engine.ie = browser.ie = parseFloat(engine.ver);
	}

	return {engine: engine,browser:browser};
}();
if (client.engine.ie) { 
  
} else	if (client.engine.gecko > 1.0) { 
  if (client.engine.ver == '1.0.1') { 
    
  };
};
var firstChild = document.body.childNodes[0];
var secondChild = document.body.childNodes.item();
var count = document.childNodes.length;
var arrayOfNodes = Array.prototype.slice.call(document.body.childNodes,0);
function convertToArray(nodes) {
		var array = null;
		try{
			array = Array.prototype.slice.call(nodes,0);	
		} catch(ex) {
			array = new Array();
			for (var i = 0; i < nodes.length	; i++) {
					array.push(nodes[i]);
			}
		}
		return array;
}
document.body.previousSibling;
document.body.hasChildNodes();
document.body.ownerDocument; 

function outputAttributes(element){
   var pairs = new Array();
   for(var i=0, len = element.attributes.length;i<len;i++){
       var attrName = element.attributes[i].nodeName;
       var attrValue = element.attributes[i].nodeValue;
       if (element.attributes[i].specified) { 
       	 pairs.push(attrName+"=\""+attrValue + "\"");
       };
   }
   return pairs.join(" ");
}
if (client.browser.ie && client.browser.ie <= 7) { 
		var iframe = document.createElement("<iframe name=\"myframe\"></iframe>");
		var input = document.createElement("<input type=\"checkbox\">");
		var button = document.createElement("<button type=\"reset\"></button>");
		var radio1 = document.createElement("<input tyep=\"radio\" name=\"choice\" value=\"1\">");
		var radio1 = document.createElement("<input tyep=\"radio\" name=\"choice\" value=\"2\">");
  
};
function contains(refNode,otherNode) {
		if (typeof refNode.contains == "function" && (!client.engine.webkit || client.engine.webkit >= 522)) { 
			return refNode.contains(otherNode);
		} else if (typeof refNode.compareDocumentPosition == "function") { 
			return !!(refNode.compareDocumentPosition(otherNode) && 16 );
		} else {
			var node = otherNode.parentNode;	
			do {
			if (ode === refNode) { 
				return true;
			} else {
				node = node.parentNode;	
			}
		} while (node != null);
	}
}
function getInnerText(element) {
	return (typeof element.textContent == "string")?element.textContent :element.innerText;
}
function setInnerText(element) {
	if (typeof element.textContent == "string") { 
			element.textContent = element.textContent;
	} else {
			element.innerText = element.innerText;	
	}

function loadScript(src) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = src;
document.body.appendChild(script);
}}
function loadScriptString(code) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	try{
		script.appendChild(document.createTextNode(code));	
	}catch(ex) {
		`script.text = code;	
	}
	document.body.appendChild(script);
}
function loadStylesheet(url) {
	var link = document.createElement("link");
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = url;
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(link);
}
var style = document.createElement("style");
style.type = "text/css";
try {
		style.appendChild(document.createTextNode("body{background-color:#bada00;}"));
} catch(ex) {
		style.stylesheet.cssText = "body{background-color:#bada00;}";

}
var table = document.createElement("table");
table.border = 1 ;
table.width = "100%";
var tbody = document.createElement("tbody");
table.appendChild(tbody);
var row1 = document.createElement("tr");
tbody.appendChild(row1);
var cell1_1 = document.createElement("td");
cell1_1.appendChild(document.createTextNode("cell 1.1"));
row1.appendChild(cell1_1);
var cell1_2 = document.createElement("td");
row1.appendChild(document.createTextNode("cell 1.2"));
var row2 = document.createElement("tr");
tbody.appendChild(row2);
var cell2_1 = document.createElement("td");
cell2_1.appendChild(document.createTextNode("cell 2.1"));
row2.appendChild(cell2_1);
var cell2_2 = document.createElement("td");
cell2_2.appendChild(document.createTextNode("cell 2.2"));
row2.appendChild(cell2_2);
document.body.appendChild(table);

var table = document.createElement("table");
table.width = "100%";
table.border = 1;
var tbody = document.createElement("tbody");
table.appendChild(tbody);
tbody.insertRow(0);
tbody.rows[0].insertCell(0);
tbody.rows[0].cells[0].appendChild(document.createTextNode("Cell 1.1"));
tbody.rows[0].insertCell(1);
tbody.rows[0].cells[1].appendChild(document.createTextNode("Cell 1.2"));
tbody.insertRow(1);
tbody.rows[1].insertCell(0);
tbody.rows[1].cells[0].appendChild(document.createTextNode("Cell 2.1"));
tbody.rows[1].insertCell(1);
tbody.rows[1].cells[1].appendChild(document.createTextNode("Cell 2.2"));
document.body.appendChild(table);
var divs  = document.getElementsByTagName("div");
for (var i = 0; i < divs.length; i++) {
		var div = document.createElement("div");
		document.body.appendChild(div);
}
var divs  = document.getElementsByTagName("div");
	  for (var i = 0,length = divs.length; i < length; i++) {
		var div = document.createElement("div");
		document.body.appendChild(div);
}
var supportsDOM2Core = document.implementation.hasFeature("Core","2.0");
var supportsDOM3Core = document.implementation.hasFeature("Core","3.0");
var supportsDOM2HTML = document.implementation.hasFeature("HTML","2.0");
var supportsDOM2Views = document.implementation.hasFeature("Views","2.0");
var supportDOM2XML = document.implementation.hasFeature("XML","2.0");
function getStyleSheet(element) {
	return element.sheet || element.styleSheet;
}
function insertRule(sheet,selectorText,cssText,position) {
	if(sheet.insertRule){
		sheet.insertRules(selectorText+"{"+cssText+"}",positions);
	} else if (sheet.addRule)
		sheet.addRule(selectorText,cssText,positions);
}
function deleteRule(sheet,position) {
	if (sheet.deleteRule) { 
	 	sheet.deleteRule(position); 
	} else if(sheet.removeRule) {
		sheet.removeRule(position);
	
	}
}
function getElementLeft(element) {
	var actualLeft = element.offsetLeft;
	var current = element.offsetParent;
	while(current != null){
		actualLeft += current.offsetLeft;
		current = current.offsetParent;
	}
	return actualLeft;
}
function getElementTop(element) {
	var actualTop = element.offsetTop;
	var current = element.offsetParent;
	while(current != null){
		actualTop += current.offsetTop;
		current = current.offsetParent;
	}
	return actualTop;
}
function getViewPort() {
	if(document.compatMode == "BackCompat")
	{
		return {
			width:document.body.clientWidth,
			height:document.body.clientHeight
		};	
	} else {
			return {
			width:document.documentElement.clientWidth,
			height:document.documentElement.clientHeight
			}
	}
}
var docHeight = Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight);
var docWidth = Math.max(document.documentElement.scrollWidth,document.documentElement.clientWidth);
function scrollTop(element) {
	if (element.scrollTop != 0) { 
	  element.scrollTop = 0;
	};
}
function getBoundingClientRect(element) {
	var scrollTop = document.documentElement.scrollTop;
	var scrollLeft = document.documentElement.scrollLeft;
	if (element.getBoundingClientRect) { 
		if (typeof arguments.callee.offset !="number") { 
				var scrollTop = document.documentElement.scrollTop;
				var temp = document.createElement("div");
				temp.style.cssText = "position:absolute;left:0;top:0;";
				document.body.appendChild(temp);
				arguments.collee.offset = -temp.getBoundingClientRect().top - scrollTop;
				document.body.removeChild(temp);
				temp = null;
		} 
		var rect = element.getBoundingClientRect();
		var offset = arguments.collee.offset;
		return {
				left:rect.left + offset,
				right:rect.right + offset,
				top:rect.top + offset,
				bottom:rect.bottom + offset
		}
	} else {
		var actualLeft = getElenentLeft(element);
		var actualTop = getElenentTop(element);
		return {
			left:actualLeft-scrollLeft,
			right:actualLeft +element.offsetWidth - - scrollLeft,
			top:actualTop - scrollTop,
			bottom:actualTop + element.offsetHeight - scrollTop
		}
	}
}
var supportTraversals = document.implementation.hasFeature('Traversal','2.0');
var supportsNodeIterator = (typeof document.createNodeIterator == 'function');
var supportsTreeWalker = (typeof document.createTreeWalker == 'function');
var filter = {
    acceptNode:function(node){
        return node.tagName.toLowerCase() == "p"?
        NodeFilter.FILTER_ACCEPT:
        NodeFilter.FILTER_SKIP;
    }
};
var iterator = document.createNodeIterator(document.body,NodeFilter.SHOW_ELEMENT,filter,false);
console.log(iterator);
document.implementation.hasFeature("Range","2.0");
typeof document.createRange == 'function';
