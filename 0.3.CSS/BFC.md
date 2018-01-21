
##BFC : Block Formatting Contex

写CSS样式时，对一个元素设置css,我们首先要知道这个元素是块级元素还是行内元素，而BFC就是用来格式化块级盒子的。

Formatting Context：指页面中一个渲染区域，并且拥有一套渲染规则，它决定了其子元素如何定位，以及与其他元素的相互关系和作用。

BFC定义：**块级格式化上下文，它是指一个独立的块级渲染区域，只有Block-level Box参与，该区域拥有一套渲染规则来约束块级盒子的布局，且与区域外部无关。**


##应用
### 1、**解决margin重叠问题**;

相邻的垂直元素同时设置了margin后，实际margin值会塌陷到其中较大的那个值。
其根本原理就是它们处于同一个BFC，符合“属于同一个BFC的两个相邻元素的margin会发生重叠”的规则。

解决： 在其中一个元素外面包裹一层容器，并触发该容器生成一个BFC。那么两个元素便属于不同的BFC，就不会发生margin重叠了。这样就改变了元素的结构，不是很好的方法，能不能添加一个空的元素（隔开？）；

### 2、解决浮动问题

**给父元素设置overflow:hidden可以清除子元素的浮动**，但往往都不知道原理是什么？

其实这就是应用了BFC的原理：**当在父元素中设置overflow:hidden时就会触发BFC**，**所以他内部的元素就不会影响外面的布局，BFC就把浮动的子元素高度当做了自己内部的高度去处理溢出，所以外面看起来是清除了浮动。**

```
<!-- 文档流 从上到下,当遇到float、position：absolute时，会离开文档流 -->
// 设置浮动前，.one是一个没有高度的元素，自然塌陷
// 结果： Hello World! 你好世界！
.one {                
	/* 文档流 里面的文字标签将父元素撑起来 */
	background-color: pink;
}
.two {                
	float: left;
}
<div class = "one">       
	<div class = "two">
	Hello World!
	</div>        
</div>
你好世界！

// 设置后，.one是一个块元素(BFC)
// 结果： Hello World! 
		 你好世界！
.one {
	background-color: pink;
	overflow: hidden; 
}
```

### 3、解决侵占浮动元素的问题

**浮动元素会脱离文档流**，然后浮盖在文档流元素上。

解决： 1. 同时都浮动；2. 清除浮动（overflow: hidden;）


