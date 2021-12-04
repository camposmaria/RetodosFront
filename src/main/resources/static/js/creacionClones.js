function validarVacios(){
    let check = 0;
    let brandVal = $("#brandProd").val();
    let procVal = $("#processorProd").val();
    let osVal = $("#AosProd").val();
    let descrVal = $("#descriptionProd").val();
    let memorVal = $("#memoryProd").val();
    let hardVal = $("#hardDriveProd").val();
    let availVal = $("#availabilityProd").val();
    let priceVal = $("#priceProd").val();
    let quantVal = $("#quantityProd").val();    
    let photoVal = $("#photografyProd").val();
    

    if (brandVal == "" || procVal == "" || osVal == "" || descrVal == ""
     || memorVal == "" || hardVal == "" || availVal == "" 
     || priceVal == "" || quantVal == ""  || photoVal == ""){
        let conta = "";
        
        if (brandVal == ""){
            conta += " Marca ";
        }
        if (procVal == ""){
            conta += " Procesador ";
        }
        if (osVal == ""){
            conta += " Sistema Operativo ";
        }
        if (descrVal == ""){
            conta += " Descripcion ";
        }
        if (memorVal == "" ){
            conta += " Memoria ";
        }
        if (hardVal == ""){
            conta += " Disco Duro ";
        }
        if (availVal == ""){
            conta += " Disponibilidad ";
        }
        if (priceVal == ""){
            conta += " Precio ";
        }
        if (quantVal == ""){
            conta += " Cantidad ";
        }
        if (photoVal == ""){
            conta += " Fotografia ";
        }
        



        if (check == 0){
        let alertPlaceholderHead = document.getElementById('liveAlertPlaceholderClone')
        var wrapper3 = document.createElement('div')
        alertPlaceholderHead.innerHTML = "";
        wrapper3.innerHTML = `<div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Datos Incorrectos!</h4>
        <p>  Por favor ingresar todos los datos requeridos   </p>
        <hr>
        <p class="mb-0">Los siguientes campos no han sido correctamente ingresados
        `+conta+ `
        </p>
      </div>`

        alertPlaceholderHead.append(wrapper3)
        
        check += 1;
    }
    else{

        let alertPlaceholderHead = document.getElementById('liveAlertPlaceholderClone')
        var wrapper3 = document.createElement('div')
        alertPlaceholderHead.innerHTML = "";
        wrapper3.innerHTML = `<div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Datos Incorrectos!</h4>
        <p>  Por favor ingresar todos los datos requeridos  </p>
        <hr>
        <p class="mb-0">Los siguientes campos no han sido correctamente ingresados
        `+conta+ `
        </p>
      </div>`
        
        alertPlaceholderHead.append(wrapper3)
        
    }

    }else{
    
    creacionIdClone();
    let alertPlaceholderHead = document.getElementById('liveAlertPlaceholderClone')
    alertPlaceholderHead.innerHTML = "";   

    }

}

function creacionIdClone(){

    $.ajax({    
        url : 'http://129.151.117.213:8080/api/clone/all',
    //  data : { id : 123 },
        type : 'GET',
        dataType : 'json',
        
        error : function(xhr, status) {
            alert('ha sucedido un problema, '+xhr.status);
        },
        complete : function(xhr, status) {
           // alert('Petición realizada, '+xhr.status);
        },
        success : function(json) {
            window.idCloneGen = json.length + 1;
            console.log(window.idCloneGen)
            saveClone();
        }
    });



}


function saveClone(clone) {
        let availabilityVal = document.getElementById("availabilityProd").value;
        console.log(availabilityVal);
        let datos = {
        id:window.idCloneGen,
        brand : $("#brandProd").val(),
        procesor : $("#processorProd").val(),
        os : $("#osProd").val(),
        description : $("#descriptionProd").val(),
        memory : $("#memoryProd").val(),
        hardDrive : $("#hardDriveProd").val(),
        availability : availabilityVal,
        price : $("#priceProd").val(),
        quantity : $("#quantityProd").val(),
        photography : $("#photografyProd").val()
        
    }

    

    console.log(datos);
    $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(datos),
        url: "http://129.151.117.213:8080/api/clone/new",
              
        success: function (respuesta) {
            console.log("Se guardo correctamente");
        
            let alertPlaceholderLog = document.getElementById('liveAlertPlaceholderClone')
            var wrapper4 = document.createElement('div')
            alertPlaceholderLog.innerHTML="";
            wrapper4.innerHTML = `<div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Bien hecho!</h4>
            <p> El producto ha sido creada satisfactoriamente   </p>
            
          </div>`
    
            alertPlaceholderLog.append(wrapper4)

            
            setTimeout(function(){
                pagCreProd();
                
            },5000); 
        },

        error: function (xhr, status) {
           		
            console.log("ocurrio un error al guardar");	
        },
      
        complete: function (xhr, status) {
           
        }
    });
}





function limpiarCamposClone(){

    $("#brandProd").val("");
    $("#processorProd").val("");
    $("#osProd").val("");
    $("#descriptionProd").val("");
    $("#memoryProd").val("");
    $("#hardDriveProd").val("");
    let availabilityVal = document.getElementById("availabilityProd").value;
    availabilityVal = "Selecciona disponibilidad";
    $("#priceProd").val("");
    $("#quantityProd").val("");
    $("#photografyProd").val("");    

}
