import { socket } from './socket';
async function SendRequest(data) {
    console.log("message sent");
    socket.emit("send-request", data);
    console.log("message sent");
}
export default SendRequest;