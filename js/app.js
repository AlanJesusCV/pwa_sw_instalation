console.log('hola mundo app.js')
let url =window.location.href;
let swDirect = 'https:/alanjesuscv.github.io/pwa_sw_instalation//sw.js';

// Preguntamos si navegador y/o el sitio dispone de sw
if(navigator.serviceWorker){
    console.log('si, esta disponible');
    // Registrar el service worker
    if (url.includes('localhost')){
        swDirect='/sw.js'
    }
    navigator.serviceWorker.register(swDirect);
}else{
    console.log('no, esta disponible')
}
