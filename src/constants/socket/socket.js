import { io } from "socket.io-client";

// Configure the Socket.IO client
const socket = io("https://your-backend-url.com", {
  transports: ["websocket"],
  autoConnect: false, 
});

// Export methods for connecting, disconnecting, and emitting
export const connectSocket = () => socket.connect();
export const disconnectSocket = () => socket.disconnect();
export const emitEvent = (event, payload) => socket.emit(event, payload);
export const subscribeToEvent = (event, callback) => socket.on(event, callback);

export default socket;
