(function() {
  var self;

  module.exports = self = {
    Point: require("point"),
    Matrix: require("matrix"),
    Random: require("random"),
    pollute: function() {
      Object.keys(self).forEach(function(key) {
        if (key === "version") {
          return;
        }
        if (key === "pollute") {
          return;
        }
        return global[key] = self[key];
      });
      return self;
    }
  };

}).call(this);

//# sourceURL=math.coffee