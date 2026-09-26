function msj() {
    document.getElementById("demo").innerHTML = "Hello World";
    document.getElementById("saludo").innerHTML = "TIID_04_01 JavaScript";
}

console.log("Hola Mundo");
console.log(2 + 2);

console.group("Información a mostrar");
console.log("UA: ", navigator.userAgent);
console.log("Lang: ", navigator.language);
console.log("Plataforma: ", navigator.platform);
console.log("Cookies habilitadas: ", navigator.cookieEnabled);
console.log("Online: ", navigator.onLine);
console.groupEnd();