$(function(){
    //inserting content
    var boxLeft = $('.box1');
    var boxRight = $('.box2');

    function leftToRight() {
        if(boxRight.html() == '') {
           // get content from boxLeft and empty boxLeft
            boxRight.html( boxLeft.html() );
            boxLeft.html( '' );
        }
    }
    function rightToLeft() {
        if(boxLeft.html() == '') {
           // get content from boxLeft and empty boxLeft
            boxLeft.html( boxRight.html() );
            boxRight.html( '' );
        }
    }
    
    $('#LeftToRight').click( leftToRight );
    $('#RightToLeft').click( rightToLeft );
})
	