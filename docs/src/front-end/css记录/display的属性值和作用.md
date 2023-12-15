# display 的属性值和作用

| 属性值       | 作用                                       |
| ------------ | ------------------------------------------ |
| none         | 元素不显示并会从文档流移除                 |
| block        | 块类型，默认宽度为父元素宽度，换行显示     |
| inline       | 行内类型，默认宽度为内容宽度，同行显示     |
| inline-block | 默认宽度为内容宽度，可以设置宽高，同行显示 |
| list-item    | 像块元素一样显示，并且添加列表项样式       |
| table        | 像块元素一样显示                           |
| inherit      | 从父元素继承 display 的值                  |

### block,inline-block 和 inline 的区别

（1）block： 会独占一行，多个元素会另起一行，可以设置 width、height、margin 和 padding 属性；
（2）inline： 元素不会独占一行，设置 width、height 属性无效。但可以设置水平方向的 margin 和 padding 属性，不能设置垂直方向的 padding 和 margin；
（3）inline-block： 将对象设置为 inline 对象，但对象的内容作为 block 对象呈现，之后的内联对象会被排列在同一行内。
对于行内元素和块级元素，其特点如下：
（1）行内元素

设置宽高无效；
可以设置水平方向的 margin 和 padding 属性，不能设置垂直方向的 padding 和 margin；
不会自动换行；

（2）块级元素

可以设置宽高；
设置 margin 和 padding 都有效；
可以自动换行；
多个块状，默认排列从上到下。

### display:none 和 visibility:hidden 的区别

- 在渲染树中

display:none 会让元素完全从渲染树中消失，渲染时不会占据任何空间；
visibility:hidden 不会让元素从渲染树中消失，渲染的元素还会占据相应的空间，只是内容不可见。

- 是否是继承属性

display:none 是非继承属性，子孙节点会随着父节点从渲染树消失，通过修改子孙节点的属性也无法显示；
visibility:hidden 是继承属性，子孙节点消失是由于继承了 hidden，通过设置 visibility:visible 可以让子孙节点显示；
- 修改常规文档流中元素的 display 通常会造成文档的重排，但是修改 visibility 属性只会造成本元素的重绘；

- 如果使用读屏器，设置为 display:none 的内容不会被读取，设置为 visibility:hidden 的内容会被读取。
