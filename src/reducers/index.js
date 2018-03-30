import { combineReducers } from 'redux';
import GameData from './reducer_game_data';
import GameSettings from './reducer_game_settings';
import SetScore from './reducer_set_score';

const rootReducer = combineReducers({
  data: GameData,
  settings: GameSettings,
  score: SetScore
});

export default rootReducer;
