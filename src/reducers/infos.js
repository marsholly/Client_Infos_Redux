export default function infos(state = [], action) {
  switch (action.type) {
    case 'CREATE_NEW_CLIENT': {
      return state.concat(action.payload.clientInfo);
    }
    default:
      return state;
  }
}
