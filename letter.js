let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    let x = document.createElement("audio");
     x.setAttribute("src", "qlx.mp3");
     x.setAttribute("autoplay","autoplay");

setTimeout(() => {
    let printid=setInterval(() => {
        print();
        if(i==str.length) {
            clearInterval(printid);
        }
        },200);  // 200毫秒打一个字
}, 5500);  //5500毫秒开始打字

// 打字效果
let i =0
let str = '佳瑜，我知道你其实是一个比较喜欢仪式感的女孩。<'+
          '没有表白，没有惊喜，我们就自然而然地在一起了。<'+
          '对我而言，爱一个人不只是在嘴上说的，而是会把她放在心底里好好珍惜。<'+
          '说不出多么煽情的词汇，虽然晚了点，这封特殊的表白信希望你能喜欢。<'+
          '我觉得写信真是一件温柔的事，细腻的小心思就藏在横竖撇捺之中。<'+
          '像一只温顺的小兽，躲在情意绵绵的字里行间。<'+
          '被火漆封印起来，等待解封的那一刻突地窜出，跳进启信人眼底的柔波里。<'+
          '你一眨眼，平静的湖面有荡漾一下，<'+
          '柔和的暖风有轻拂一下，遥远的星星有闪烁一下，<'+
          '我也有心动啊，却不止一下。<'+
          '我爱你，袁佳瑜。'
let strp = ''

function print()
{
 if(str[i]=='<')
 {
     document.getElementById("box").innerHTML=strp+"<br><br>+'|'";
     strp+="<br><br>";
 }
 else
 {
     strp+=str[i];
     box.innerHTML=strp + '|';
 }
 i++;
}

// 背景出现
function appearBackground(){
setTimeout(()=>{
box.style.opacity=1
},1500)
}
appearBackground()

})
