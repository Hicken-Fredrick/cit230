$(function(){
    $('.navigation > li').hover(function(){
        //when hovered
        $(this).addClass('openSesame');
        
    }, function() {
        //when unhovered
        
        $(this).removeClass('openSesame');
    });
                                
})
	