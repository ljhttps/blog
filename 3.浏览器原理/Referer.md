Referer字段实际上告诉了服务器，用户在访问当前资源之前的位置。这往往可以用来用户跟踪。

一个典型的应用是，有些网站不允许图片外链，只有自家的网站才能显示图片，外部网站加载图片就会报错。它的实现就是基于Referer字段，如果该字段的网址是自家网址，就放行。

由于涉及隐私，很多时候不适合发送Referer字段。

由于涉及隐私，很多时候不适合发送Referer字段。

这里举两个例子，都不适合暴露 URL。一个是功能 URL，即有的 URL 不要登录，可以访问，就能直接完成密码重置、邮件退订等功能。另一个是内网 URL，不希望外部用户知道内网有这样的地址。Referer字段很可能把这些 URL 暴露出去。

此外，还有一种特殊情况，需要定制Referer字段。比如社交网站上，用户在对话中提到某个网址。这时，不希望暴露用户所在的原始网址，但是可以暴露社交网站的域名，让对方知道，是我贡献了你的流量。

由于上一节的原因，浏览器提供一系列手段，允许改变默认的Referer行为。

对于用户来说，可以改变浏览器本身的全局设置，也可以安装浏览器扩展。这里就不详细介绍了。

对于开发者来说，**rel="noreferrer"属性**是最简单的一种方法。<a>、<area>和<form>三个标签可以使用这个属性，一旦使用，该元素就不会发送Referer字段。

<a href="..." rel="noreferrer" target="_blank">xxx</a>
上面链接点击产生的 HTTP 请求，不会带有Referer字段。

注意，rel="noreferrer"采用的是正确的拼写。

