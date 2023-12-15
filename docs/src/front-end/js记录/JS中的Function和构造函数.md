# Function和构造函数



[TOC]

### 概述

`Function`是一个构造函数，可以通过该构造函数去创建一个函数，创建的函数是一个`Function`对象，实际上，不管使用什么方式创建的都是一个`Function`对象，本质上函数名仅仅是一个变量名，它指向某个Function对象的引用。

```
var f = function () {
  console.log('this is f function');
}
// 函数也是一个对象
console.log(f instanceof Object); // true
// 函数是Function类型的对象
console.log(f instanceof Function); // true
```

上述代码说明了创建的函数指向的是一个`Function`类型的对象

### 使用Function构造函数创建函数

```
var functionName = new Function ([arg1[, arg2[, ...argN]],] functionBody)
```

比如这样：

```
// 无参的函数
var fun = new Function('console.log("这是一个函数")')
fun() // 这是一个函数
// 带一个参数的函数
var fun = new Function('a', 'console.log("这个函数带一个参数：" + a)')
fun(100) // 这个函数带一个参数：100
// 带两个参数的函数
var fun = new Function(
  'a, b',
  'console.log("这是带两个参数的函数，分别是" + a + "和" + b);',
)
fun(100, 200) // 这是带两个参数的函数，分别是100和200
```

在实际的开发中我们一般不使用这种方式创建函数，因为它毫无可读性。

### Function和Object

1. `Object`类型和`Function`是JavaScript中的引用类型之一
2. 构造函数也是函数的一种
3. 函数其实是一个`Function`类型的对象
4. JavaScript中所有对象都是`Object`类型的

```
console.log(Function instanceof Function) //true
console.log(Function instanceof Object) //true
console.log(Object instanceof Object) //true
console.log(Object instanceof Function) //true
```

### 构造函数

构造函数又被称为构造器或者对象模板，是对象中的一个方法，在实例化时构造器被调用。

语法结构：

```
function Person(){
  this.属性名 = 属性值;
  this.方法名 = function() {
      方法体
}
var person = new Person();
```

创建构造函数并通过构造函数去实例化一个类

```
// 自定义构造函数 -> 作用：创建对象
function Person(name, age, sex) {
  this.name = name
  this.age = age
  this.sex = sex
  this.print = function () {
    console.log(name + '今年' + age + '岁 性别' + sex)
  }
}
// 创建 一碗甜
var t = new Person('一碗甜', 18, '女')
hong.print() // 一碗甜今年18岁 性别女
// 创建 一碗周
var z = new Person('一碗周', 20, '男')
dong.print() //一碗粥今年20岁 性别男
```

### 对象的constructor属性

`Object`对象提供的`constructor`属性，返回创建实例对象`Object`的构造函数的引用。

所有对象都会从它的原型上继承一个`constructor`属性：

值得注意的是此属性的值是对函数本身的引用，而不是一个包含函数名称的字符串。

```
// 创建 一碗周
var z = new Person('一碗周', 18, '男')
// 判断是否为 Person 构造函数的对象
console.log(z.constructor === Person)//true
```

### length属性

`length`属性指明了函数的形参个数

```
// 定义两个空函数
function fun(a, b, c, d) {}

function fn() {}

// 测试 length 属性
console.log(fun.length) // 4
console.log(fn.length) // 0

```

### apply()方法

**`apply()`**方法调用一个具有给定`this`值的函数，以及以一个数组（或类数组对象）的形式提供的参数。

```
func.apply(thisArg, [argsArray])
```

- `thisArg`：**必选的**。在`func`函数运行时使用的`this`值。请注意，`this`可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为`null`或`undefined`时会自动替换为指向全局对象，原始值会被包装。
- `argsArray`：**可选的**。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给`func`函数。如果该参数的值为`null`或`undefined`，则表示不需要传入任何参数。从ECMAScript5开始可以使用类数组对象。

返回值是调用有指定this值和参数的函数的结果。

用法：

```
// 定义一个函数
function fn(a) {
  console.log('this is ' + a)
}
fn.apply(null, ['函数']) // this is 函数

// 上面的调用方式等同于下面这种方式
fn('函数') // this is 函数
```

### call()方法

该方法的语法和作用与`apply()`方法类似，只有一个区别，就是`call()`方法接受的是**一个参数列表**，而`apply()`方法接受的是**一个包含多个参数的数组**。

```
function fn(a) {
  console.log('this is ' + a)
}
fn.call(null, '函数') // this is 函数

// 上面的调用方式等同于下面这种方式
fn('函数') // this is 函数
```

### bind()方法

`bind()`方法创建一个新的函数，在`bind()`被调用时，这个新函数的`this`被指定为`bind()`的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

```
function.bind(thisArg[, arg1[, arg2[, ...]]])
```

- `thisArg`：调用绑定函数时作为`this`参数传递给目标函数的值。
- `arg1, arg2, ...`：当目标函数被调用时，被预置入绑定函数的参数列表中的参数。

返回值是一个原函数的拷贝，并拥有指定的**`this`**值和初始参数。

```
// 定义一个函数
var fun = function (a, b) {
  console.log('第一个参数的值为：' + a + '第二个参数的值为：' + b)
}
// 调用 fun()
fun(10, 20) // 第一个参数的值为：10第二个参数的值为：20
// 创建绑定函数
var fn = fun.bind(null, 100, 200) // 有参数默认值的功能
// 调用新创建的函数，不写实参
fn() // 第一个参数的值为：100第二个参数的值为：200
```

### Arguments对象

`arguments`对象是所有（非箭头）函数中都可用的**局部变量**。你可以使用`arguments`对象在函数中引用函数的参数。此对象包含传递给函数的每个参数，第一个参数在索引0处。

它的参数也是可以被重新定义的，该对象还提供了两个属性，分别是：

- `arguments.length`：返回传递给函数的参数数量
- `arguments.callee` ：返回指向参数所属的当前执行的函数。如果这个属性后面紧跟一个 `()`，则表示调用此函数，因为`arguments.callee === fun`的结果为 true

```
var fun = function () {
  console.log(arguments)
  // arguments.callee  指向参数所属的当前执行的函数。
  //如果给这个属性加一个括号则表示调用。因为 arguments.callee === fun 的结果为 true
  console.log(arguments.callee)//如果没有()返回的是这个函数体
  // arguments.length  传递给函数的参数数量。
  console.log(arguments.length)
}
fun(1, 2, 3, 4, 5) 
```

