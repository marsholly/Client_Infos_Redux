export function loadState() {
  try {
    const serializedState = localStorage.getItem('infos');
    if (!serializedState) throw new Error();
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

export function saveState(infos) {
  const serializedState = JSON.stringify(infos);
  localStorage.setItem('infos', serializedState);
}
