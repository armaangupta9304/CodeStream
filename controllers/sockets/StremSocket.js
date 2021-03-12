const io = require("socket.io");

class Socket {
    constructor(server){
        this.socket = io(server);
    }
    
}