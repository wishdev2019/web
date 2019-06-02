<template>
    <div class="message" v-if="show4">
        <van-tabs type="card">
            <van-tab title="我的消息">
				<div class="list-div">      
					<div id="tabs" class="userinfo_tabs">
						<form method="POST" name="listForm" id="listForm">
							<div class="formctrl">
								<input type="button" value="批量删除" onclick="checkForm();" class="button">
							</div>
							<ul class="nav">
							</ul> 
							<table width="100%" border="0" cellspacing="0" cellpadding="0" class="grayTable">
								<tbody>
									<tr>
									<th width="8%">
										<div class="checkall">
											<label for="checkall">
											<input type="checkbox" id="checkall">全选</label>
										</div>
									</th>
									<th width="60%">标　　题</th>
									<th width="20%">日　　期</th>
									<th width="20%">操　　作</th>
									</tr>
											
									<tr>
										
										<td colspan="4">您暂时没有短消息</td>
										
									</tr>
								</tbody>
							</table>
						</form>
					</div>
				</div>            
			</van-tab>
            <van-tab title="修改提款密码">
				<div class="list-div">
					<div id="changeloginpass">
						<div id="tabs" class="userinfo_tabs">
							
							<div id="tabs-1" class="userinfo_sub_con">
									<form method="post" id="changepass" name="changepass">
										<ul>
										<li>
										<label>收信人类型：</label>
										<select id="msgtype" name="msgtype" onchange="show()">
											<option value="1">所有下级</option>
											<option value="2">多个下级</option>
										</select>
										</li>
										<li class="hei_auto" id="sxr" style="display: none;">
										<label>收信人名称：</label>
										<textarea name="msgname" id="msgname" cols="10" class="textarea01" rows="5"></textarea>
										<span class="tip">例如（test,test2）,用逗号分隔。 </span></li>
										<li class="hei_auto">
										<label>内容：</label>
										<textarea name="msgcontent" id="msgcontent" cols="10" class="textarea01" rows="5"></textarea>
										</li>
										<li>
										<label>&nbsp;</label>
										<div class="btn2_div02">
											<input name="" type="button" onclick="msgs()" value="提交" class="formChange">
										</div>
											<input type="hidden" name="controller" value="user">
											<input type="hidden" name="action" value="sendmessages">
											<input type="hidden" name="check" value="">
											<input type="hidden" name="flag" value="add">
										</li>
									</ul>
								</form>
							</div>
						</div>
					</div>
				</div>
            </van-tab>
        </van-tabs>
        <button class="close" @click="close4">X</button>
    </div>
</template>
<script>
	export default {
		data() {
				return {
					show4: true
				}
			},
			methods: {
				close4() {
					this.show4 = false
					this.$emit('close', false)
				}
			}
	}
