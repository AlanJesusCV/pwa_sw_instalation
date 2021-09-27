//console.log('sw: hola mundo')

// es el service workder
self.addEventListener("install", event => {
  console.log("SW: Instalado");
});

self.addEventListener("activate", event => {
  console.log("SW: Activado y controlando la apo");
});

self.addEventListener("fetch", event => {
  if (event.request.url.includes(".jpg")) {
    let newResp = fetch("/pwa_sw_instalation/image/perro_gato.jpg");

    event.respondWith(newResp);
  }

  if (event.request.url.includes("page.css")) {
    let newResponse = new Response(`
    body{
        background-color: black !important;
        color: red;
    }`,{
        headers:{
            'Content-Type': 'text/css'
        }
    }); 
    
    event.respondWith(newResponse);
  }
});
