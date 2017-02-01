export function createNewClient(clientInfo) {
  return {
    type: 'CREATE_NEW_CLIENT',
    payload: { clientInfo },
  };
}

export function getAllInfos(clientInfos) {
  return {
    type: 'RECEIVE_ALL_INFOS',
    payload: { clientInfos },
  };
}

export function loadingNotification(note) {
  return {
    type: 'LOADING_NOTIFICATION',
    payload: {note}
  };
}
export function doneNotification(note) {
  return {
    type: 'DONE_NOTIFICATION',
    payload: {note}
  };
}
