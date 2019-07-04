<template>
    <div class="login_bgsrcoll">
    <div class="login_masklayer">
      <div class="login_logo"></div>
      <div class="login_logoform">
        <ul>
          <li><label  class="label_icon01">登录名：</label><input  v-model="request_data.loginname" name="userName" id="userName" type="text" value="" class="txt01" placeholder="用户名" ></li>
          <li><label  class="label_icon02">密码：</label><input v-model="passwd" name="password" id="password" type="password" value="" class="txt01" placeholder="密  码"></li>
          <li class="nbr"><div class="yzm_div"><label class="label_icon03">验证码：</label><input  v-model="verifycode" name="code" id="code" type="text" value="" class="txt01" placeholder="验证码"></div>
              <div @click="refreshCode">
                  <s-identify :identifyCode="identifyCode"></s-identify>
              </div>
          </li>
          <li class="nbr">
    <!--            <a @click="Login" class="login_btn">登录</a>-->
            <el-button @click="Login" class="login_btn" :loading="loginLoading">登陆</el-button>
          </li>
          <li class="nbr flex">
            <el-button  size="mini" @click="Register">注册</el-button>
              <!--       <el-button size="mini" @click="ResetPasswd">忘记密码？</el-button>-->
                  </li>
                </ul>
              </div>
              <div class="login_copyight">
                <p class="p1">- 如意娱乐 -</p>
                <p class="p2">- 为您的资金安全保驾护航 -</p>
              </div>

            </div>
                <el-dialog title="注册" width="25%" top="30vh" :visible.sync="RegisterFlag" :close-on-click-modal="false">
                    <el-form :model="RegisterForm" class="RegisterFlag_in" status-icon label-width="100px" :rules="RegisterFormRules" ref="RegisterForm" label-position='left' size="mini">
                        <el-form-item label="用户名" prop="name">
                            <el-input v-model="RegisterForm.name" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="passwd">
                            <el-input v-model="RegisterForm.passwd" placeholder="请输入密码" show-password></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="RegisterFlag = false">取消</el-button>
                        <el-button type="primary" @click.native="Register" :loading="RegisterLoading">提交</el-button>
                    </div>
                </el-dialog>
            </div>

        </template>

        <script>
          import { login,manageadd_query } from '@/api/request/request'
          import SIdentify from '../Ident'

          export default {
              components: {
                  SIdentify
              },
            data() {
              return {
                  RegisterForm:{},
                  RegisterFlag:false,
                  RegisterFormRules:{},
                  RegisterLoading:false,
                msg: 'Welcome to Your Vue.js App',
                request_data : {
                  loginname : "",
                  passwd : ""
                },
                passwd : "",
                loginLoading: false,
                  identifyCodes: '1234567890',
                  identifyCode: '',
                  verifycode:''
              };
            },
            methods :{
                Register(){
                    this.RegisterFlag = true
                },
              Login(){
                if(this.verifycode !== this.identifyCode){
                    this.$message.error("验证码错误,请重新输入!")
                    this.refreshCode()
                    return
                }
                this.loginLoading = true
                login({
                  data : {
                    loginname : this.request_data.loginname,
                    passwd : this.$md5(this.passwd)
                  },
                  callback: (res) => {
                    localStorage.authorization = res.headers.authorization
                    this.$router.push({path:'/home'})
                    this.loginLoading = false
                  },
                  errorcallback: () => {
                    this.loginLoading = false
                      this.refreshCode()
                  }
                })
              },
                randomNum(min, max) {
                    return Math.floor(Math.random() * (max - min) + min)
                },
                // 切换验证码
                refreshCode() {
                    this.identifyCode = ''
                    this.makeCode(this.identifyCodes, 4)
                },
                // 生成四位随机验证码
                makeCode(o, l) {
                    for (let i = 0; i < l; i++) {
                        this.identifyCode += this.identifyCodes[
                            this.randomNum(0, this.identifyCodes.length)
                            ]
                    }
                    console.log(this.identifyCode)
                }
            },
              mounted() {
                  localStorage.clear()
                  this.refreshCode()
              },
          };
        </script>

        <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .login_bgsrcoll{background: #000 url(../../../static/images/topbg.jpg) no-repeat;background-size: 100%;}
  .login_masklayer{background:#000 url(../../../static/images/timg.jpg) no-repeat center;background-size: cover; width:100%; height:100%; position: absolute; z-index:20;}
  .login_masklayer.tspeed{ height:auto;}
  .login_masklayer_pt{background:rgba(0,0,0,0); width:100%; height:100%; position: absolute; z-index:20;}
  .login_masklayer_pt .login_logo{width:160px; height:50px; background:url(../../../static/images/nw_logo.png) no-repeat; background-size:100%; position:absolute;top:20%;left:50%;margin-left:-135px; opacity:0.8;}
  .login_masklayer_pt .login_logo h1{ width:150px; border-left:1px solid #ccc; height:22px; line-height:22px; position:absolute;right:-175px;top:4px; font-size:20px; color:#f2e400; padding-left:10px;}
  .login_logo{ width:210px; height:50px; background:url(../../../static/images/nw_logo.png) no-repeat; background-size:100%; position:absolute;top:15%;left:50%;margin-left:-105px; opacity:0.8;}
 .login_logoform{ width:270px; margin:0 auto;position:absolute;top:30%;left:50%;margin-left:-135px;}
  .login_logoform ul {}
  .login_logoform ul li{ width:268px; border:1px solid rgba(255,255,255,0.5); height:33px; margin:10px auto; float:left;}
  .login_logoform ul li:hover{ border:1px solid #18a9a9;}
  .login_logoform ul li.nbr{ width:270px; border:none; height:35px; margin:10px auto;}
  .login_logoform ul li.nbr:hover{ border:none;}
  .login_logoform ul li label{ width:16px; height:21px; display:block; float:left; margin:7px 0 0 7px; text-indent:-9999px; }
  .login_logoform ul li .label_icon01{ background:url(../../../static/images/nw_icon01.png) no-repeat;background-size:100%;}
  .login_logoform ul li .label_icon02{background:url(../../../static/images/nw_icon02.png) no-repeat;background-size:100%;}
  .login_logoform ul li .label_icon03{background:url(../../../static/images/nw_icon03.png) no-repeat;background-size:100%;}
  .login_logoform ul li input{ background:none; color:#eee; border:none; height:33px; line-height:33px; padding-left:10px; float:left; width:230px; font-size:14px;}
  .login_logoform ul li .yzm_div{ width:135px; border:1px solid  rgba(255,255,255,0.5); height:33px; float:left;}
  .login_logoform ul li .yzm_div input{ width:100px;}
  .login_logoform ul li .yzm_div:hover{ border:1px solid #18a9a9;}
  .login_logoform ul li .yzm{ float:right; border:1px solid  rgba(255,255,255,0.5); width:112px; height:33px; overflow:hidden; cursor:pointer;}
  .login_logoform ul li .yzm img{ width:112px; height:33px;}
  .login_logoform ul li .login_btn{ width:100%; height:35px; background:#18a9a9; background-size:200% 520%; color:#fff; text-align: center; display:block;transition: all .4s ease-in-out; -moz-transition: all .4s ease-in-out; -webkit-transition: all .4s ease-in-out; -o-transition: all .4s ease-in-out; -ms-transition: all .4s ease-in-out}
  .login_logoform ul li .login_btn:hover{ background:#118f8f url(../../../static/images/nw_topmenu_bg.jpg)  no-repeat; background-size:100% 220%;transition: all .4s ease-in-out; -moz-transition: all .4s ease-in-out; -webkit-transition: all .4s ease-in-out; -o-transition: all .4s ease-in-out; -ms-transition: all .4s ease-in-out}
  .login_logoform ul li a.forgetkey,.login_logoform ul li a.domain_test,.login_logoform ul li a.domain_speed{ width:70px; text-align:center;height:18px; line-height:18px; color:#ddd; margin-top:-5px; display:block;font-size:12px; border:1px solid #333; border-radius:3px;}
  .login_logoform ul li a.forgetkey{float:left;}
  .login_logoform ul li a.domain_test{ float:left; margin-left:30px;}
  /*.login_logoform ul li a.domain_speed{ float:right;}*/
  /*.login_logoform ul li a.forgetkey:hover,.login_logoform ul li a.domain_test:hover,.login_logoform ul li a.domain_speed:hover{ color:#b79f19; text-decoration:none; border:1px solid #6A5B09;}*/

  .login_copyight { width:100%; text-align:center; line-height:30px; color:#bbb; text-transform: none; position:absolute; bottom:10%;}
  .login_copyight .p1{ font-size:16px;}
  .login_copyight .p2{ font-size:13px;}
  .login_copyight a{ color:#aaa;}
  .login_copyight a:hover{ color:#b79f19;}

  /**/
  .login_detect .login_logo{ top:25%;}
  .login_detect .login_logoform{ top:40%;}
  .login_detect .login_logoform ul li .login_btn{ background:none; border:2px solid #18a9a9;transition: all .2s ease-in-out; -moz-transition: all .2s ease-in-out; -webkit-transition: all .2s ease-in-out; -o-transition: all .2s ease-in-out; -ms-transition: all .2s ease-in-out}
  .login_detect .login_logoform ul li .login_btn:hover{ background:none; border:2px solid #39d8d8; border-radius:30px; color:#39d8d8}
  .flex{display: flex; justify-content: space-between;}
    .RegisterFlag .el-dialog{width:30%;}
  .el-button:hover{color: #18a9a9;
      border-color: #18a9a9;
      background-color: #f7f9f9;}
  .el-button--primary{background:#18a9a9; border-color: #18a9a9; color: #fff;}
  .el-button--primary:hover{background:#18c5c5; border-color: #18c5c5; color: #fff;}
</style>
