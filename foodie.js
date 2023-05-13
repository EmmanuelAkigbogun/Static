clickfunctionpre=(a,b,c,d,e,f,g)=>{
    document.querySelectorAll("."+d+" .circles").forEach(e=>{
        if(e.classList.contains('orange_bg')){
            e.classList.remove('orange_bg');
        }
        if(typeof e.onclick!=="function"){
            e.onclick=(e)=>{
                while(!e.target.classList.contains("orange_bg")) eval('next'+g+'.click()');
            }
        }
    })
    w=0;
    y=6;
    while (w<7){
        for (m of document.querySelector("."+e+w).classList){
            if(m.includes(f)){
                if(m.includes(a)){
                    document.querySelector("."+e+w).classList.add(f+b);
                    document.querySelector("."+e+w).classList.remove(m);
                }
                else{
                    mpla=m.split("");
                    mpla1=Number(mpla.pop());
                    mpla=mpla.join("");
                    document.querySelector("."+e+w).classList.add(mpla+Number(eval('mpla1'+c+'1')));
                    document.querySelector("."+e+w).classList.remove(m);
                }
            }
        }
        if(document.querySelector("."+e+w).classList.contains(f+"3")){
            document.querySelectorAll("."+d+" .circles")[y].classList.add("orange_bg")
        }
        w++;
        y--;
    }
}
next1.onclick=()=>{
    clickfunctionpre("6","0","+","image_prizing_cont","bg_im","slider_image_ani","1");
}
prev1.onclick=()=>{
    clickfunctionpre("0","6","-","image_prizing_cont","bg_im","slider_image_ani","1")
}
next2.onclick=()=>{
    clickfunctionpre("6","0","+","comment_for_food_body","const_sec","var_sec","2");
}
prev2.onclick=()=>{
    clickfunctionpre("0","6","-","comment_for_food_body","const_sec","var_sec","2")
}
 next1.click();next2.click();prev1.click();prev2.click();
            
            
player_play=(a,b,c)=>{
    hamburger_close.setAttribute('src','./images/'+a)
    nav_menu.removeAttribute('class','nav_menu'+b)
    nav_menu.setAttribute('class','nav_menu'+c);
}            
window.onclick=(el)=>{
    if(el.target==document.querySelector('#hamburger_close')){
        if(document.querySelector('#hamburger_close').src.includes("menu")){
            player_play('closer.png','_off','')
        }
        else if(document.querySelector('#hamburger_close').src.includes("closer")){
            player_play('menu.png','','_off')
        }
    }
    else {
        if(nav_menu.classList.contains('nav_menu')&&!nav_menu.contains(el.target)&&(el.target.tagName!=='NAV')){
            player_play('menu.png','','_off')
        }
    }
}