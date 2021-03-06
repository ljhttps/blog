# ES6 和 node 的 commonjs 模块化规范区别

模块化规范：即为 JavaScript 提供一种模块编写、模块依赖和模块运行的方案。谁让最初的 JavaScript 是那么的裸奔呢——全局变量就是它的模块化规范。

require/exports 出生在野生规范当中，什么叫做野生规范？即这些规范是 JavaScript 社区中的开发者自己草拟的规则，得到了大家的承认或者广泛的应用。

比如 CommonJS、AMD、CMD 等等。import/export 则是名门正派。TC39 制定的新的 ECMAScript 版本，即 ES6（ES2015）中包含进来。

[CommonJS 模块与 ES6 模块的区别](https://www.cnblogs.com/unclekeith/archive/2017/10/17/7679503.html)

需要添加测试。

## CommonJS require

Node.js 原生环境支持 commonJs 模块化规范。

缓存。

require 就相当于把被引用的 module 拷贝了一份到当前 module 中。

export 和 module.exports 暴露出来接口。

### export 和 module.exports 的区别

export 是 module.exports 的引用。作为一个引用，如果我们修改它的值，实际上修改的是它对应的引用对象的值。

commonJS 用**同步的方式加载模块**。在服务端，模块文件都存在本地磁盘，读取非常快，所以这样做不会有问题。但是在浏览器端，限于网络原因，更合理的方案是使用异步加载。

```js
module.export = ;
exports = ;
require();
```

1. 对于**基本数据类型，属于复制**。即会被**模块缓存**。同时，在另一个模块可以对该模块输出的变量重新赋值。
2. 对于**复杂数据类型，属于浅拷贝**。由于两个模块引用的对象指向同一个内存空间，因此对该模块的值做修改时**会影响另一个模块**。
3. 当使用 require 命令加载某个模块时，就会运行整个模块的代码（第一次加载）。
4. 当使用 require 命令加载同一个模块时，不会再执行该模块，而是取到缓存 require.cache 之中的值。也就是说，CommonJS 模块无论加载多少次，都只会在第一次加载时运行一次，以后再加载，就返回第一次运行的结果，除非手动清除系统缓存。
5. 循环加载时，属于**加载时执行**。即脚本代码在 require 的时候，就会全部执行。一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。

## ES6 模块化

ES6 模块化规范原生的浏览器环境和 Node.js 环境都不识别，但是要使用，就必须要使用 babel 编译成浏览器或者 Node.js 可以识别的代码，为了节省时间，那么就会出现自动化一键打包编译代码的工具， - webpack.

ES6 最牛逼的地方，不仅支持了**静态校验**，**可以同步/异步加载**，而且统一了前后端的模块化规范，Node 和传统前端，都可以用这套规范。

## ES6 模块与 CommonJS 模块的差异

- CommonJS 模块输出的是一个**值的拷贝**，ES6 模块输出的是**值的引用** （首次 require 不同路径的文件，会在 require.cache 中保存一份缓存，下次读取的时候就直接从缓存中读取了）

- CommonJS 模块是运行时加载，ES6 模块是**编译时输出接口**。

- CommonJS 加载的是一个对象（即 module.exports 属性），该对象**只有在脚本运行完才会生成**。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

- 这也是为什么 TypeScript 支持静态类型检查的原因 因为他使用的是 ES6 模块化方案。
