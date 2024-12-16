export const SOCKET_CONNECT = "SOCKET_CONNECT";
export const SOCKET_DISCONNECT = "SOCKET_DISCONNECT";
export const SOCKET_EVENT_RECEIVED = "SOCKET_EVENT_RECEIVED";

export const connectSocketAction = () => ({
  type: SOCKET_CONNECT,
});

export const disconnectSocketAction = () => ({
  type: SOCKET_DISCONNECT,
});

export const socketEventReceived = (event, payload) => ({
  type: SOCKET_EVENT_RECEIVED,
  payload: { event, payload },
});
