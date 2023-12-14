### transition 和 animation 的区别

transition 是过度属性，强调过度，它的实现需要触发一个事件（比如鼠标移动上去，焦点，点击等）才执行动画。它类似于 flash 的补间动画，设置一个开始关键帧，一个结束关键帧。
animation 是动画属性，它的实现不需要触发事件，设定好时间之后可以自己执行，且可以循环一个动画。它也类似于 flash 的补间动画，但是它可以设置多个关键帧（用@keyframe 定义）完成动画。

### 使用 transition 中的 translate 来改变位置和定位的区别

translate 是 transform 属性的⼀个值。改变 transform 或 opacity 不会触发浏览器重新布局（reflow）或重绘（repaint），只会触发复合（compositions）。⽽改变绝对定位会触发重新布局，进⽽触发重绘和复合。transform 使浏览器为元素创建⼀个 GPU 图层，但改变绝对定位会使⽤到 CPU。 因此 translate()更⾼效，可以缩短平滑动画的绘制时间。 ⽽ translate 改变位置时，元素依然会占据其原始空间，绝对定位就不会发⽣这种情况。
