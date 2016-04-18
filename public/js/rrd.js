$(function() {
    if($('body.home')) {
        homePage.runIntro();
    }
});

var homePage = {
        runIntro: function() {
        setTimeout(function(){
            $('.messaging').addClass('done');
        },1500);
        }
};
