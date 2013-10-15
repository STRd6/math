Math
====

Require and export many math libraries.

    module.exports = self =
      Point: require "point"
      Matrix: require "matrix"
      Random: require "random"

      pollute: ->
        Object.keys(self).forEach (key) ->
          return if key is "version"
          return if key is "pollute"

          global[key] = self[key]

        return self
