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
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  color: #ffff;
  -webkit-appearance: none;
  text-align: center;
  outline: 0;
  margin: 0;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

</style>
