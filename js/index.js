$(document).ready(function(){
    $('#tab2').hide();
    $('#tab3').hide();
    var status = $('#status');
    $('#btn-singup').click(function(){
        var progress = $('#progress');
        if(status.val() == 1) {
            $('#tab1').hide();
            $('#tab2').show();
            progress.text('Compartilhar');
            progress.css('width','66%')
            status.val(2)
        }
        else if(status.val() == 2) {
            $('#tab2').hide();
            $('#tab3').show();
            progress.text('Esperar');
            progress.css('width','100%')
            $('#btn-singup').hide();
        }
    });
    
    $('#btn-pedido').click(function(){
        alert('ola');
        swal("Hello world!");
    });

});