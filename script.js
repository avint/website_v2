var l=$('#light');
var link=$('#css');
c=true;
var h=$('.contents');


l.click(()=>{
    console.log('clicked');
    
    if(c){
        h.css('display',' none');
        h.fadeIn(1500);
        link.attr('href','stylelight.css');
        l.text('Dark theme');
        c=false;
    }
    else{
        h.css('display',' none');
        h.fadeIn(1500);
        link.attr('href','styles.css');
        l.text('Light theme');
        c=true;
    }
});