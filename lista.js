function limpiarLista (lista) {

    var lines = lista.split("\n");
    var first = true;
    var invitados = new Array();

    for (var i = 0; i < lines.length; i++) {
        if (lines[i] == "") {
            first = true
            continue
        }else{
            if (first) {
                invitados.push(lines[i])
                first = false
            }else{
                first = true
                continue
            };
        };
    };

    invitados.sort()

    var nuevaLista = "Total: "+ invitados.length + "\n";
    for (var i = 0; i < invitados.length; i++) {

        nuevaLista += (i+1)+ ")\t[ ] " + invitados[i] +"\n"
    };

    return nuevaLista;
}

