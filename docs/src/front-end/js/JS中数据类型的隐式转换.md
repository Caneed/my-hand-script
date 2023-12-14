# JS 中的隐式转换

[TOC]

### `ToPrimitive`方法

`ToPrimitive`方法是 JS 中每个值都隐含自带的方法，它用来将每个值转换为基本数据类型，如果这个值本身就为基本类型，则返回它本身

```js
ToPrimitive(value, type);
```

ToPrimitive 如果标记为转换成 Number 类型则会先调用`valueOf()`方法,如果调用后转换为了一个原始值，则直接返回，否则继续调用`toString()`方法,如果转换为了原始值，则直接返回，否则会报错,抛出 TypeErr 异常

ToPrimitive 如果标记为转换成 String 类型则会先调用`toString()`方法，如果转换为了原始值，则直接返回，否则继续调用`valueOf()`方法，如果转换为原始值，则直接返回，否则抛出 TypeErr 方法

ToPrimitive 中如果不指定 Type 参数，则会发生两种情况:

1. 如果传入的是一个 Date 类型的值，则默认转换为 String 类型
2. 如果传入的是非 Date 类型的值，则默认转换为 Number

JS 中的隐式转换一般发生在`-,+,*,/`和`==,<,>`之间，这些运算符只能操作基本数据类型，在进行运算操作时，一般先用 ToPrimitive 将其转换为基本类型再进行运算操作

### valueOf(),toString()

valueOf()和 toString()方法存在于 Object.prototype 上，Object.prototype 是所有对象原型链顶层原型，所有对象都会继承该原型的方法，故任何对象都会有 valueOf 和 toString 方法。

##### valueOf()

对于 JS 中的常见内置对象，valueOf()转换后的值

1. Number String Boolean 通过 valueOf()后会转换成对应的原始值

```js
let a = new String("eva");
let b = new Number("123");
let c = new Boolean("1231sad");

console.log(a.valueOf()); //eva
console.log(b.valueOf()); //123
console.log(c.valueOf()); //true
```

2. 对于 Date 这一特殊的对象，经过 valueOf()后会转换成对应日期的毫秒值

```js
let d = new Date();
console.log(d.valueOf()); //1665147955714
```

3. 除了上面两种之外都返回其对象本身
   ```js
   let arr = new Array();
   console.log(arr.valueOf()); //[]
   console.log(arr.valueOf() === arr); //true
   ```

##### toString()

Number、Boolean、String、Array、Date、RegExp、Function 这几种构造函数生成的对象，通过 toString 转换后会变成相应的字符串的形式，因为这些构造函数上封装了自己的 toString 方法。

```js
Number.prototype.hasOwnProperty("toString"); // true
Boolean.prototype.hasOwnProperty("toString"); // true
String.prototype.hasOwnProperty("toString"); // true
Array.prototype.hasOwnProperty("toString"); // true
Date.prototype.hasOwnProperty("toString"); // true
RegExp.prototype.hasOwnProperty("toString"); // true
Function.prototype.hasOwnProperty("toString"); // true

let num = new Number("123sd");
num.toString(); // 'NaN'

let str = new String("12df");
str.toString(); // '12df'

let bool = new Boolean("fd");
bool.toString(); // 'true'

let arr = new Array(1, 2);
arr.toString(); // '1,2'

let d = new Date();
d.toString(); // "Wed Oct 11 2017 08:00:00 GMT+0800 (中国标准时间)"

let func = function () {};
func.toString(); // "function () {}"
```

除了以上这些之外，其他的都继承了 Object.prototype.toString()方法，返回的是该对象的类型

```js
console.log(Math.toString()); //[object Math]
```

##### 通过`ToNumber()`转换为数字的规则

| 参数      | 结果                                                                      |
| --------- | ------------------------------------------------------------------------- |
| undefined | NaN                                                                       |
| null      | +0                                                                        |
| 布尔      | true->1,false->+0                                                         |
| 数字      | 无需转换                                                                  |
| 字符串    | 有字符串解析为数字，例如：‘324’转换为 324，‘qwer’转换为 NaN               |
| 对象      | 先进行 ToPrimitive(obj, Number)转换得到原始值，在进行 ToNumber 转换为数字 |

##### 通过`toString()`转换为字符串的规则

| 参数      | 结果                                                                        |
| --------- | --------------------------------------------------------------------------- |
| undefined | 'undefined'                                                                 |
| null      | 'null'                                                                      |
| 布尔      | 'true'或者是'false'                                                         |
| 数字      | 直接转换，比如 1123->'1123'                                                 |
| 字符串    | 无需转换                                                                    |
| 对象      | 先进行 ToPrimitive(obj, String)转换得到原始值，在进行 ToString 转换为字符串 |

### `+`操作符

在`+`操作符两边至少有一个 String 类型时，两边的变量都会隐式的转换为 String 类型,在其它情况下两边变量都会转换为数字类型

```js
console.log(1 + "abc"); //1abc
console.log(1 + false); //1
console.log("1" + false); //1false
console.log(1 + Symbol()); //err
console.log(false + true); //1
```

### `==`操作符

对于`==`操作符，两边尽量转换为 number 类型

```js
// ==
console.log(3 == true); //false
console.log("0" == false); //true
console.log("0" == 0); //true
```

### `>`和`<`操作符

对于`>`和`<`,如果是两个字符串比较，则比较字母表顺序

```js
console.log("a" > "b"); //false
console.log("ac" > "ab"); //true
```

对于其他情况，优先转换为数字类型

```js
console.log(-1 < false); //true
console.log("12" < 13); //true
```
