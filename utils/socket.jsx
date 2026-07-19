import toast from 'react-hot-toast';
import io from 'socket.io-client';

export const socket = io('http://localhost:8000', {
    withCredentials: true
})

socket.on('request-recived', (data) => {
    console.log('request recived on second client');
   

})