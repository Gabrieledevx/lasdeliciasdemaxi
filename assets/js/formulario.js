document.querySelector('#miorden').addEventListener('click',function(){
    let nombre = document.querySelector('#nombre').value;
    let orden = document.querySelector('#orden').value;
    let url = "https://api.whatsapp.com/send?phone=593989531498&text=Hola%20soy%20"+nombre+"%20y%20deseo%20realizar%20el%20siguiente%20pedido: %0A"+orden+"%0AGracias 😊"
    
    if(nombre.length==0){
        alert("Debe de ingresar su nombre");
    }
    else if(orden.length==0){
        alert("Estimado " +nombre+" debe ingresar su orden");
    }
    
    if(nombre.length!=0 && orden.length!=0){
        window.open(url);
    }

    
});

