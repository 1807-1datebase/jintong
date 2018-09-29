/*
* @Author: Dell
* @Date:   2018-09-29 13:33:42
* @Last Modified by:   Dell
* @Last Modified time: 2018-09-29 15:47:43
*/
window.onload=function(){
let jia=document.querySelector(".jia");
let jian=document.querySelector(".jian");
let num=document.querySelector(".P_middle_right h3");
let bot=document.querySelector(".P_lb_bottom_left");
let num2=document.querySelectorAll(".P_lb_bottom_left h3");
let heji=document.querySelector(".P_dibu_left_top h3");
let count=0;
console.log(jia,jian,num,bot);
jia.onclick=function () {
    count++;
    num.innerHTML=count;
    num.style.display="block";
    bot.style.display="block";
    heji.innerHTML=count*60;
    let i=heji.innerHTML;
    // console.log(i);
    // zong.innerHTML=parseInt(i)+5;
}
jian.onclick=function () {
    count--;
    num.innerHTML=count;
    heji.innerHTML=count*45;
    let j=heji.innerHTML;
    // zong.innerHTML=parseInt(j)+5;
    if (count==0){
        bot.style.display="none";
    }

}

}