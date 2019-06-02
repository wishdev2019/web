<template>
    <div class="cipher" v-if="show3">
        <van-tabs type="card">
            <van-tab title="修改登陆密码">
				<div class="list-div">
					<div id="changeloginpass">
					<div id="tabs" class="userinfo_tabs">
						<div id="tabs-1" class="userinfo_sub_con">
								<form action="index.php" method="post" name="changepass" onsubmit="return checkform(this)">
									<ul>
									<li>
									<label>输入旧登陆密码：</label>
									<input name="oldpass" id="oldpass" type="password" class="txt01">
									<span class="tip">（由字母和数字组成6-16个字符） </span></li>
									<li>
									<label>输入新登陆密码：</label>
									<input name="newpass" id="newpass" type="password" class="txt01">
									<span class="tip">（由字母和数字组成6-16个字符） </span></li>
									<li>
									<label>确认新登陆密码：</label>
									<input name="confirm_newpass" id="confirm_newpass" type="password" class="txt01">
									</li>
									<li>
									<label>&nbsp;</label>
									<div class="btn2_div02">
										<input name="" type="submit" value="修改" class="formChange">
										<input name="" type="reset" value="重置" class="formReset">
									</div>
										<input type="hidden" name="controller" value="user">
										<input type="hidden" name="action" value="changeloginpass">
										<input type="hidden" name="check" value="">
										<input type="hidden" name="flag" value="changepass">
										<input type="hidden" name="changetype" value="loginpass">
									</li>
								</ul>
							</form>
								
							<div class="tipdiv_userpassword"><span>备注：请妥善保管好您的登录密码，如遗忘请使用您的邮箱找回。</span></div>
						</div>
					</div>
					</div>
				</div>
            </van-tab>
            <van-tab title="修改提款密码">
				<div class="list-div">
					<div id="changeloginpass">
						<div id="tabs" class="userinfo_tabs">
							
							<div id="tabs-2" class="userinfo_sub_con">
														<form action="index.php" method="post" name="changepass" onsubmit="return checkform(this)">
									<ul>
										<li>
											<label>输入旧提款密码：</label>
											<input type="password" name="oldpass" id="oldpass" class="txt01">
										</li>
										<li>
											<label>确认新提款密码：</label>
											<input type="password" name="newpass" id="newpass" class="txt01"><span class="red">（由字母和数字组成6-16个字符,提款密码不能与登录密码相同） </span>
										</li>
										<li>
											<label>确认新提款密码：</label>
											<input type="password" name="confirm_newpass" id="confirm_newpass" class="txt01">
										</li>

										<li>
											<label>&nbsp;</label>
											<div class="btn2_div02">
												<input name="" type="submit" value="修改" class="formChange">
												<input name="" type="reset" value="重置" class="formReset">
											</div>
											<input type="hidden" name="controller" value="user">
											<input type="hidden" name="action" value="changepaypass">
											<input type="hidden" name="check" value="">
											<input type="hidden" name="email" id="email" value="574880295@QQ.com">
											<input type="hidden" name="flag" value="changepass">
											<input type="hidden" name="changetype" value="secpass">
										</li> 
									</ul>

								</form>
								<span class="tipdiv_userpassword">备注：请妥善保管好您的提款密码&nbsp;&nbsp;<a href="?controller=user&amp;action=retrievepaypass">找回提款密码</a>，如遗忘请使用邮箱找回或联系在线客服处理</span>
							</div>            
						</div>
					</div>
				</div>
            </van-tab>
        </van-tabs>
        <button class="close" @click="close3">X</button>
    </div>
</template>
<script>
	export default {
		data() {
				return {
					show3: true
				}
			},
			methods: {
				close3() {
					this.show3 = false
					this.$emit('close', false)
				}
			}
	}
</script>
<style>
	.cipher {
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
	.cipher .close{
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
.userinfo_sub_con ul li { width: 100%; height: 40px; line-height: 40px; margin-top: 15px; position: relative; font-size: 12px; }
.userinfo_sub_con ul li.hei_auto { height: auto }
.userinfo_sub_con ul li .red{float:left;}
.userinfo_sub_con ul li.hei_auto .textarea01 { width: 500px; height: 90px; padding-left: 5px; line-height: 30px; background: #f8f8f8; border: 1px solid #ddd; outline: none; border-radius: 3px; }
.userinfo_sub_con ul li .tip { color: #999; padding-left: 5px; float:left; }
.userinfo_sub_con ul li font.bt { font-size: 14px; color: #E45E00; padding: 0 3px; display: inline-block; height: 40px; line-height: 40px; position: absolute; top: 3px; ; right: 0; }/*必填样式*/
.userinfo_sub_con ul li label { width: 120px; display: inline-block; padding-right: 10px; text-align: right; color: #666; float: left; position: relative }
.userinfo_sub_con ul li .txt01 { width: 218px; padding-left: 5px; height: 30px; line-height: 30px; background: #f8f8f8; border: 1px solid #ddd; outline: none; float:left;}
.userinfo_sub_con ul li .txt300 { width: 218px; padding-left: 5px; height: 30px; line-height: 30px; background: #f8f8f8; border: 1px solid #ddd; outline: none; border-radius: 3px; }/*密保设定*/
.userinfo_sub_con ul li select { margin: 0; width: 226px; height: 30px; line-height: 30px; border-radius: 0px; }/*密保设定*/
.userinfo_sub_con ul li .btn2_div02 { width: 225px; float: left; }
.userinfo_sub_con ul li .btn2_div02 .formChange { float: left; margin: 0; width: 100px; height: 32px; line-height: 32px; background: #148b8c;
    border: 1px solid #148b8c; color: #fff;}
.userinfo_sub_con ul li .btn2_div02 .formReset { float: right; margin: 0; width: 100px; height: 32px; line-height: 32px; background: #148b8c;
    border: 1px solid #148b8c; color: #fff;}
.userinfo_sub_con ul li .btn2_div02 .formSubmit { float: left; margin: 0; width: 100px; height: 32px; line-height: 32px; }/*密保设定*/
.userinfo_sub_con ul li .btn2_div02 .buttonnormal { margin: 0; width: 100px; height: 32px; line-height: 32px; background: #148b8c; border: 1px solid #148b8c; border-radius: 3px; outline: none; color: #fff; cursor: pointer; overflow: hidden; }/**/
.userinfo_sub_con ul li .btn2_div02 .fl { float: left; }/**/
.userinfo_sub_con ul li .btn2_div02 .fr { float: right }/**/
.userinfo_sub_con ul li .btn2_div02 .btn01 { width: 225px; height: 30px; line-height: 30px; text-align: center; border: none; background: #148b8c; color: #fff; font-size: 14px; border-radius: 3px; cursor: pointer; }
.userinfo_sub_con ul li .resend { position: absolute; top: 6px; left: 274px; width: 80px; height: 30px; background: #eee; border-radius: 3px; text-align: center; line-height: 30px; }
.userinfo_sub_con ul li .resend:hover { color: #148b8c }
.tipdiv_userpassword {
    width: 100%;
    height: 40px;
    line-height: 40px;
    float: left;
    border-top: 1px solid #efefef;
    padding-top: 10px;
    margin-top: 20px;
    color: #666;
    text-align: left;
	font-size: 12px;
}
</style>