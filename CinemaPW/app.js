$('.poltronas div').click(function (e) { 
    e.preventDefault();
    sit = $(this).attr('class');
    if(sit != 'ocupado'){
        resp = confirm("Deseja reservar o assento?");
        if(resp == true){
            nome = prompt('Digite seu nome:');
            p = $(this).children();
            if(nome != null){
                $(p[1]).html(nome);
                $(this).removeClass('vazio');
                $(this).addClass('ocupado');
            }
        }
        
    }else{
        resp = confirm("Deseja cancelar a reserva?");
        if(resp == true){
            p = $(this).children();
            $(p[1]).html("");
            $(this).removeClass('ocupado');
            $(this).addClass('vazio');
        }
        
    }

    
});