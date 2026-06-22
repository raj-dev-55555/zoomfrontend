let IS_PROD = false;
const server = IS_PROD ?
    "https://zoombackend-o3h7.onrender.com/home" :

    "http://localhost:8000"


export default server;