# nasa

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## =================================================
## https://router.vuejs.org/zh/
## -------------------------一.项目生成----------------------------
##  下载nodejs安装
https://nodejs.org/en/
##  cmd 检查安装是否完成 
# node -v
npm -v
##  使用淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org
##  初始化项目-全局安装vue-cli
cnpm install vue-cli -g
##  检查是否安装成功
vue list
##  新建项目
vue init webpack 项目名
##  选项依次 y-n-n-n
Install vue-router ==> 是否要安装 vue-router，项目中肯定要使用到 所以Y 回车；
Use ESLint to lint your code ==> 是否需要 js 语法检测 目前我们不需要 所以 n 回车；
Set up unit tests ==> 是否安装 单元测试工具 目前我们不需要 所以 n 回车；
Setup e2e tests with Nightwatch ==> 是否需要 端到端测试工具 目前我们不需要 所以 n 回车；
##  安装依赖包
cnpm install
##  运行项目
cnpm run dev
## -------------------------二.目录结构----------------------------
## build:构建脚本目录
##  1）build.js             ==>  生产环境构建脚本；
##  2）check-versions.js    ==>  检查npm，node.js版本；
##  3）utils.js             ==>  构建相关工具方法；
##  4）vue-loader.conf.js   ==>  配置了css加载器以及编译css之后自动添加前缀；
##  5）webpack.base.conf.js ==>  webpack基本配置；
##  6）webpack.dev.conf.js  ==>  webpack开发环境配置；
##  7）webpack.prod.conf.js ==>  webpack生产环境配置；
## config:项目配置
##  1）dev.env.js      ==>  开发环境变量；
##  2）index.js        ==>  项目配置文件；
##  3）prod.env.js     ==>  生产环境变量；
## node_modules:npm 加载的项目依赖模块
## src:这里是我们要开发的目录，基本上要做的事情都在这个目录里
##  1）assets：资源目录，放置一些图片或者公共js、公共css。这里的资源会被webpack构建；
##  2）components：组件目录，我们写的组件就放在这个目录里面；
##  3）router：前端路由，我们需要配置的路由路径写在index.js里面；
##  4）App.vue：根组件；
##  5）main.js：入口js文件；
## static:静态资源目录，如图片、字体等。不会被webpack构建
## index.html:首页入口文件，可以添加一些 meta 信息等
## package.json:npm包配置文件，定义了项目的npm脚本，依赖包等信息
## README.md:项目的说明文档，markdown 格式
## .xxxx文件:这些是一些配置文件，包括语法配置，git配置等
## =================================================
## -------------------------三.集成element-ui----------------------------
## 安装Element依赖
##  1）cnpm i element-ui -S
## main.js中引用Element类库
##  import ElementUI from 'element-ui'
##  import 'element-ui/lib/theme-chalk/index.css'
##  Vue.use(ElementUI)
## 从Element官网复制示例代码
##  cnpm install --save element-ui
##  Element官网 https://element.eleme.cn
## 运行项目测试即可
## =================================================
## -------------------------四.开发登录页----------------------------
## =================================================
## -------------------------五.集成echarts----------------------------
## 安装vue-echarts
##  1）npm install echarts@4.9.0
##  2）cnpm fund
## main.js 引入echarts
##  1）import '../node_modules/echarts/map/js/world.js'
## 安装composition-api
##  3）npm install --save @vue/composition-api
## =================================================
## -------------------------六.vue整合axios----------------------------
## ajax和axios、fetch
##  1）ajax：是Jquery Ajax
##  2）fetch：是存js的
##     https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
##  3）axios：基于promise的HTTP库
##     https://www.kancloud.cn/yunye/axios/234845
## axios是什么
##  1）是一个基于promise的http库，可以用在浏览器和node中
## axios的作用
##  1）axios主要是用于向后台发起请求的
## 安装axios
##  1）npm install axios
## vue整合axios
##  1）编写封装axios实例文件new-axios.js
##  2）main.js引入编写好的new-axios.js
##     import axios from '@/axios/new-axios.js'
##     Vue.prototype.axios = axios
##  3）在画面正常调取方法即可
##     this.axios.axiosSpring.get('/api/test').then(res=>{
##          console.log("11111111:" + res);
##     })
## =================================================
## -------------------------六.vue联通后端(前后不分离)-----------------------
##  1）封装localStorage使用storage.js
##     对localStorage做存储，获取，删除操作
##  2）在main中全局注册下
##     import {setStore, getStore, removeStore} from '@/storage/storage.js'
##     Vue.prototype.setStore = setStore
##     Vue.prototype.getStore = getStore
##     Vue.prototype.removeStore = removeStore
##  3）封装axios
##     定义getRequest等调用的方法
##  4）封装service类
##     按照模块编写请求后端的servie方法
##  5）前端正式调用
## =================================================
## -------------------------其他-----------------------
##  1）Cookie
##     cookie指的时浏览器里能永久存储的一种数据，是浏览器的一种数据存储功能
##     cookie由服务器生成，发给浏览器，浏览器把cookie以K-V形式保存在某目录文本文件中。
##     下一次请求同一网址时会把该cookie发给服务器。浏览器存在一些限制确保cookie不会被恶意使用
##     所以不会占用太多磁盘空间，所以每个域的cookie数量是有限的
##     会话cookie，将cookei存储在浏览器中，生命周期与浏览器一致，浏览器关闭，cookie消失
##     持久cookie，将cookei存储在营盘中，生命周期时我们设置cookei时，设置时间
##  2）Session
##     session是会话。服务器要知道发送请求给自己的是谁。为了区分，服务器就需要给客户端分配不同的标识。
##     然后客户端给服务器请求时，就要带上这个身份标识，服务器就知道这个请求来自于谁。
##     客户端如何保存这个标识，可以有多种方式。
##     
##     2.1）不使用session做验证的原因
##          每次认证用户发起请求时，服务器需要去创建一个记录来存储信息。当越来越多的用户发请求时，内存的开销也会不断增加。
##          由于sessions 存放在服务器内存中，伴随而来的是可扩展性问题。当我们想要增加服务器来解决负载问题时，session 里的关键性信息会限制我们的扩展
##          当我们扩展应用程序，让数据能够从不同设备上访问时，跨域资源的共享会是一个让人头疼的问题
##  3）Cookie与Session区别
##     session保存在服务端；cookie保存在客户端；session安全性比cookie高

