export default function(state = 0, action) {

  switch (action.type) {
    case 'INCREASE_SCORE':
      return state += 10;
    case 'DECREASE_SCORE':
      return state -= 5;
  }
  return state;
}
