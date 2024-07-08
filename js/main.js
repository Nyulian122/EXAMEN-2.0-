document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('miModal');
    var btn = document.querySelector('.boton');
    var span = document.getElementsByClassName('cerrar')[0];
    var formulario = document.getElementById('formularioUsuario');
    var contenedorDatos = document.getElementById('contenedorDatos');

    btn.onclick = function () {
        modal.style.display = 'block';
    }

    span.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        var nombreCompleto = document.getElementById('nombreCompleto').value;
        var correoElectronico = document.getElementById('correoElectronico').value;

        var usuarioDiv = document.createElement('div');
        usuarioDiv.className = 'datos-usuario';

        var icono = document.createElement('img');
        icono.className = 'icono-usuario';
        icono.src = 'https://via.placeholder.com/50';

        var detallesDiv = document.createElement('div');
        detallesDiv.className = 'detalles-usuario';
        detallesDiv.innerHTML = `<strong>${nombreCompleto}</strong><br>${correoElectronico}`;

        var asignacionesDiv = document.createElement('div');
        asignacionesDiv.className = 'asignaciones-usuario';

        var botonAgregar = document.createElement('button');
        botonAgregar.className = 'boton-agregar';
        botonAgregar.innerText = '+';
        botonAgregar.onclick = function () {
            var nombreAsignacion = prompt('Ingrese el nombre de la asignación:');
            if (nombreAsignacion) {
                var asignacion = document.createElement('div');
                asignacion.className = 'asignacion';
                asignacion.innerText = nombreAsignacion;
                asignacionesDiv.appendChild(asignacion);
            }
        };

        usuarioDiv.appendChild(icono);
        usuarioDiv.appendChild(detallesDiv);
        usuarioDiv.appendChild(botonAgregar);
        usuarioDiv.appendChild(asignacionesDiv);
        contenedorDatos.appendChild(usuarioDiv);

        modal.style.display = 'none';
        formulario.reset();
    });
});