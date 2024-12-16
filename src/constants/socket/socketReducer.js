import { SOCKET_EVENT_RECEIVED } from "../socket/socketActions";

const initialState = {
  events: [], // Store received events here
};

const socketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOCKET_EVENT_RECEIVED:
      return {
        ...state,
        events: [...state.events, action.payload], // Add the new event to the state
      };

    default:
      return state;
  }
};

export default socketReducer;
