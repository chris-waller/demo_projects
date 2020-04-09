/* Action Types */
/* ************ */
const Types = {
  UPDATE_RETRIEVAL_TIME: "UPDATE_RETRIEVAL_TIME",  
};

/* Actions */
/* ******* */
const updateRetrievalTime = newRetrievalTime => ({
  type: Types.UPDATE_RETRIEVAL_TIME,
  payload: newRetrievalTime
});


export default {
  updateRetrievalTime,
  Types
};