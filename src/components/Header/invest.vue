<template>
    <div class="invest" v-if="show">
        <van-tabs type="card">
            <van-tab title="网银汇款">
                <div class="list-div"><!--消息框代码开始--> 
					<div id="point" class="remind_div">
					    <span class="remind_txt">
					        <em class="nw_remind_icon"></em>
					        平台填写金额应当与网银汇款金额完全一致，否则将无法即时到帐！    
					    </span>
					    <a href="/?controller=help&amp;action=main&amp;tag=howtosave" target="_blank" class="a_remind_help">
					        <em class="help_icon"></em>
					        <span>点击查看存款帮助</span>
					    </a>
					</div>
					<form action="index.php?tag=miao" method="post" name="drawform" id="drawform" onsubmit="return checkForm(this)">					    
					    <div class="fh_form_div">
					      <ul>
					        <li>
					          <label>汇出银行：</label>
					                    
					                    <select name="CashBankName" id="CashBankName" class="select100">
					                    <option value="1" selected="selected">中国工商银行</option>
					                    <option value="2">中国建设银行</option>
					                    <option value="3">农业银行</option>
					                    <option value="4">招商银行</option>
					                    <option value="7">中国银行</option>
					                    <option value="8">交通银行</option>
					                    <option value="9">邮政储蓄</option>
					                    <option value="10">中信银行</option>
					                    <option value="11">光大银行</option>
					                    <option value="12">民生银行</option>
					                    <option value="14">深圳发展银行</option>
					                    <option value="15">中国人民银行</option>
					                    <option value="16">兴业银行</option>
					                    <option value="17">华夏银行</option>
					                    <option value="18">北京银行</option>
					                    <option value="20">浦东发展银行</option>
					                    <option value="22">上海农村商业银行</option>
					                    <option value="23">平安银行</option>
					                    <option value="27">广州市商业银行</option>
					                    <option value="28">广州市农村信用社</option>
					                    <option value="31">深圳市农村商业银行</option>
					                    <option value="32">顺德农村信用合作社</option>
					                </select> 
					          </li>					          
					          
					          <li>
					            <label>存款人姓名：</label>
					            <input type="text" name="kname" value="" id="kname" class="txt01"><span class="red">&nbsp;&nbsp;必须同付款方姓名一致</span>
					          </li>
					          
					          <li>
					              <label>充值金额：</label>
					                <input type="hidden" name="alertmin" id="alertmin" value="10">
					                <input type="hidden" name="province" id="province" value="2#上海">
					                <input type="hidden" name="city" id="city" value="140#上海">
					                <input type="hidden" name="PayWay" id="PayWay" value="10">
					                <input type="text" name="amount" id="amount" size="20" autocomplete="off" class="txt01">
					                <span class="red">(单笔充值限额：最低 <span id="loadmin">10</span>,最高 <span id="loadmax">50000</span>)
					                    <input type="hidden" name="alertmin" id="alertmin" value="1">
					                </span>
					          </li>
					          <li class="last">
					              <label>&nbsp;</label>
					              <div class="btn2_div03" id="tonext">
					                                      <input type="submit" name="submit" value="下一步 " class="formNext fl">
					                        <input name="" type="button" value="返回" class="formBack fr" onclick="history.back()">
					                                  </div>
					          </li>
					          </ul>
					        </div>
					
					</form>
				</div>
            </van-tab>
            <van-tab title="微信扫码">
                <div class="list-div"><!--消息框代码开始--> 
					<div id="point" class="remind_div">
					    <span class="remind_txt">
					        <em class="nw_remind_icon"></em>
					        平台填写金额应当与网银汇款金额完全一致，否则将无法即时到帐！    
					    </span>
					    <a href="/?controller=help&amp;action=main&amp;tag=howtosave" target="_blank" class="a_remind_help">
					        <em class="help_icon"></em>
					        <span>点击查看存款帮助</span>
					    </a>
					</div>
					<form action="index.php?tag=wxper" method="post" name="drawform" id="drawform" onsubmit="return checkForm(this)">
					    <div class="fh_form_div">
					        <ul>
					            <li>
				                <label>充值银行：</label>
				                <div class="bankicon_div">
				                                    <label for="wxper">
				                        <input type="radio" name="bankradio" value="wxper" id="wxper" checked="checked">
                                        <div class="bankicon_pic"></div>
				                    </label>
				                                </div>
				                <font class="red">充值处理时间为00:00 至23:59</font>
				            </li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
				        <li>
				            <label>充值金额：</label>
				            <input type="text" name="amount" id="amount" size="20" autocomplete="off" class="txt01">
				            <input type="hidden" name="alertmin" id="alertmin" value="100">
				            <span class="red">
				                单笔充值限额：最低 <span id="loadmin">100</span>,最高 <span id="loadmax">10000</span>
				            </span>
				        </li>               
				        <li class="last">
				            <label>&nbsp;</label>
				            <div class="btn2_div03" id="tonext">
				                                      <input type="submit" name="submit" value="下一步" class="formNext fl">
				                      <input name="" type="button" value="返回" class="formBack fr" onclick="history.back()">
				                            </div>
				        </li>
				        
				     </ul>
				    </div>
				    </form>
                </div>
            </van-tab>
            <van-tab title="支付宝">
                <div class="list-div"><!--消息框代码开始--> 
					<div id="point" class="remind_div">
					    <span class="remind_txt">
					        <em class="nw_remind_icon"></em>
					        平台填写金额应当与网银汇款金额完全一致，否则将无法即时到帐！    
					    </span>
					    <a href="/?controller=help&amp;action=main&amp;tag=howtosave" target="_blank" class="a_remind_help">
					        <em class="help_icon"></em>
					        <span>点击查看存款帮助</span>
					    </a>
					</div>
					<form action="index.php?tag=wxper" method="post" name="drawform" id="drawform" onsubmit="return checkForm(this)">
					    <div class="fh_form_div">
					        <ul>
          
                                <li>
                                <label>存款人姓名：</label>
                                <input type="text" name="kname" value="" id="kname" class="txt01"><span class="red">&nbsp;&nbsp;必须同付款方姓名一致</span>
                                </li>
                                <li>
                                <label>充值金额：</label>
                                                            <input type="hidden" name="bankradio" value="miao" id="miao">
                                                        <input type="hidden" name="PayWay" id="PayWay" value="10">
                                        <input type="hidden" name="alertmin" id="alertmin" value="10">
                                        <input type="hidden" name="province" id="province" value="2#上海">
                                        <input type="hidden" name="city" id="city" value="140#上海">
                                        <input type="hidden" name="CashBankName" id="CashBankName" value="92">
                                        <input type="text" name="amount" id="amount" size="20" autocomplete="off" class="txt01">
                                <span class="red">为了您快速到账,请不要提交整数金额。&nbsp;&nbsp;(单笔充值限额：最低 <span id="loadmin">10</span>,最高 <span id="loadmax">49999</span>)</span></li>
                                <li>
                                    <label>温馨提示：</label>
                                    <span class="red">
                                        到账时间请选2小时内到账
                                    </span>
                                </li>
                                <li class="last">
                                <label>&nbsp;</label>
                                <div class="btn2_div03" id="tonext">
                                                            <input type="submit" name="submit" value="下一步" class="formNext fl">
                                        <input name="" type="button" value="返回" class="formBack fr" onclick="history.back()">
                                            </div>
                                </li>
                            </ul>
				    </div>
				    </form>
                </div>
            </van-tab>
        </van-tabs>
        <button class="close" @click="close">X</button>
    </div>
