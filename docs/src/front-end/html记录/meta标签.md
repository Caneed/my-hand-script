# meta 标签

[TOC]

### 简介

meta 标签一般放在 html 页面的 head 部分
MDN 定义:meta 是文档级元数据元素，用来表示那些不能由其它 HTML 元相关元素（`<base>`,`<link>`,`<script>`,`<style>`或`<title>`）之一的任何元数据。

### name 属性

在 meta 标签中指定 name 属性时,它一般与 content 属性一起使用

##### author

author 用来表示网页作者的名字比如是某个组织或者机构

```HTML
<meta name="author" content="xxx@gmail.com">
```

##### description

表示对网页的描述

```html
<meta name="description" content="对网页的描述" />
```

##### keywords

表示对该网页内容相关的关键字，在搜索引擎遇到这些关键字时，会对这些关键字进行分类

```html
<meta name="keywords" content="网页关键描述" />
```

##### viewport

为视窗的初始大小提供指示，目前仅用于移动设备

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

其中 width 设置的视窗宽度为设备大小宽度
initial-scale 表示设备宽度和视窗大小的缩放比例

##### robots

表示爬虫对此页面的一种处理规则，是用来做搜索引擎爬取的
它的 content 有几种属性:

- all:搜索引擎将索引此网页，并继续通过此网页的链接索引文件将被检索
- none:搜索引擎讲忽略此网页
- index:搜索引擎索引此网页
- follow:搜索引擎继续通过此网页的链接索引搜索其它的网页

##### renderer

用来指定双核浏览器的渲染方式

```html
<meta name="renderer" content="webkit" /> //默认webkit内核
<meta name="renderer" content="ie-comp" /> //默认IE兼容模式
<meta name="renderer" content="ie-stand" /> //默认IE标准模式
```

##### http-equiv

http-equiv 也是和 content 一起使用，前者表示要表示的元数据的名称，后者是元数据的值。

http-equiv 所有允许的值都是特定 HTTP 头部的名称

**X-UA=Compatible**

最常见的 http-equiv 的标签

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
```

它是用来是做 IE 浏览器适配的。

IE=edge 告诉浏览器，以当前浏览器支持的最新版本来渲染，IE9 就以 IE9 版本来渲染。

chrome=1 告诉浏览器，如果当前 IE 浏览器安装了 Google Chrome Frame 插件，就以 chrome 内核来渲染页面。

**content-type**
用来声明文档的类型和字符集

```html
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
```

**x-dns-prefetch-control**
一般来说，HTML 页面中的 a 标签会自动启用 DNS 提前解析来提升网站性能，但是在使用 https 协议的网站中失效了，我们可以设置

```html
<meta http-equiv="x-dns-prefetch-control" content="on" />
```

这样就会打开 dns 对于 a 标签的提前解析
