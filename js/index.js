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
    
    $('.btn-outline-success ').on('click', function(){
        $(this).html('<i class="fas fa-check"></i> Pedido Enviado').attr("disabled", true);
        toastr.success('Pedido enviado com sucesso')

    });
    $('#btnAceitar').on('click', function(){
        $(this).html('<i class="fas fa-check"></i> Pedido aceito').attr("disabled", true);
        toastr.success('Pedido aceito!')

    });
    $('#btnRecusar').on('click', function(){
        $(this).html('<i class="fas fa-check"></i> Pedido recusado').attr("disabled", true);
        toastr.error('Pedido recusado!')

    });

    $('#btnLogin').click(function(){
        if ($('#login').val() != 'jose@mail.com' || $('#senha').val() != 'senha') {
            $('#alert').removeClass('d-none');
        }
        else {
            $(this).html('<i class="fas fa-spinner fa-pulse"></i></span> Logando').attr("disabled", true);
            setTimeout(function(){
                    window.location.href = "http://u-mate.test/pedidos.html";
                    toastr.success('Logado com Sucesso');
            }, 3000);

        }
    });

});