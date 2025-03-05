$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true
    });

    $('.menu-hamburguer').click(function (){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 0 0000-0000');

    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            },
            veiculointeresse: {
                required: true
            }
        },
        messages: {
            nome: 'Insira seu nome!',
            email: 'Digite seu E-Mail',
            tel: 'Digite seu numero de celular',
            veiculointeresse: 'Qual veiculo te interessou?'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos para preencher!`);
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 500)
    })
})