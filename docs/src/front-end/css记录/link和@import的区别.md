# link和@import的区别



这两种都是外部引入的方式:
- link是XHTML标签，除了引入css外，还可以定义其他事务，而@import属于css范畴，只能用于加载css
- link在引入css时是和页面同步进行加载的，而@import是在页面完全加载之后才进行加载
- link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。
- link支持使用Javascript控制DOM去改变样式；而@import不支持。