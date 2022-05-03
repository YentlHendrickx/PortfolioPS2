// $(document).ready(function () {

//     $('section:not(.main)').hide();
//     $('.shared').hide();

//     $('.more-info').click(function(event){
//         event.preventDefault();
//         let id = $(this).attr('id');
//         console.log(id);

//         if (id != undefined) {
//             $('.navbar-collapse').collapse('hide');
//             $('.main').hide();
//             $('.shared').show();
//             $('section#' + id).show();
//             window.scrollTo(0,0);
//         }
//     });
    
//     $('#return').click(function(event){
//         event.preventDefault();
//         $('.main').show();
//         $('.shared').hide();
//         $('section:not(.main)').hide();
//         $('.navbar-collapse').collapse('hide');
//     });
// });