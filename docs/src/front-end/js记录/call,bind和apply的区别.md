# call,bind,apply 的区别

[TOC]

### this 指向的改变

this 指向可以发生改变，几种改变方式:

- ES6 中的箭头函数
- 在函数内部使用 `_this=this`
- apply,call,bind
- new 一个实例对象

### 箭头函数

箭头函数的 this 指向和普通的 this 指向不同，普通的 this 指向是调用它的最后一个对象的作用域，也就是执行上下文
而箭头函数的 this 指向则是定义时的上下文环境,而不是执行时的上下文环境,如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined”。

### \_this=this

如果在函数中使用了定时器或者箭头函数，为了防止它的 this 指向发生改变而错乱，则需要使用\_this=this,然后在箭头函数中或者定时器中都使用这个\_this,这样 this 指向就不会发生改变了。

### call,bind 和 apply

**apply**

```js
var a = {
  name: "Cherry",

  func1: function () {
    console.log(this.name);
  },

  func2: function () {
    setTimeout(
      function () {
        this.func1();
      }.apply(a),
      100
    );
  },
};

a.func2(); // Cherry
```

**call**

```js
var a = {
  name: "Cherry",

  func1: function () {
    console.log(this.name);
  },

  func2: function () {
    setTimeout(
      function () {
        this.func1();
      }.call(a),
      100
    );
  },
};

a.func2(); // Cherry
```

**bind**

```js
var a = {
  name: "Cherry",

  func1: function () {
    console.log(this.name);
  },

  func2: function () {
    setTimeout(
      function () {
        this.func1();
      }.bind(a)(),
      100
    );
  },
};

a.func2(); // Cherry
```

##### apply 和 call 的区别

两者用法类似，但是如果显式绑定 this 的函数中有参数,那么 call 接收此函数的方法是接收一个参数列表，但是 apply 则是接收一个参数数组

**call**

```js
var a = {
  name: "Cherry",
  fn: function (a, b) {
    console.log(a + b);
  },
};

var b = a.fn;
b.call(a, 1, 2); // 3
```

**apply**

```js
var a = {
  name: "Cherry",
  fn: function (a, b) {
    console.log(a + b);
  },
};

var b = a.fn;
b.apply(a, [1, 2]); // 3
```

##### bind

bind 和上面两个的差别在于 bind 是创建了一个新的绑定了指定 this 的函数，需要再次调用才能使用，此外，bind传入的参数也是一个参数列表

```js
    var a ={
        name : "Cherry",
        fn : function (a,b) {
            console.log( a + b)
        }
    }

    var b = a.fn;
    b.bind(a,1,2)()           // 3
```


### 总结

1. 以函数的形式调用时，this永远都是window
2. 以方法的形式调用时，this就是调用方法的对象
3. 以构造函数的形式调用时，this就是新创建的对象
4. 使用call和apply调用时，this就是指定的那个对象
5. 在全局作用域中this代表window