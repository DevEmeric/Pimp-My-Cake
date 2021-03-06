export default function (state = 1, action) {
  switch (action.type) {
    case 'CHANGE_INDEX':
      return state + action.payload;
    case 'UPDATE_INDEX_VIA_PROGRESSBAR':
      return action.payload;
    default:
      return state;
  }
}
