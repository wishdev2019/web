<template>
    <div class="MainBody">
        <div class="TopNav_Cont higher_header">
          <div class="HoriCent">
            <div class="Left_Userinfo">
              <a ><b class="UserLevel01 level01" id="uuaid"><i class="light"></i></b></a>
              <dl class="user_dl">
                <dt id="user_head"><a class="show" ></a></dt>
                <dd>
                  <div class="UserName">
                    <label>
                      上午好，君哥发财
                    </label>
                  </div>

                  <div class="UserIP">
                    <h4>上次登录</h4>
                    <div class="logintime">2019-05-20 19:00:51</div>
                    <div class="loginaddr">湖南省湘潭市</div>
                  </div>
                </dd>
              </dl>
              <!--安全等级、余额、充值提现-->
              <dl class="user_dl2">
                <dt>
                <div class="centdiv">
                  <div class="SecurityLevel">
                    <label class="SL_name">安全等级：</label>
                    <a href="/?controller=user&amp;action=usersafety"><span class="SL_icon" id="uusaid"><em class="em_width" style="width: 40%;"></em></span></a>
                  </div>
                  <div class="BalanceCont">
                    <div class="fl">
                      <label>可用余额：</label>
                      <span class="bal" id="cpmoney">0.8348</span></div>
                  </div>
                </div>
                <!--余额详情弹出层-->

                </dt>

              </dl>
            </div>
            <div class="Rihgt_MenuBox">
              <div class="indexLogo">
                <span><div class="LogoIcon"></div></span>
              </div>
              <div class="MenuBox">
                <ul>
                  <li class="li_1" @click="handle">充值</li>
                  <li class="li_2" @click="handle2">提款</li>
                  <li class="li_3" @click="handle3">修改密码</li>
                  <li class="li_4" @click="handle4">我的消息</li>
                  <li class="li_5" @click="handle5">修改昵称</li>
                  <li class="li_6" @click="handle6">投注记录</li>
                </ul>
              </div>
            </div>
            <div class="index_banner"></div>
          </div>

          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">充值</el-menu-item>
            <el-menu-item index="2">提款</el-menu-item>
            <el-menu-item index="3">修改密码</el-menu-item>
            <el-menu-item index="4">我的消息</el-menu-item>
            <el-menu-item index="5">修改昵称</el-menu-item>
            <el-menu-item index="6">投注记录</el-menu-item>
          </el-menu>
        </div>
        <invest v-if="show" @close="close"></invest>
        <draw v-if="show2" @close="close2"></draw>
        <cipher v-if="show3" @close="close3"></cipher>
        <message v-if="show4" @close="close4"></message>
        <petname v-if="show5" @close="close5"></petname>
        <record v-if="show6" @close="close6"></record>
    </div>

</template>
<script>
import invest from './invest.vue'
import draw from './draw.vue'
import cipher from './cipher.vue'
import message from './message.vue'
import petname from './petname.vue'
import record from './record.vue'
export default {
    components:{
        invest,
        draw,
        cipher,
        message,
        petname,
        record

    },
      data() {
        return {
          show:false,
          show2:false,
          show3:false,
          show4:false,
          show5:false,
          show6:false,

          value: '',
          activeIndex: '1',
          activeIndex2: '1'
        }
    },
    methods:{
        handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      close(state){
          this.show=state
      },
      close2(state){
          this.show2=state
      },
      close3(state){
          this.show3=state
      },
      
      close4(state){
          this.show4=state
      },
      close5(state){
          this.show5=state
      },
      close6(state){
          this.show6=state
      },
      
      handle(){
          console.log(1111)
          this.show=true
      },
      handle2(){
          console.log(1111)
          this.show2=true
      },
      handle3(){
          console.log(1111)
          this.show3=true
      },
      handle4(){
          console.log(1111)
          this.show4=true
      },
      handle5(){
          console.log(1111)
          this.show5=true
      },
      handle6(){
          console.log(1111)
          this.show6=true
      }
    }
}
</script>
<style>
  .MainBody {
    width: 100%;
    height: auto;
    float: left;
    background: url(../../../static/images/nw_body_bg.jpg) no-repeat top center;
  }
