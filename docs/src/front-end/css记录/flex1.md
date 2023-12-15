# flex:1,flex:0,flex:auto,flex:auto

[TOC]

### flex属性

flex属性是flex-grow,flex:shrink,flex-basis三个属性的简写合并,默认值是0 1 auto
flex-grow是如果有剩余空间，是否扩大，0为不扩大
flex-shrink是如果剩余空间不够，是否缩小，0为不缩小
flex-basis为项目本身的大小，默认值是auto

##### flex:1

flex:1对应的是flex:1 1 0%
表示的是可扩大可缩小
其中flex中的各个块是均分的，如果某个块多出来就会换行显示

##### flex:auto

flex:auto表示的是flex:1 1 auto
它的flex块的分布是按照内容的大小划分，而不是均分

##### flex:0

flex:0表示的是flex:0 1 0%
表示的是可缩小但是不可扩大
它的flex块是按照内容中的最小宽度来分的，比如内容是一段文本，那么块的宽度就是一个字的宽度

##### flex:none

flex:none表示的是flex:0 0 auto
表示不可扩大和缩小
它的块的宽度就是内容的宽度





