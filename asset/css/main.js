const btn=document.querySelector('.btn')
var forminput=document.querySelectorAll('.form_input')
btn.onclick=function(){
    for(var i=0;i<forminput.length;i++){
            forminput[i].classList.add('error')
    }
}