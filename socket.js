/* eslint-disable no-undef */
import {io} from 'socket.io-client'
export const initSocket = async()=>{
    const options = {
        'force new connection':true,
        reconnectionAttempt:'infinity',
        timeout:10000,
        transports:['websockets']
    }
    console.log('helop')
    console.log(process.env.REACT_APP_BACKEND_URL);
    console.log('hii')
    return io(process.env.REACT_APP_BACKEND_URL, options);
}