.TopNav_Cont {
    width:100%;
    height: 330px;
    padding: 0;
    background: #148b8c url(../../../static/images/nw_topmenu_bg.jpg) no-repeat top center;
    padding-top: 17px;
    float: left;
    position: relative;
}
  .el-menu.el-menu--horizontal{display: none;}
  .TopNav_Cont .HoriCent{ width:1050px; height:330px; margin:0 auto; position:relative;}
  .TopNav_Cont.higher_header{ height:330px; padding:0; /*margin-bottom:40px;*/}
  .index_banner{ width:718px; height:250px; position:absolute; bottom:0px; left:292px; background:#028a8c; z-index:1; /*box-shadow:0 -3px 10px rgba(0,0,0,0.4);*/}


  .TopNav_Cont.Slot_header{height:80px;}
  .TopNav_Cont.Slot_header .HoriCent{height:80px;}
  .TopNav_Cont .Left_Userinfo{ width:282px; float:left; background:#028a8c url(../../../static/images/nw_topmenu_userbg.jpg) no-repeat left top; height:250px; position:absolute; bottom:0px; z-index:2;}
  .Left_Userinfo dl.user_dl{ width:230px; margin:30px auto auto; overflow:hidden; position:relative; z-index:2;}
  .Left_Userinfo dl.user_dl dt{ width:80px; height:80px; margin-top:5px; float:left; border-radius:50px; overflow:hidden; float:left; background:url(../../../static/images/nw_topmenu_userpic.png) no-repeat center; background-size: contain;}
  .Left_Userinfo dl.user_dl dt img{ width:100%;}
  .Left_Userinfo dl.user_dl dd{ width:100px; height:95px; float:left; font-size:14px; padding:5px 0 0 10px;float:left; margin-left:10px;}
  .Left_Userinfo dl.user_dl dd label{ float:left; height:30px; line-height:30px; color:#fff; font-size:12px;}
  .Left_Userinfo dl.user_dl dd .UserIP{ text-align:left; font-size:12px; color:#efefef;}
  .Left_Userinfo dl.user_dl dd .UserIP h4{ font-size:14px; color:#58a5a6;}
  .Left_Userinfo dl.user_dl dd .UserIP .logintime{ width:100%;}
  .Left_Userinfo dl.user_dl dd .UserIP .loginaddr{ width:100%;}
  dl.user_dl2{ width:100%; border-top:1px solid #1a9597;margin: 0 auto; position:absolute; top:152px;}
  dl.user_dl2 > dt .centdiv{ width:240px; margin:10px auto; overflow:hidden; position:relative;}
  dl.user_dl2 > dt label{float:left; height:30px; line-height:30px; color:#fff; font-size:12px;}
  dl.user_dl2 > dd{ width:100%; height:70px; background:#008284; clear:both; text-align:center; visibility:hidden;}
  dl.user_dl2 > dd a{ display:inline-block; width:110px; height:28px; line-height:28px; text-align:center; margin:20px 5px; border:1px solid #90b4b5; color:#eee; padding:0; border-radius:3px;}
  dl.user_dl2 > dd a:hover{ background:#eee; color:#333;border:1px solid #eee;}
  .SecurityLevel{width:100%;  float:left;}
  .BalanceCont{width:100%; float:left;}
  .SL_icon{ width:90px; height:20px; background:url(../../../static/images/nw_topmenu_userstar.png) no-repeat left top; float:left; margin-top:6px;}
  .SL_icon em{ height:20px; background:url(../../../static/images/nw_topmenu_userstar.png) no-repeat left bottom; display:block; float:left; }
  .BalanceCont .fl{ float:left;}
  .BalanceCont .fl .bal{ font-size:14px; color:#fff; float:left; line-height:30px;}

  .TopNav_Cont .Rihgt_MenuBox{ width:100%; float:right; position: relative; margin-top:20px;}
  .TopNav_Cont .Rihgt_MenuBox .indexLogo{ width:190px; height:60px; position:absolute; top:-5px; left:0;}
  .TopNav_Cont .Rihgt_MenuBox .indexLogo .LogoIcon{ background:url(../../../static/images/nw_logo.png) no-repeat; width:176px; height:45px; background-size:100%; margin:5px auto auto 0;}
  .TopNav_Cont .Rihgt_MenuBox .MenuBox{ width:810px; float:right; margin-top:17px; text-align:right; margin-right:10px;}
  .TopNav_Cont .Rihgt_MenuBox .MenuBox ul li{ /*float:left;*/ display: inline-block; text-align:center; width:15%; position:relative;color: #fff;line-height: 20px;height: 35px;
    cursor: pointer;}
  .TopNav_Cont .Rihgt_MenuBox .MenuBox ul li:hover{ color:#ff0;}
  .index_banner{ width:718px; height:250px; position:absolute; bottom:0px; left:292px; background:url(../../../static/images/nw_hd_index_113.jpg) no-repeat; z-index:1;}




</style>

