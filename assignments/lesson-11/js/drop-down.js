$(function(){
//    $('.dropdownMenu > li').hover( function(){
//        //mouseover
//        $(this).children("ul").slideDown(200);
//    }, function(){
//        //mouseout
//        $(this).children("ul").slideUp(200);
//    });
    $('.dropdownMenu > li').hover(function(){
        $(this).children("ul").slideToggle(200); 
    })
})
	