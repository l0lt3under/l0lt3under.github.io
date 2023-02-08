
    var color_text= document.getElementById('hobbies-color');
    var color_ary = new Array('#F90','#60F','#6C0','#03C','#C30','#0F0','#90F','#06F','#300','#990'); // array of 10 colors
    function colr(){
        var d = new Date();
        var sec = d.getSeconds() % 10;
        color_text.style.color = color_ary[sec];
        setTimeout('colr()', 1000);	
    }
    window.addEventListener('onload', colr());


    var color_text2= document.getElementById('edu-color');
    var color_ary2 = new Array('#60F','#6C0','#03C','#C30','#0F0','#90F','#06F','#300','#990','#F90'); // array of 10 colors
    function colr2(){
        var d = new Date();
        var sec = d.getSeconds() % 10;
        color_text2.style.color = color_ary2[sec];
        setTimeout('colr2()', 1000);	
    }
    window.addEventListener('onload', colr2());

$(function () {
  $('[data-toggle="popover"]').popover()
})


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


document.getElementById("year").innerHTML = new Date().getFullYear();
  