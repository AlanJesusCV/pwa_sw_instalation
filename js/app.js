console.log('hola mundo app.js')

// Preguntamos si navegador y/o el sitio dispone de sw
if(navigator.serviceWorker){
    console.log('si, esta disponible');
    // Registrar el service worker
    navigator.serviceWorker.register('/sw.js')
}else{
    console.log('no, esta disponible')
}