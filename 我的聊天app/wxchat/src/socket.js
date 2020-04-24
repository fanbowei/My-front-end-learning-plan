import io from 'socket.io-client';

let socket= io.connect('http://192.168.124.3:3000');  

export default socket
