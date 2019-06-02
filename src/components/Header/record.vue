<template>
    <div class="record" v-if="show6">
		<div class="list-div"> 

<div id="userlist_yxzb">

    <form action="./index.php" method="GET">
        
        
        

        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="NewFormTab_pub tzjl">
            <tbody><tr class="line0001">
                <th width="7%" height="30" align="right">投注时间：</th>
                <td width="93%" align='left'><input type="text" value="2019-05-26 03:00:00" name="starttime" id="starttime" class="txt01 date_width">
                <i class="to">至</i>
                <input type="text" value="2019-05-27 03:00:00" id="endtime" name="endtime" class="txt01 date_width">
                                    用户名：
                    <input type="text" name="username" id="username" class="txt01" value="">
                    <label for="include"><input type="checkbox" name="include" id="include" value="1">包含下级</label>
                                </td>
            </tr>
            <tr class="line0001">
                <th height="30" align="right">彩种名称：</th>
                <td align="left"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody><tr>
                      <td width="13%" align="left"><select name="lotteryid" id="lotteryid" class="select100">
                           <option value="0">所有游戏</option>
                                                        <option value="1">欢乐生肖</option>
                                                        <option value="5">山东11选5</option>
                                                        <option value="6">新疆时时彩</option>
                                                        <option value="7">江西11选5</option>
                                                        <option value="8">广东11选5</option>
                                                        <option value="9">北京快乐8</option>
                                                        <option value="11">福彩3D</option>
                                                        <option value="12">排列3</option>
                                                        <option value="14">如意三分彩</option>
                                                        <option value="15">如意五分彩</option>
                                                        <option value="16">如意分分彩</option>
                                                        <option value="17">极速3D</option>
                                                        <option value="18">秒秒彩</option>
                                                        <option value="19">江苏快三</option>
                                                        <option value="20">甘肃快三</option>
                                                        <option value="21">如意快三</option>
                                                        <option value="22">如意11选5</option>
                                                        <option value="23">甘肃11选5</option>
                                                        <option value="25">黑龙江时时彩</option>
                                                        <option value="26">广东快乐十分</option>
                                                        <option value="27">北京PK拾</option>
                                                        <option value="28">重庆快乐十分</option>
                                                        <option value="29">湖南快乐十分</option>
                                                        <option value="30">天津快乐十分</option>
                                                        <option value="31">云南快乐十分</option>
                                                        <option value="32">江苏骰宝</option>
                                                        <option value="33">如意骰宝</option>
                                                        <option value="34">山东群英会</option>
                                                        <option value="35">幸运28</option>
                                                        <option value="36">新加坡PK10</option>
                                                        <option value="37">香港六合彩</option>
                                                        <option value="38">天天六合彩</option>
                                                        <option value="39">奥卡达百家乐</option>
                                                        <option value="40">VR金星1.5分彩</option>
                                                        <option value="41">VR北京赛车</option>
                                                        <option value="43">幸运飞艇</option>
                                                    </select></td>
                      <td width="87%" align="left"><span id="game_info"><div class="margin_px">游戏玩法：</div><div class="margin_2px"><select name="methodid" id="methodid"><option value="0">所有玩法</option></select></div><div class="margin_px">彩种奖期：</div><div class="margin_2px"><select name="issue" id="issue"><option value="0">所有奖期</option></select></div></span>
                        <input name="" type="submit" value="查询" class="formCheck"></td>
                    </tr>
                  </tbody></table></td>
            </tr>
      
            
        </tbody></table>

    </form>
    <table width="100%" border="0" cellspacing="0" cellpadding="0" class="grayTable" style="font-size:12px">
        <tbody><tr>
            <th width="18%">投注时间
            </th><th align="center" class="line_03">用户
            </th><th align="center" class="line_03" width="10%">彩种
            </th><th align="center" class="line_03">玩法
            </th><th align="center" class="line_03" width="13%">投注期号
            </th><th align="center" class="line_03" width="8%">投注内容
            </th><th align="center" class="line_03">投注金额
            </th><th align="center" class="line_03">奖金
            </th><th align="center" class="line_03" width="8%">开奖号码
            </th><th align="center" class="line_03" width="6%">状态
        </th></tr>

                <tr>
            <td height="37" colspan="12" align="center" class="no-records">请选择查询条件之后进行查询</td>
        </tr>
                <tr align="center">
            <td height="37" bgcolor="#999999">小结</td>

            <td colspan="5" bgcolor="#999999"></td>
            <td bgcolor="#999999">0.0000</td>
            <td bgcolor="#999999">0.0000</td>
            <td colspan="2" bgcolor="#999999"></td>
        </tr>

        

    </tbody></table>
    <span class="tzjl_tips">备注:如需查看投注单详情，请点击状态</span>
    
</div>
</div>
        <button class="close" @click="close6">X</button>
    </div>
</template>
<script>
	export default {
		data() {
				return {
					show6: true,
					minHour: 10,
					maxHour: 20,
					minDate: new Date(),
					maxDate: new Date(2019, 10, 1),
					currentDate: new Date()
				}
			},
			methods: {
				close6() {
					this.show6 = false
					this.$emit('close', false)
				}
			}
	}
</script>
<style>
	.record {
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
	.record .close{
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
.tzjl.NewFormTab_pub { margin-bottom: 10px; }
.tzjl.NewFormTab_pub tr.line0001 th { text-align: right; }
.tzjl.NewFormTab_pub select { margin: 0 5px 0 0; width: 125px; }
.NewFormTab_pub .txt01.date_width { width: 120px; }
.form_title_div .txt01.date_width { width: 140px; }
.NewFormTab_pub { width: 100%; background: #fff; margin: 0px auto; border-bottom: 1px solid #eee; border-radius: 5px; }
.NewFormTab_pub td { line-height: 20px; }
.NewFormTab_pub tr.line0001 td, .NewFormTab_pub tr.line0001 th { border-bottom: 1px solid #eee; }
.NewFormTab_pub tr.line0001 td table td, .NewFormTab_pub tr.line0001 td table th { border: none; }
.NewFormTab_pub .txt01 { border: 1px solid #ddd; border-radius: 3px; background: #f5f5f5; margin-right: 4px; }
.NewFormTab_pub .label_radio { height: 18px; line-height: 18px }
.NewFormTab_pub .label_radio input { margin-right: 4px; }

.tzjl.NewFormTab_pub div.margin_px { float: left; padding-left: 10px; border-left: 1px dashed #ccc; margin-left: 3px; }
.tzjl.NewFormTab_pub div.margin_2px { float: left }
.tzjl.NewFormTab_pub .formCheck { margin: 5px; float: left; background: #148b8c;
    border: 1px solid #148b8c;width: 80px;
    height: 22px;
    border-radius: 3px; color: #fff;}
.tzjl.NewFormTab_pub .txt01 { width: 120px; }
.tzjl.NewFormTab_pub .txt01.date_width{width: 140px;}
.tzjl.NewFormTab_pub i.to { font-style: normal; padding: 0 5px 0 0; }
.tzjl_tips { width: 100%; height: 30px; line-height: 20px; display: block; color: #148b8c; }
#game_info {
    float: left;
    margin-top: 5px;
}
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

</style>