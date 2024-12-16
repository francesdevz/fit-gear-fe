import { call, put, take, takeEvery } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import {
  SOCKET_CONNECT,
  SOCKET_DISCONNECT,
  SOCKET_EVENT_RECEIVED,
} from "../socket/socketActions";
import { connectSocket, disconnectSocket, subscribeToEvent } from "../socket/socket";

/**
 * @typedef {Object} SocketEvent
 * @property {string} event 
 * @property {any} payload 
 */

/**
 * Creates an event channel to handle incoming socket events.
 *
 * @param {Object} socket - The socket.io client instance.
 * @returns {import("redux-saga").EventChannel<SocketEvent>} - An event channel for socket events.
 */
function createSocketChannel(socket) {
  return eventChannel((emit) => {
    /**
     * Handles socket events and emits them to the channel.
     *
     * @param {string} event - The name of the event.
     * @param {any} payload - The payload associated with the event.
     */
    const handleEvent = (event, payload) => {
      emit({ event, payload });
    };

    // Listen for all socket events
    socket.onAny((event, payload) => handleEvent(event, payload));

    // Cleanup when the channel is closed
    return () => {
      socket.offAny(handleEvent);
    };
  });
}

/**
 * @generator
 * @yields {SocketEvent} 
 */
function* handleSocketConnection() {
  
  yield call(connectSocket);

  const socketChannel = yield call(createSocketChannel, socket);

  try {
    while (true) {
      const { event, payload } = yield take(socketChannel);
      yield put({ type: SOCKET_EVENT_RECEIVED, payload: { event, payload } });
    }
  } finally {
    socketChannel.close();
  }
}

/**
 * @generator
 * @yields {void}
 */
function* socketSaga() {

  yield takeEvery(SOCKET_CONNECT, handleSocketConnection);

  yield takeEvery(SOCKET_DISCONNECT, function* () {
    yield call(disconnectSocket);
  });
}

export default socketSaga;
