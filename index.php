
{
    // Mainly for static files
    "liveServer.settings.useWebExt": true,

    // This means that you change your real URL (current PHP url) 
    // to another URL (which Live Sever starts).
    "liveServer.settings.proxy": {
        "enable": true,                             //   i. enabled
        "baseUri": "/",                             //  ii. workspace
        "proxyUri": "http://localhost:8888/index.html" // iii. actual address
    },
}   