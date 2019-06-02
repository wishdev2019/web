<template>
  <div class="Footer_Cont">

    <div class="Footer_Copyright">
      <div class="copyicon"></div>
      <div class="copytxt">
        <p class="t1">菲律宾政府卡格扬经济特区牌照编号：0144</p>
        <p class="t2">©2016 如意娱乐 . All Right Reserved</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {

      data() {
      return {

      }
    }
}
</script>
<style>
  .Footer_Cont{ width:100%; float:left;}
  .Footer_Copyright{ width:100%; background:#222 url(../../../static/images/nw_footer_bg.jpg) no-repeat center; height:160px; padding-top:20px}
  .Footer_Copyright .copyicon{ width:1058px; background:url(../../../static/images/nw_footer_copyicon.png) no-repeat; background-size:100%; height:38px; margin:20px auto auto; overflow:hidden;}
  .copytxt{ width:100%; text-align:center; color:#888; line-height:20px; padding:0;}
  .copytxt .t1{ width:100%; font-size:12px;}
  .copytxt .t2{ width:100%; font-size:13px; text-transform:uppercase;}


</style>

