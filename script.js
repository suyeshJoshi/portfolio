var menu = document.querySelector('#rMenu');
var links = document.querySelector('#links');
var nav = document.querySelector('nav');
var hero = document.querySelector('#hero');
var linkClick = document.querySelectorAll('.linkClick');
var footer = document.querySelector('footer');
var isOpen = false;

linkClick.forEach(element => {
    element.addEventListener('click',function(){
        setTimeout(function(){
            nav.style.height = "80px";
            isOpen = false;
        },1);
    })
});
hero.addEventListener('click',function(){
    if(isOpen)
    {
        setTimeout(function(){
            nav.style.height = "80px";
        },1);
        isOpen = false;
    }
});
footer.addEventListener('click',function(){
    if(isOpen)
    {
        setTimeout(function(){
            nav.style.height = "80px";
        },1);
        isOpen = false;
    }
});
menu.addEventListener('click',function(){
    if(!isOpen)
    {
        setTimeout(function(){
            nav.style.height = "265px";
        },1);
        isOpen = true;
    }
    else
    {
        setTimeout(function(){
            nav.style.height = "80px";
        },1);
        isOpen = false;
    }
})