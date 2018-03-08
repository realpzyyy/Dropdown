# Dropdown

## 题目：实现一个Dropdown「下拉菜单」前端UI组件，样式自己发挥，不限技术框架

#### 技术栈： vue + elementUI 

#### 一句话描述：用vue局部注册组件的方式封装ElementUI 下拉框组件

效果展示：
![](https://github.com/realpzyyy/Dropdown/blob/master/img/showdemo.png)




## 使用方法：<br>

step1： 引入ElementUI 和 VUE (推荐链接CDN)，以及以封装好的组件dropDown.js<br>

step2： 准备一个VUE实例、和一个下拉框内容对象<br>

step3： 在想要加入下拉框的地方插入组件
       <drop-down :contents="dropdownComponents"></drop-down>
       
       
下拉框内容对象参数格式：<br>
```javascript
{
    "title"  : '第一个下拉框组件',      //下拉框标题       必填
    "choices": [                       //下拉框中的选项   必填  不少于一条
         '下拉框默认一',
         '下拉框默认二',      
         '下拉框默认三',
     ],
     "configs":{                      //下拉框配置参数    选填  可为空
         'type'          : '',        //   -- 按钮类型
         'size'          : '',        //   -- 按钮大小
         'trigger'       : '',        //   -- 触发下拉的行为
         'placement'     : ''         //   -- 菜单弹出位置
    }
},
```

###configs对象中各参数指南

### 参数                                                                 可选值                                   

     type                  primary / success / warning / danger / info / text	        
    
     size                               medium / small / mini	        
    
    trigger                                hover / click
     
    placement              top/top-start/top-end/bottom/bottom-start/bottom-end