</script>
<style>
	.message {
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
		font-size: 12px;
	}
	.message .close{
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
	.userinfo_tabs { width: 100%; margin: 0 auto; }
	.userinfo_tabs ul.nav { width: 100%; margin: 0 auto; border-bottom: 1px solid #f0f0f0; height: 40px; }
	.userinfo_tabs ul.nav li { float: left; min-width: 120px; }
	.userinfo_tabs ul.nav li a { font-size: 14px; text-align: center; display: block; width: 100%; height: 38px; line-height: 38px; text-decoration: none; }
	.userinfo_tabs ul.nav li a.cur { border-bottom: 2px solid #148b8c; color: #148b8c }
	.userinfo_sub_con ul { width: 100%; margin: 20px auto auto; }
	.userinfo_sub_con ul li { width: 100%; height: 40px; line-height: 40px; margin-top: 15px; position: relative; }
	.userinfo_sub_con ul li.hei_auto { height: auto; display: flex;}
	.userinfo_sub_con ul li.hei_auto .textarea01 { width: 500px; height: 90px; padding-left: 5px; line-height: 30px; background: #f8f8f8; border: 1px solid #ddd; outline: none; border-radius: 3px; }
.formctrl{ position:absolute;top:7px;right:0; text-align:right; width:300px;}
.formctrl .button{ width:90px; height:24px; line-height:24px; display:inline-block; border:none; text-align:center; color:#fff; background:#148b8c;border-radius: 3px;}
.formctrl .button:hover{ background:#333;}
.grayTable { margin-bottom: 10px; border: 0px solid #828A97; border-collapse: collapse; }
.grayTable th { background: #148b8c;border:1px solid #329394; text-align: center; padding: 5px; color: #fff; font-weight: bold; font-size: 13px; }
.grayTable .total_tr th { border: 1px solid #ddd; background: #f0f0f0; }
.grayTable td { border: 1px solid #ddd; background-color: #f0f0f0; text-align: center; padding: 5px; }
.grayTable td a.aBtn001 { padding: 2px 5px; height: 16px; line-height: 16px; background: #f0f0f0; border: 1px solid #cfcfcf; display: inline-block; margin: 0 2px; border-radius: 3px; color: #333; text-decoration: none; }
.grayTable td a.aBtn001:hover { background: #E45E00; border: 1px solid #E45E00; color: #fff; text-decoration: none; }
.grayTable td .button { width: 100px; text-align: center; height: 22px; line-height: 20px; font-size: 14px; color: #fff; border: 1px solid #148b8c; background: #148b8c; border-radius: 5px; cursor: pointer; outline: none; }
.grayTable td .button:hover { border: 1px solid #333; background: #000; color: #fff; }
.grayTable td select { height: 22px; border: 1px solid #cacaca; background: #f6f6f6; border-radius: 3px; margin: 0 5px; }
.grayTable td font.lasttime1 { color: #E45E00; }
.grayTable td font.lasttime2 { color: #FF7F24; }
.grayTable td font.lasttime3 { color: #7D9EC0; }
.grayTable td font.lasttime4 { color: #000000; }
.grayTable td .set_div { color: #ccc; }
.grayTable td .set_div .underline { padding: 0 5px; height: 18px; line-height: 17px; display: inline-block; border: 1px solid #148B8C; background: #f0f0f0; color: #148B8C; border-radius: 2px }
.grayTable td .set_div .underline:hover { border: 1px solid #000; background: #333; color: #fff; }
.grayTable td span.Viewed { padding: 0 5px; height: 18px; line-height: 17px; display: inline-block; border: 1px solid #ddd; background: #f0f0f0; color: #ccc; border-radius: 2px; }
.grayTable td span.no_View { padding: 0 5px; height: 18px; line-height: 17px; display: inline-block; border: 1px solid #148B8C; background: #f0f0f0; color: #148B8C; border-radius: 2px; }
.grayTable td a.del_btn { padding: 0 5px; height: 18px; line-height: 17px; display: inline-block; border: 1px solid #148B8C; background: #148B8C; color: #fff; border-radius: 2px; }
.grayTable td a.del_btn:hover { border: 1px solid #000; background: #333; color: #fff; }
.tipfixed3 { border-top: 1px dashed #ccc; width: 100%; margin: 10px auto; padding-top: 10px; }
#gameMethod { color: #000; }
.grayTable .left { text-align: left; text-indent: 20px; }
.grayTable .left_noindent { text-align: left; }
.grayTable strong { font-size: 14px; font-weight: bold; color: #148B8C; }
.userinfo_sub_con ul li .tip { color: #999; padding-left: 5px; }
.userinfo_sub_con ul li font.bt { font-size: 14px; color: #E45E00; padding: 0 3px; display: inline-block; height: 40px; line-height: 40px; position: absolute; top: 3px; ; right: 0; }/*必填样式*/
.userinfo_sub_con ul li label { width: 120px; display: inline-block; padding-right: 10px; text-align: right; color: #666; float: left; position: relative }
.userinfo_sub_con ul li .txt01 { width: 218px; padding-left: 5px; height: 30px; line-height: 30px; background: #f8f8f8; border: 1px solid #ddd; outline: none; }
.userinfo_sub_con ul li .txt300 { width: 218px; padding-left: 5px; height: 30px; line-height: 30px; background: #f8f8f8; border: 1px solid #ddd; outline: none; border-radius: 3px; }/*密保设定*/
.userinfo_sub_con ul li select { margin: 0; width: 226px; height: 30px; line-height: 30px; border-radius: 0px; float:left;}/*密保设定*/
.userinfo_sub_con ul li .btn2_div02 { width: 225px; float: left; }
.userinfo_sub_con ul li .btn2_div02 .formChange { float: left; margin: 0; width: 100px; height: 32px; line-height: 32px;  background: #148b8c;border:1px solid #329394; color: #fff;}
.userinfo_sub_con ul li .btn2_div02 .formReset { float: right; margin: 0; width: 100px; height: 32px; line-height: 32px; }
.userinfo_sub_con ul li .btn2_div02 .formSubmit { float: left; margin: 0; width: 100px; height: 32px; line-height: 32px; }/*密保设定*/
.userinfo_sub_con ul li .btn2_div02 .buttonnormal { margin: 0; width: 100px; height: 32px; line-height: 32px; background: #148b8c; border: 1px solid #148b8c; border-radius: 3px; outline: none; color: #fff; cursor: pointer; overflow: hidden; }/**/
.userinfo_sub_con ul li .btn2_div02 .fl { float: left; }/**/
.userinfo_sub_con ul li .btn2_div02 .fr { float: right }/**/
.userinfo_sub_con ul li .btn2_div02 .btn01 { width: 225px; height: 30px; line-height: 30px; text-align: center; border: none; background: #148b8c; color: #fff; font-size: 14px; border-radius: 3px; cursor: pointer; }

</style>