</template>
<script>
	export default {
		data() {
				return {
					show: true
				}
			},
			methods: {
				close() {
					this.show = false
					this.$emit('close', false)
				}
			}
	}
</script>
<style>
	.invest {
		width: 1100px;
		height: 335px;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -550px;
		margin-top: -250px;
		background: #fff;
		z-index: 1000;
		padding-top: 20px;
        box-shadow: 2px 2px 2px #333;
	}
	.invest .close{
        position:absolute;
        width:20px;
        height:20px;
        line-height: 20px;
        text-align: center;
        right: -10px;
        top: -10px;
        padding:0;
        border:1px solid #333;
        border-radius: 50%;
        background: #fff;
        font-size: 12px;
        cursor: pointer;
    }
	.van-tabs__nav--card {
		border: 1px solid#148b8c;
	}
	
	.van-tabs__nav--card .van-tab {
		color: #148b8c;
		border-right: 1px solid#148b8c;
	}
	
	.van-tabs__nav--card .van-tab.van-tab--active {
		background-color: #148b8c;
	}
    .red {
        color: #E45E00;
    }
    .list-div { width: 98%; margin: 10px auto; position: relative }
    .remind_div { width: 100%; height: 30px; line-height: 30px; margin: 20px auto auto auto; border-bottom: 1px dashed #ddd; padding-bottom: 10px; font-size: 12px;}
    .remind_div .nw_remind_icon { width: 30px; height: 30px; background: url(../../../static/images/nw_remind.png) no-repeat; background-size: 100%; display: inline-block; float: left; margin-right: 10px; }
    .remind_div .remind_txt { height: 30px; line-height: 30px; padding-left: 10px; float: left; margin-left: 20px; color: #148b8c; }
    .a_remind_help { float: right; margin-right: 20px; border: 1px solid #148b8c; color: #148b8c; height: 20px; line-height: 20px; padding: 2px 5px; border-radius: 3px; }
    .a_remind_help:hover { text-decoration: none; background: #148b8c; border: 1px solid #148b8c; color: #fff; }
    .a_remind_help span { cursor: pointer; }
    .bankicon_div { width: 198px; float: left; height: 30px; line-height: 30px; border-right: 1px dashed #dfdfdf; }
    .fh_form_div ul li .bankicon_div label { width: auto; padding: 0; cursor: pointer; }
    .fh_form_div ul li .bankicon_div label img { height: 30px; margin-left: 5px; }
    .bankicon_div input[type="radio"] { float: left; margin-top: 8px; }
    .bankicon_pic { float: left; width:107px; height:30px; background: url(../../../static/images/wxper.jpg) no-repeat center; background-size: contain;}
    .fh_form_div ul li .red { padding-left: 10px; font-size: 12px; float:left;}
    .fh_form_div { width: 100%; }
    .fh_form_div ul { width: 100%; margin: 20px auto auto; overflow: hidden; }
    .fh_form_div ul li { width: 100%; line-height: 30px; margin-top: 15px; float: left; position: relative; }
    .fh_form_div ul li.last { border-top: 1px solid #eee; padding-top: 15px; }
    .fh_form_div ul li label { width: 40%; display: inline-block; padding-right: 10px; height: 30px; line-height: 30px; text-align: right; color: #666; float: left; }
    .fh_form_div ul li .explain{ float:left;}
    .fh_form_div ul li input[type="text"] { /*width:218px;*/ width: 195px; float:left; padding-left: 5px; height: 30px; line-height: 30px; background: #f8f8f8; border: 1px solid #ddd; outline: none; }
    .fh_form_div ul li .read_info { float: left; border-bottom: 1px dashed #ddd; width: 200px; height: 30px; line-height: 30px; }
    .fh_form_div ul li .read_info2 { float: left; border: 1px dashed #ddd; background: #f0f0f0; border-radius: 3px; padding-left: 5px; width: 195px; height: 30px; line-height: 30px; }
    .fh_form_div ul li .read_info2.count { color: #E45E00; }
    .fh_form_div ul li input.fh_money { float: left; width: 195px; padding-left: 5px; height: 30px; line-height: 30px; margin: 0; }
    .fh_form_div ul li input.fh_password { float: left; width: 195px; padding-left: 5px; height: 30px; line-height: 30px; margin: 0; }
    .fh_form_div ul li select { float: left; width: 200px; height: 30px; line-height: 30px; margin: 0; margin-right: 10px; }
    .fh_form_div ul li .btn2_div03 { float: left; width: 200px; }
    .fh_form_div ul li .buttonnormal, .fh_form_div ul li .formNext, .fh_form_div ul li .formBack, .fh_form_div ul li .formSubmit, .fh_form_div ul li .squxiao { background: #148b8c; border: 1px solid #148b8c; border-radius: 3px; width: 95px; height: 30px; line-height: 28px; margin: 0; outline: none; color: #fff; cursor: pointer; overflow: hidden; }
    .fh_form_div ul li .full { width: 202px; }
    .fh_form_div ul li .fl { float: left; }
    .fh_form_div ul li .fr { float: right; }
    .fh_form_div ul li .resend { position: absolute; top: 1px; left: 562px; width: 80px; height: 30px; background: #eee; border-radius: 3px; text-align: center; line-height: 30px; }
    .fh_form_div ul li .resend:hover { color: #148b8c }

</style>