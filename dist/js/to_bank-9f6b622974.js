var custId=0,userType=0,canDrawMoney;$(function(){if(custId=getLocalSession("custId")||"0",userType=getLocalSession("userType")||"1",2!=userType||custId<=0)return $.toast("非合法用户，无法访问"),void xhq.gotoErrorPage();var a=xhq.getQuery("bankname");$(".bank_name").html(a+"(尾号:"+(xhq.getQuery("bankcard")||"").slice(-4)+")"),$(".card_name").html(xhq.getQuery("cardowner")),"中国银行"==a?$("#bankImg").attr("src","../img/zgyh.png"):"工商银行"==a?$("#bankImg").attr("src","../img/gsyh.png"):"建设银行"==a?$("#bankImg").attr("src","../img/jsyh.png"):"招商银行"==a?$("#bankImg").attr("src","../img/zsyh.png"):"农业银行"==a?$("#bankImg").attr("src","../img/nyyh.png"):"邮政银行"==a&&$("#bankImg").attr("src","../img/yzyh.png"),$.showIndicator();var n={interId:"toc.getIntegralCash",channel:"C",custId:custId,type:"2"};xhq.__runXHQ(n,function(a){$.hideIndicator(),0==a.status?a.body?(canDrawMoney=a.body.deductionCash,$(".draw_num").val(canDrawMoney/100),canDrawMoney<DRAW_MIN_MONEY&&($.toast("您的可提现金额还不到："+DRAW_MIN_MONEY/100+"元，不能提现"),$(".btn_box>p").removeClass("active")),$(".btn_box>p").addClass("active")):($.toast("您的可提现金额还不到："+DRAW_MIN_MONEY/100+"元，不能提现"),$(".btn_box>p").removeClass("active")):$.toast(a.message)}),$(".draw_num").on("tap",function(){$(".draw_num").val("")}),$("#toBind").on("tap",function(){xhq.gotoUrl("bind_card2.html",{bankname:xhq.getQuery("bankname"),bankcard:xhq.getQuery("bankcard"),openbank:xhq.getQuery("openbank"),cardowner:xhq.getQuery("cardowner")})}),$("#toBank").on("tap",function(){var a=100*($(".draw_num").val()||0);if(a<DRAW_MIN_MONEY)return void $.toast("提现金额不能小于："+DRAW_MIN_MONEY/100+"元");if(a>canDrawMoney)return void $.toast("提现金额不能大于可提现金额："+canDrawMoney/100+"元");$.showIndicator();var n={interId:"toc.saveCashDrawlog",custId:custId,type:"2",bankname:xhq.getQuery("bankname"),bankcard:xhq.getQuery("bankcard"),openbank:xhq.getQuery("openbank"),cardowner:xhq.getQuery("cardowner"),money:a};xhq.__runXHQ(n,function(n){$.hideIndicator(),0==n.status?($.toast("提现成功"),xhq.gotoUrl("to_bank2.html",{bankname:xhq.getQuery("bankname"),bankcard:xhq.getQuery("bankcard"),openbank:xhq.getQuery("openbank"),cardowner:xhq.getQuery("cardowner"),money:a})):$.toast(n.message)})})});