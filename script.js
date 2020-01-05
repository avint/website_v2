var l=document.getElementById('light');
var link=document.getElementById('css');
c=true;
l.addEventListener('click',()=>{
    console.log('clicked');
    
    if(c){
        link.setAttribute('href','stylelight.css');
        l.innertext='Darktheme'
        c=false;
    }
    else{
        link.setAttribute('href','styles.css');
        l.innertext='Lighttheme'
        c=true;
    }
});