import ACTIONS from "./actions";
import _ from "lodash";

const defaultState = {
  lastUpdateTime: "",
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.UPDATE_RETRIEVAL_TIME: {
      // console.log(action);

      let updateTime = action.payload;
      // console.log("check", updateTime);     
      let newState = _.cloneDeep(state);
      
      // console.log("adding", newState);
      return {
        lastUpdateTime: updateTime,        
      };
    } 

    default:
      return state;
  }
};

export default todoReducer;