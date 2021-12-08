<template>
  <div class="login-main">
    <div class="login-box">
      <span class="border row1"></span>
      <span class="border row2"></span>
      <span class="border col1"></span>
      <span class="border col2"></span>
      <el-form ref="form" :model="form">
        <div class="login-title">登录</div>
        <div class="login-title font-red">{{message}}</div>
        <div class="login-input-size">
          <div>
            <el-input
              placeholder="请输入用户名"
              v-model="form.username"
              prefix-icon="el-icon-user">
            </el-input>
          </div>
          <div class="input-pwd-top">
            <el-input
              placeholder="请输入密码"
              v-model="form.userpwd"
              prefix-icon="el-icon-lock"
              show-password>
            </el-input>
          </div>
          <div class="btn-top">
            <div class="btn-size" @click="loginSubmit">登录</div>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getLoginUserInfo } from '@/service/loginService.js'
export default {
  name: 'LogIn',
  data () {
    return {
      form: {
        username: "",
        userpwd: ""
      },
      message: ""
    }
  },
  methods: {
    loginSubmit(){
      console.log("================loginSubmit登录==================");
      
      //请求参数
      let paramValue = {};
      paramValue.username = this.form.username
      paramValue.userpwd = this.form.userpwd

      //请求后端API
      getLoginUserInfo(paramValue).then(res => {
        console.log("getLoginUserInfo-response:" + JSON.stringify(res));

        this.message = "";

        let resData = res.data
        if(resData.success){
          this.$router.push({
            path: '/home'
          })
        }else{
          this.message = resData.code + ":" + resData.message
        }

      })
      
    }
  },
  created(){
    
  }
}
</script>

<style scoped>
.login-main {
  border: 1px solid #000;
  height: 100%;
  background-size: 100% 100%;
  display: flex;
  background-image: url('../assets/login.jpg');
  background-size: cover;
}

.login-main .login-box{
  border: 1px solid #405e8fbd;
  width: 450px;
  height: 320px;
  float: right;
  position: absolute;
  right: 160px;
  top: 200px;
  background-color: #2d456c8f;
}

.login-main .login-box .border {
  position: absolute;
  padding: 5px;
  border-style: solid;
  border-color: #405e8fbd;
}

.row1 {
  border-width: 4px 0 0 4px;
  left: -3px;
  top: -3px;
}
.row2 {
  border-width: 4px 4px 0 0;
  right: -3px;
  top: -3px;
}
.col1 {
  border-width: 0 0 4px 4px;
  bottom: -3px;
  left: -3px;
}
.col2 {
  border-width: 0 4px 4px 0;
  bottom: -3px;
  right: -3px;
}

.login-main .login-box .login-title {
  color: aliceblue;
  text-align: center;
  margin-top: 20px;
}

.login-main .login-box .font-red {
  color: rgb(196, 5, 5);
}

.login-main .login-box .login-input-size {
  width: 300px;
  padding-top: 40px;
  padding-left: 80px;
}

.login-main .login-box .login-input-size .input-pwd-top{
  padding-top: 20px;
}

.login-main .login-box .login-input-size .btn-top{
  padding-top: 20px;
}

.login-main .login-box .login-input-size .btn-top .btn-size{
  background: rgb(64, 142, 194);
  border: 1px solid rgb(64, 142, 194);
  /*
    设置行间距(两行之间的高度)
      1.不可以设置负数
      2.值可以是数字(1)、百分数(1%)、像素(1px)
  */
  line-height: 1;
  /*
    段落中的文本不换行
      1.取值
        1.1.nowrap：文本不会换行，文本会在在同一行上继续，直到遇到<br>标签为止
        1.2.pre：空白会被浏览器保留
        1.3.pre-wrap：保留空白序列，但是正常进行换行

  */
  white-space: nowrap;
  /*
    定义显示的光标形状
      1.取值
        1.1.default：默认的光标(一个小箭头)
        1.2.pointer：一只手
        1.3.wait：一只表或沙漏
        ...
  */
  cursor: pointer;
  color: #ffff;
  /*
    让div看上去像一个按钮
      1.关键字区分几个版本
        1.1.appearance：css属性最初的名字，但是全部主流浏览器都不支持
        1.2.-moz-appearance：使用该属性达到同样效果，但值支持Firefox浏览器
        1.3.-webkit-appearance：使用该属性达到同样效果，支持Safari、Chrome浏览器
      2.取值
        2.1.normal：正常呈现元素
        2.2.icon：作为一个小图片呈现元素
        2.3.window：作为一个视口呈现元素
        2.4.button：作为一个按钮呈现元素
        ...
  */
  -webkit-appearance: none;
  text-align: center;
  /*
    （轮廓）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用
  */
  outline: 0;
  /*
    在一个声明中设置所有外边距属性
      1.允许使用负值
  */
  margin: 0;
  /*
    设置文本加粗
  */
  font-weight: 500;
  /*
    在一个声明中设置所有内边距属性
      1.不允许使用负值
  */
  padding: 12px 20px;
  font-size: 14px;
  /*
    向div元素添加圆角边框
      1.如果省略bottom-left，则与top-right相同。
        如果省略bottom-right，则与top-left相同。
        如果省略top-right，则与top-left相同。
  */
  border-radius: 4px;
}

</style>
