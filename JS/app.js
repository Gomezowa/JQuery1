//$(function(){

//une ligne de commantaire

/*plusieurs 
lignes de 
commentaire*/

// console.log('ready'); 

//   $('#button').click(function(){
//     $('#par5').slideToggle(2000)

//     });

// });

$(function () {
    $('#button').click(function () {
        $('#carre').animate({
            left: '600px'
        }, 1500, function () {
            $('#carre').animate({
                top: '150px'
            }, 1500, function () {
                $('#carre').animate({
                    'border-radius': '100%'
                }, 2000, function () {
                    $('#carre').fadeOut();

                });
            });
        });
    });

});