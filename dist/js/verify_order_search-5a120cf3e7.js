function getNowFormatDate(){var t=new Date,e="-",o=t.getMonth()+1,a=t.getDate();o>=1&&o<=9&&(o="0"+o),a>=0&&a<=9&&(a="0"+a);var n=t.getFullYear()+e+o+e+a;return n}$(function(){$("#startTime").val(getNowFormatDate()),$("#endTime").val(getNowFormatDate());var t=getLocalSession("orgId")||"",e=getLocalSession("opPhone")||"";if(""==t||""==e)return void xhq.gotoUrl("../html/verify_login.html",{type:2});$.showIndicator();var o={interId:"toc.orgInfoByopPhone",phoneNo:e};xhq.__runXHQ(o,function(t){$.hideIndicator(),2!=t.status&&1!=t.status||xhq.gotoUrl("../html/verify_login.html",{type:2})})}),$(".btn_box").on("click",function(){var t=getLocalSession("orgId"),e=$("#startTime").val()||"",o=$("#endTime").val()||"",a=$("#showName").val()||"";if(null==e||""==e||e.length<=0)return void $.toast("起始时间不能为空！");if(null==o||""==o||o.length<=0)return void $.toast("起止时间不能为空！");if(null==a||""==a||a.length<=0)return void $.toast("商品名称不能为空！");e+=" 00:00:00",o+=" 23:59:59",$.showIndicator();var n={interId:"toc.countVerifyOrderDetailInfo",orgId:t,startTime:e,endTime:o,showName:a};xhq.__runXHQ(n,function(t){if($.hideIndicator(),0==t.status){var e=getLocalSession("opLinkman")||"";$(".order_list").css("display","block"),$(".offline_name").html(e),$(".date_start").html($("#startTime").val()),$(".date_end").html($("#endTime").val()),$(".goods_name").html(a),$(".success_num").html(t.body.makeVeriyCount+"单"),$(".verification_num").html(t.body.veriyCount+"单")}else $.toast(t.message)})}),$(".date").calendar({value:[getNowFormatDate()]});