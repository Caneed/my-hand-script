import{_ as n,o as s,c as a,R as e}from"./chunks/framework.9GQK9YA0.js";const b=JSON.parse('{"title":"Function和构造函数","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/js记录/JS中的Function和构造函数.md","filePath":"front-end/js记录/JS中的Function和构造函数.md"}'),p={name:"front-end/js记录/JS中的Function和构造函数.md"},l=e(`<h1 id="function和构造函数" tabindex="-1">Function和构造函数 <a class="header-anchor" href="#function和构造函数" aria-label="Permalink to &quot;Function和构造函数&quot;">​</a></h1><p>[TOC]</p><h3 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h3><p><code>Function</code>是一个构造函数，可以通过该构造函数去创建一个函数，创建的函数是一个<code>Function</code>对象，实际上，不管使用什么方式创建的都是一个<code>Function</code>对象，本质上函数名仅仅是一个变量名，它指向某个Function对象的引用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var f = function () {</span></span>
<span class="line"><span>  console.log(&#39;this is f function&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 函数也是一个对象</span></span>
<span class="line"><span>console.log(f instanceof Object); // true</span></span>
<span class="line"><span>// 函数是Function类型的对象</span></span>
<span class="line"><span>console.log(f instanceof Function); // true</span></span></code></pre></div><p>上述代码说明了创建的函数指向的是一个<code>Function</code>类型的对象</p><h3 id="使用function构造函数创建函数" tabindex="-1">使用Function构造函数创建函数 <a class="header-anchor" href="#使用function构造函数创建函数" aria-label="Permalink to &quot;使用Function构造函数创建函数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var functionName = new Function ([arg1[, arg2[, ...argN]],] functionBody)</span></span></code></pre></div><p>比如这样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 无参的函数</span></span>
<span class="line"><span>var fun = new Function(&#39;console.log(&quot;这是一个函数&quot;)&#39;)</span></span>
<span class="line"><span>fun() // 这是一个函数</span></span>
<span class="line"><span>// 带一个参数的函数</span></span>
<span class="line"><span>var fun = new Function(&#39;a&#39;, &#39;console.log(&quot;这个函数带一个参数：&quot; + a)&#39;)</span></span>
<span class="line"><span>fun(100) // 这个函数带一个参数：100</span></span>
<span class="line"><span>// 带两个参数的函数</span></span>
<span class="line"><span>var fun = new Function(</span></span>
<span class="line"><span>  &#39;a, b&#39;,</span></span>
<span class="line"><span>  &#39;console.log(&quot;这是带两个参数的函数，分别是&quot; + a + &quot;和&quot; + b);&#39;,</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>fun(100, 200) // 这是带两个参数的函数，分别是100和200</span></span></code></pre></div><p>在实际的开发中我们一般不使用这种方式创建函数，因为它毫无可读性。</p><h3 id="function和object" tabindex="-1">Function和Object <a class="header-anchor" href="#function和object" aria-label="Permalink to &quot;Function和Object&quot;">​</a></h3><ol><li><code>Object</code>类型和<code>Function</code>是JavaScript中的引用类型之一</li><li>构造函数也是函数的一种</li><li>函数其实是一个<code>Function</code>类型的对象</li><li>JavaScript中所有对象都是<code>Object</code>类型的</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>console.log(Function instanceof Function) //true</span></span>
<span class="line"><span>console.log(Function instanceof Object) //true</span></span>
<span class="line"><span>console.log(Object instanceof Object) //true</span></span>
<span class="line"><span>console.log(Object instanceof Function) //true</span></span></code></pre></div><h3 id="构造函数" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数" aria-label="Permalink to &quot;构造函数&quot;">​</a></h3><p>构造函数又被称为构造器或者对象模板，是对象中的一个方法，在实例化时构造器被调用。</p><p>语法结构：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function Person(){</span></span>
<span class="line"><span>  this.属性名 = 属性值;</span></span>
<span class="line"><span>  this.方法名 = function() {</span></span>
<span class="line"><span>      方法体</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var person = new Person();</span></span></code></pre></div><p>创建构造函数并通过构造函数去实例化一个类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 自定义构造函数 -&gt; 作用：创建对象</span></span>
<span class="line"><span>function Person(name, age, sex) {</span></span>
<span class="line"><span>  this.name = name</span></span>
<span class="line"><span>  this.age = age</span></span>
<span class="line"><span>  this.sex = sex</span></span>
<span class="line"><span>  this.print = function () {</span></span>
<span class="line"><span>    console.log(name + &#39;今年&#39; + age + &#39;岁 性别&#39; + sex)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 创建 一碗甜</span></span>
<span class="line"><span>var t = new Person(&#39;一碗甜&#39;, 18, &#39;女&#39;)</span></span>
<span class="line"><span>hong.print() // 一碗甜今年18岁 性别女</span></span>
<span class="line"><span>// 创建 一碗周</span></span>
<span class="line"><span>var z = new Person(&#39;一碗周&#39;, 20, &#39;男&#39;)</span></span>
<span class="line"><span>dong.print() //一碗粥今年20岁 性别男</span></span></code></pre></div><h3 id="对象的constructor属性" tabindex="-1">对象的constructor属性 <a class="header-anchor" href="#对象的constructor属性" aria-label="Permalink to &quot;对象的constructor属性&quot;">​</a></h3><p><code>Object</code>对象提供的<code>constructor</code>属性，返回创建实例对象<code>Object</code>的构造函数的引用。</p><p>所有对象都会从它的原型上继承一个<code>constructor</code>属性：</p><p>值得注意的是此属性的值是对函数本身的引用，而不是一个包含函数名称的字符串。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 创建 一碗周</span></span>
<span class="line"><span>var z = new Person(&#39;一碗周&#39;, 18, &#39;男&#39;)</span></span>
<span class="line"><span>// 判断是否为 Person 构造函数的对象</span></span>
<span class="line"><span>console.log(z.constructor === Person)//true</span></span></code></pre></div><h3 id="length属性" tabindex="-1">length属性 <a class="header-anchor" href="#length属性" aria-label="Permalink to &quot;length属性&quot;">​</a></h3><p><code>length</code>属性指明了函数的形参个数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 定义两个空函数</span></span>
<span class="line"><span>function fun(a, b, c, d) {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function fn() {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 测试 length 属性</span></span>
<span class="line"><span>console.log(fun.length) // 4</span></span>
<span class="line"><span>console.log(fn.length) // 0</span></span></code></pre></div><h3 id="apply-方法" tabindex="-1">apply()方法 <a class="header-anchor" href="#apply-方法" aria-label="Permalink to &quot;apply()方法&quot;">​</a></h3><p>**<code>apply()</code>**方法调用一个具有给定<code>this</code>值的函数，以及以一个数组（或类数组对象）的形式提供的参数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func.apply(thisArg, [argsArray])</span></span></code></pre></div><ul><li><code>thisArg</code>：<strong>必选的</strong>。在<code>func</code>函数运行时使用的<code>this</code>值。请注意，<code>this</code>可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为<code>null</code>或<code>undefined</code>时会自动替换为指向全局对象，原始值会被包装。</li><li><code>argsArray</code>：<strong>可选的</strong>。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给<code>func</code>函数。如果该参数的值为<code>null</code>或<code>undefined</code>，则表示不需要传入任何参数。从ECMAScript5开始可以使用类数组对象。</li></ul><p>返回值是调用有指定this值和参数的函数的结果。</p><p>用法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 定义一个函数</span></span>
<span class="line"><span>function fn(a) {</span></span>
<span class="line"><span>  console.log(&#39;this is &#39; + a)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fn.apply(null, [&#39;函数&#39;]) // this is 函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 上面的调用方式等同于下面这种方式</span></span>
<span class="line"><span>fn(&#39;函数&#39;) // this is 函数</span></span></code></pre></div><h3 id="call-方法" tabindex="-1">call()方法 <a class="header-anchor" href="#call-方法" aria-label="Permalink to &quot;call()方法&quot;">​</a></h3><p>该方法的语法和作用与<code>apply()</code>方法类似，只有一个区别，就是<code>call()</code>方法接受的是<strong>一个参数列表</strong>，而<code>apply()</code>方法接受的是<strong>一个包含多个参数的数组</strong>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function fn(a) {</span></span>
<span class="line"><span>  console.log(&#39;this is &#39; + a)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fn.call(null, &#39;函数&#39;) // this is 函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 上面的调用方式等同于下面这种方式</span></span>
<span class="line"><span>fn(&#39;函数&#39;) // this is 函数</span></span></code></pre></div><h3 id="bind-方法" tabindex="-1">bind()方法 <a class="header-anchor" href="#bind-方法" aria-label="Permalink to &quot;bind()方法&quot;">​</a></h3><p><code>bind()</code>方法创建一个新的函数，在<code>bind()</code>被调用时，这个新函数的<code>this</code>被指定为<code>bind()</code>的第一个参数，而其余参数将作为新函数的参数，供调用时使用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function.bind(thisArg[, arg1[, arg2[, ...]]])</span></span></code></pre></div><ul><li><code>thisArg</code>：调用绑定函数时作为<code>this</code>参数传递给目标函数的值。</li><li><code>arg1, arg2, ...</code>：当目标函数被调用时，被预置入绑定函数的参数列表中的参数。</li></ul><p>返回值是一个原函数的拷贝，并拥有指定的**<code>this</code>**值和初始参数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 定义一个函数</span></span>
<span class="line"><span>var fun = function (a, b) {</span></span>
<span class="line"><span>  console.log(&#39;第一个参数的值为：&#39; + a + &#39;第二个参数的值为：&#39; + b)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 调用 fun()</span></span>
<span class="line"><span>fun(10, 20) // 第一个参数的值为：10第二个参数的值为：20</span></span>
<span class="line"><span>// 创建绑定函数</span></span>
<span class="line"><span>var fn = fun.bind(null, 100, 200) // 有参数默认值的功能</span></span>
<span class="line"><span>// 调用新创建的函数，不写实参</span></span>
<span class="line"><span>fn() // 第一个参数的值为：100第二个参数的值为：200</span></span></code></pre></div><h3 id="arguments对象" tabindex="-1">Arguments对象 <a class="header-anchor" href="#arguments对象" aria-label="Permalink to &quot;Arguments对象&quot;">​</a></h3><p><code>arguments</code>对象是所有（非箭头）函数中都可用的<strong>局部变量</strong>。你可以使用<code>arguments</code>对象在函数中引用函数的参数。此对象包含传递给函数的每个参数，第一个参数在索引0处。</p><p>它的参数也是可以被重新定义的，该对象还提供了两个属性，分别是：</p><ul><li><code>arguments.length</code>：返回传递给函数的参数数量</li><li><code>arguments.callee</code> ：返回指向参数所属的当前执行的函数。如果这个属性后面紧跟一个 <code>()</code>，则表示调用此函数，因为<code>arguments.callee === fun</code>的结果为 true</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var fun = function () {</span></span>
<span class="line"><span>  console.log(arguments)</span></span>
<span class="line"><span>  // arguments.callee  指向参数所属的当前执行的函数。</span></span>
<span class="line"><span>  //如果给这个属性加一个括号则表示调用。因为 arguments.callee === fun 的结果为 true</span></span>
<span class="line"><span>  console.log(arguments.callee)//如果没有()返回的是这个函数体</span></span>
<span class="line"><span>  // arguments.length  传递给函数的参数数量。</span></span>
<span class="line"><span>  console.log(arguments.length)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fun(1, 2, 3, 4, 5)</span></span></code></pre></div>`,49),c=[l];function o(i,t,d,u,r,h){return s(),a("div",null,c)}const v=n(p,[["render",o]]);export{b as __pageData,v as default};
