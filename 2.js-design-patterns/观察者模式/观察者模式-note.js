// 观察者模式.js


本质上就是一个函数内执行其他一堆函数；可以随时添加和删除；

一个subject(目标对象)对应(注册)多个observer(观察者),当subject状态改变时，通知其的observer执行；

实现方式：

1、 自定义类来实现，可以参考设计模式上的内容；
2、 jq的内部类-$.Callbacks();(工厂模式)来创建对象；