function pagAdminUs() {
    $("#containerPag").load("http://129.151.117.213:8080/pagAdminUs.html", function (data) {
    $(this).html(data);
    })
    
    cargarDatos()
    
}

function pagCreUs() {
    $("#containerPag").load("http://129.151.117.213:8080/creacionUsuario.html", function (data) {
    $(this).html(data);
    })
    
}

function pagCreProd() {
    $("#containerPag").load("http://129.151.117.213:8080/creacionClone.html", function (data) {
    $(this).html(data);
    })
    
}

function pagAdminProd() {
    $("#containerPag").load("http://129.151.117.213:8080/adminClone.html", function (data) {
    $(this).html(data);
    })
    
    cargarDatos2();
    

}
