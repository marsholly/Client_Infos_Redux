export default function notes(state = [], action) {
  switch (action.type) {
    case 'LOADING_NOTIFICATION': {
      return state.concat(action.payload.note);
    }
    case 'DONE_NOTIFICATION': {
      return state.concat(action.payload.note);
    }
    default:
      return state;
  }
}
