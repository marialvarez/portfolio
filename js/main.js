$(document).ready(init);

var currentSection = null;

function init()
{
	/*
    currentSection = $('header');
    $('#list-games').on('click','button', onClickBtnItemGame);
    $('#btn-comments').click(onClickBtnComments);
    */
    
    //TweenMax.to($('header img'), 3, {scale:3,force3D:false});  
    //TweenMax.from($('header img'), 1, {scale:3,force3D:false});
    
    TweenMax.to("header img:nth-child(1)", 1.2, {x:200, y:200, ease:Sine.easeOut});
    TweenMax.to("header img:nth-child(2)", 1.2, {x:-200, y:200, ease:Sine.easeOut});
    TweenMax.to("header img:nth-child(3)", 1.2, {x:150, y:-230, ease:Sine.easeOut});
    TweenMax.to("header img:nth-child(4)", 1.2, {x:-150, y:-230, ease:Sine.easeOut});
}
