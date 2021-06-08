

class Sockets {

    constructor(io) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => {

            console.log('conectado')

            // Escuchar evento: mensaje-to-server que viene del front
            socket.on('mensaje-to-server', (data) => {
                console.log(data);
                // emite para todos los front
                this.io.emit('mensaje-from-server', data);
            });


        });
    }


}


module.exports = Sockets;