$(document).ready(function(){var o=getLocalSession("custId")||"0";getLocalSession("userType")||"1";if(o<=0)return void xhq.gotoErrorPage();$.showIndicator();var i={interId:"toc.moneyList",channel:"C",custId:o,type:"2"};xhq.__runXHQ(i,function(o){if(0==o.status){if(o.body){var i=o.body.initCommisionMoney||0,t=o.body.sureCommisionMoney||0,n=o.body.initWithdrawMoney||0,e=o.body.sureWithdrawMoney||0;(i>0||t>0)&&$("#commisionMoney").html(t-n-e),(i>0||n>0)&&$("#blockMoney").html(i),(t>0||n>0||e>0)&&$("#withdrawMoney").html(t-n-e)}$.hideIndicator()}else $.hideIndicator(),$.toast(o.message)}),$(".up_more").click(function(){xhq.gotoUrl("consume_list.html")}),$(".big_circle").click(function(){$("#commisionMoney").html()||"0";xhq.gotoUrl("income_list.html")})});