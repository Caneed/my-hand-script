import{_ as s,o as n,c as a,R as p}from"./chunks/framework.9GQK9YA0.js";const v=JSON.parse('{"title":"JS闭包","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/js记录/JS闭包.md","filePath":"front-end/js记录/JS闭包.md"}'),l={name:"front-end/js记录/JS闭包.md"},e=p(`<h1 id="js闭包" tabindex="-1">JS闭包 <a class="header-anchor" href="#js闭包" aria-label="Permalink to &quot;JS闭包&quot;">​</a></h1><p>[TOC]</p><h3 id="上级作用域" tabindex="-1">上级作用域 <a class="header-anchor" href="#上级作用域" aria-label="Permalink to &quot;上级作用域&quot;">​</a></h3><p>函数在哪里创建的，哪里就是上级作用域</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var a = 10</span></span>
<span class="line"><span>function foo(){</span></span>
<span class="line"><span>    console.log(a)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function sum() {</span></span>
<span class="line"><span>    var a = 20</span></span>
<span class="line"><span>    foo()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sum()</span></span>
<span class="line"><span>/* 输出</span></span>
<span class="line"><span>    10</span></span>
<span class="line"><span>/</span></span></code></pre></div><p>这里foo()是在全局创建的，所以上级作用域为<code>window</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var n = 10</span></span>
<span class="line"><span>function fn(){</span></span>
<span class="line"><span>    var n =20</span></span>
<span class="line"><span>    function f() {</span></span>
<span class="line"><span>       n++;</span></span>
<span class="line"><span>       console.log(n)</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>    f()</span></span>
<span class="line"><span>    return f</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var x = fn()</span></span>
<span class="line"><span>x()</span></span>
<span class="line"><span>x()</span></span>
<span class="line"><span>console.log(n)</span></span>
<span class="line"><span>/* 输出</span></span>
<span class="line"><span>*  21</span></span>
<span class="line"><span>    22</span></span>
<span class="line"><span>    23</span></span>
<span class="line"><span>    10</span></span>
<span class="line"><span>/</span></span></code></pre></div><p><code>f()</code>的上级作用域为<code>fn()</code>，实际<code>x()</code>调用的是<code>f()</code>里面的n为<code>fn()</code>中的n</p><h3 id="js堆栈内存释放" tabindex="-1">JS堆栈内存释放 <a class="header-anchor" href="#js堆栈内存释放" aria-label="Permalink to &quot;JS堆栈内存释放&quot;">​</a></h3><p>堆内存：存储引用类型值，对象类型就是键值对，函数就是代码字符串。</p><p>堆内存释放：将引用类型的空间地址变量赋值成 <code>null</code>，或没有变量占用堆内存了浏览器就会释放掉这个地址</p><p>栈内存：提供代码执行的环境和存储基本类型值。</p><p>栈内存释放：一般当函数执行完后函数的私有作用域就会被释放掉。</p><p><strong>但栈内存的释放也有特殊情况：① 函数执行完，但是函数的私有作用域内有内容被栈外的变量还在使用的，栈内存就不能释放里面的基本值也就不会被释放。② 全局下的栈内存只有页面被关闭的时候才会被释放</strong></p><h3 id="闭包" tabindex="-1">闭包 <a class="header-anchor" href="#闭包" aria-label="Permalink to &quot;闭包&quot;">​</a></h3><p><strong>在 JS 忍者秘籍(P90)中对闭包的定义：闭包允许函数访问并操作函数外部的变量。红宝书上对于闭包的定义：闭包是指有权访问另外一个函数作用域中的变量的函数。 MDN 对闭包的定义为：闭包是指那些能够访问自由变量的函数。这里的自由变量是外部函数作用域中的变量。</strong></p><p>概述上面的话，<strong>闭包是指有权访问另一个函数作用域中变量的函数</strong></p><h4 id="闭包形成原因" tabindex="-1">闭包形成原因 <a class="header-anchor" href="#闭包形成原因" aria-label="Permalink to &quot;闭包形成原因&quot;">​</a></h4><p><strong>内部的函数存在外部作用域的引用就会导致闭包</strong>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var a = 0</span></span>
<span class="line"><span>function foo(){</span></span>
<span class="line"><span>    var b =14</span></span>
<span class="line"><span>    function fo(){</span></span>
<span class="line"><span>        console.log(a, b)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    fo()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>foo()//0，14</span></span></code></pre></div><h4 id="闭包变量存储的位置" tabindex="-1">闭包变量存储的位置 <a class="header-anchor" href="#闭包变量存储的位置" aria-label="Permalink to &quot;闭包变量存储的位置&quot;">​</a></h4><p><strong>闭包中的变量存储的位置是堆内存。</strong></p><ul><li>假如闭包中的变量存储在栈内存中，那么栈的回收 会把处于栈顶的变量自动回收。所以闭包中的变量如果处于栈中那么变量被销毁后，闭包中的变量就没有了。所以闭包引用的变量是出于堆内存中的。</li></ul><h4 id="闭包的作用" tabindex="-1">闭包的作用 <a class="header-anchor" href="#闭包的作用" aria-label="Permalink to &quot;闭包的作用&quot;">​</a></h4><ul><li>保护函数的私有变量不受外部的干扰。形成不销毁的栈内存。</li><li>保存，把一些函数内的值保存下来。闭包可以实现方法和属性的私有化</li></ul><h4 id="闭包使用场景" tabindex="-1">闭包使用场景 <a class="header-anchor" href="#闭包使用场景" aria-label="Permalink to &quot;闭包使用场景&quot;">​</a></h4><p><strong><code>return</code>回一个函数</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var n = 10</span></span>
<span class="line"><span>function fn(){</span></span>
<span class="line"><span>    var n =20</span></span>
<span class="line"><span>    function f() {</span></span>
<span class="line"><span>       n++;</span></span>
<span class="line"><span>       console.log(n)</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>    return f</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var x = fn()</span></span>
<span class="line"><span>x() // 21</span></span></code></pre></div><p><strong>函数作为参数</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var a = &#39;林一一&#39;</span></span>
<span class="line"><span>function foo(){</span></span>
<span class="line"><span>    var a = &#39;foo&#39;</span></span>
<span class="line"><span>    function fo(){</span></span>
<span class="line"><span>        console.log(a)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return fo</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function f(p){</span></span>
<span class="line"><span>    var a = &#39;f&#39;</span></span>
<span class="line"><span>    p()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>f(foo())</span></span>
<span class="line"><span>/* 输出</span></span>
<span class="line"><span>*   foo</span></span>
<span class="line"><span>/</span></span></code></pre></div><p><strong>IIFE(自执行函数)</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var n = &#39;林一一&#39;;</span></span>
<span class="line"><span>(function p(){</span></span>
<span class="line"><span>    console.log(n)</span></span>
<span class="line"><span>})()</span></span>
<span class="line"><span>/* 输出</span></span>
<span class="line"><span>*   林一一</span></span>
<span class="line"><span>/</span></span></code></pre></div><p><strong>循环赋值</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>for(var i = 0; i&lt;10; i++){</span></span>
<span class="line"><span>  (function(j){</span></span>
<span class="line"><span>       setTimeout(function(){</span></span>
<span class="line"><span>        console.log(j)</span></span>
<span class="line"><span>    }, 1000) </span></span>
<span class="line"><span>  })(i)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>因为存在闭包的原因上面能依次输出1~10，闭包形成了10个互不干扰的私有作用域。将外层的自执行函数去掉后就不存在外部作用域的引用了，输出的结果就是连续的 10。为什么会连续输出10，因为 JS 是单线程的遇到异步的代码不会先执行(会入栈)，等到同步的代码执行完 <code>i++</code> 到 10时，异步代码才开始执行此时的 <code>i=10</code> 输出的都是 10。</p><p><strong>使用回调函数就是闭包</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>window.name = &#39;林一一&#39;</span></span>
<span class="line"><span>setTimeout(function timeHandler(){</span></span>
<span class="line"><span>  console.log(window.name);</span></span>
<span class="line"><span>}, 100)</span></span></code></pre></div><h3 id="例题" tabindex="-1">例题 <a class="header-anchor" href="#例题" aria-label="Permalink to &quot;例题&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var data = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (var i = 0; i &lt; 3; i++) {</span></span>
<span class="line"><span>  data[i] = function () {</span></span>
<span class="line"><span>    console.log(i);</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>data[0]();</span></span>
<span class="line"><span>data[1]();</span></span>
<span class="line"><span>data[2]()</span></span>
<span class="line"><span>//输出3,3,3</span></span></code></pre></div><p>i是全局变量，在i变成3之后再进行data[1,2,3]的调用</p><p><strong>可以使用闭包达到预期的效果，首先是自执行函数和闭包</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var data = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (var i = 0; i &lt; 3; i++) {</span></span>
<span class="line"><span>    (function(j){</span></span>
<span class="line"><span>      setTimeout( data[j] = function () {</span></span>
<span class="line"><span>        console.log(j);</span></span>
<span class="line"><span>      }, 0)</span></span>
<span class="line"><span>    })(i)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>data[0]();</span></span>
<span class="line"><span>data[1]();</span></span>
<span class="line"><span>data[2]()</span></span>
<span class="line"><span>//0,1,2</span></span></code></pre></div><p><strong>使用<code>let</code></strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var data = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (let i = 0; i &lt; 3; i++) {</span></span>
<span class="line"><span>  data[i] = function () {</span></span>
<span class="line"><span>    console.log(i);</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>data[0]();</span></span>
<span class="line"><span>data[1]();</span></span>
<span class="line"><span>data[2]()</span></span></code></pre></div>`,44),i=[e];function c(o,t,d,r,h,u){return n(),a("div",null,i)}const f=s(l,[["render",c]]);export{v as __pageData,f as default};
