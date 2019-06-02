<template>
    <div class="petname" v-if="show5">
		<div class="list-div">
			<form action="index.php" method="post" name="updateform" onsubmit="return checkform(this)">
				<div class="tab_pswDivBox">
					<ul>
						<li>
						<label>输入提款密码：</label>
						<input name="secpass" id="secpass" type="password" class="txt_psw">
						</li>
						
						
						
						<li>
						<label>&nbsp;</label>
						<div class="btn2_div">
							<input name="" type="submit" value="提交" onclick="" class="formSubmit">
							<input name="" type="reset" value="重置" class="formReset" onclick="this.form.reset()">
						</div>
						</li>
					</ul>   
				</div>
			</form>
</div>
        <button class="close" @click="close5">X</button>
    </div>
</template>
<script>
	export default {
		data() {
				return {
					show5: true
				}
			},
			methods: {
				close5() {
					this.show5 = false
					this.$emit('close', false)
				}
			}
	}
</script>
<style>
	.petname {
		width: 1100px;
		height: 110px;
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
	.petname .close{
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
	.tab_pswDivBox ul li label {
		width: 100px;
		font-size: 12px;
		text-align: right;
		color: #666;
	}
	.tab_pswDivBox ul li .btn2_div input {
		margin: 0;
		width: 100px;
		height: 32px;
		line-height: 32px;
		background: #148b8c;
		border: 1px solid #148b8c;
		color: #fff;
		margin:0 40px;
		font-size: 12px;
	}
</style>