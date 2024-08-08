document.addEventListener('DOMContentLoaded', () => {
    const textoIngresado = document.querySelector('.texto_ingresado');
    const textoDevuelto = document.querySelector('.texto_devuelto');
    const botonEncriptar = document.querySelector('.boton_encriptar');
    const botonDesencriptar = document.querySelector('.boton_desencriptar');
    const botonCopiar = document.querySelector('.boton_copiar');

    // Función para encriptar el texto
    function encriptarTexto(texto) {
        return texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    // Función para desencriptar el texto
    function desencriptarTexto(texto) {
        return texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    // Función para copiar el texto al portapapeles
    function copiarTexto() {
        textoDevuelto.select(); // Selecciona el texto
        document.execCommand('copy'); // Copia el texto al portapapeles
    }

    // Evento para encriptar el texto
    botonEncriptar.addEventListener('click', () => {
        const texto = textoIngresado.value; // Obtiene el valor del textarea de entrada
        const textoEncriptado = encriptarTexto(texto); // Encripta el texto
        textoDevuelto.value = textoEncriptado; // Muestra el texto encriptado en el textarea de salida
        textoDevuelto.style.backgroundImage = 'none'; // Elimina la imagen de fondo
        textoDevuelto.placeholder = ''; // Elimina el placeholder
        botonCopiar.style.display = 'block'; // Muestra el botón "Copiar"
    });

    // Evento para desencriptar el texto
    botonDesencriptar.addEventListener('click', () => {
        const texto = textoIngresado.value; // Obtiene el valor del textarea de entrada
        const textoDesencriptado = desencriptarTexto(texto); // Desencripta el texto
        textoDevuelto.value = textoDesencriptado; // Muestra el texto desencriptado en el textarea de salida
        textoDevuelto.style.backgroundImage = 'none'; // Elimina la imagen de fondo
        textoDevuelto.placeholder = ''; // Elimina el placeholder
        botonCopiar.style.display = 'block'; // Muestra el botón "Copiar"
    });

    // Evento para copiar el texto
    botonCopiar.addEventListener('click', copiarTexto);
});