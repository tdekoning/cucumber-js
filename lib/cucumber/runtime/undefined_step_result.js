var UndefinedStepResult = function(payload) {
  var self = {
    isFailed:     function isFailed()     { return false; },
    isPending:    function isPending()    { return false; },
    isSkipped:    function isSkipped()    { return false; },
    isSuccessful: function isSuccessful() { return false; },
    isUndefined:  function isUndefined()  { return true; },

    getStep: function getStep() {
      return payload['step'];
    }
  };
  return self;
};
module.exports = UndefinedStepResult;
