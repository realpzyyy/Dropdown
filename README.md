# Dropdown

## 题目：实现一个Dropdown「下拉菜单」前端UI组件，样式自己发挥，不限技术框架

#### 技术栈： vue + elementUI 

#### 一句话描述：用vue局部注册组件的方式封装ElementUI 下拉框组件




## 使用方法：<br>

step1： 引入ElementUI 和 VUE (推荐链接CDN)，以及以封装好的组件dropDown.js<br>

step2： 准备一个VUE实例、和一个下拉框内容对象<br>

step3： 在想要加入下拉框的地方插入组件
       <drop-down :contents="dropdownComponents"></drop-down>
