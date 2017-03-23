$(document).ready(init);

var currentSection = null;

function init()
{
	/*
    currentSection = $('header');
    $('#list-games').on('click','button', onClickBtnItemGame);
    $('#btn-comments').click(onClickBtnComments);
    */
	//TweenMax.to($('header h1'), 3, {scale:3,force3D:false});
    
    //TweenMax.from($('header img'), 1, {marginBottom:'0px', ease:Elastic.easeOut});
    
    //TweenMax.to($('header img'), 3, {scale:3,force3D:false});  
    //TweenMax.from($('header img'), 1, {scale:3,force3D:false});
    TweenMax.to("header img", 2, {x:80, y:50, ease:Sine.easeOut});
}
