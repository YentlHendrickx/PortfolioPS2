$(document).ready(function () {

    $('section:not(.main)').hide();
    $('.shared').hide();

    $('.more-info').click(function(event){
        event.preventDefault();
        console.log("TEST");
        let id = $(this).attr('id');
        console.log(id);

        if (id != undefined) {
            $('.main').hide();
            $('.shared').show();
            $('section#' + id).show();
            window.scrollTo(0,0);
        }
    });
    
    $('#return').click(function(event){
        event.preventDefault();
        $('.main').show();
        $('.shared').hide();
        $('section:not(.main)').hide();
        window.scrollTo(0,0);
    });
});