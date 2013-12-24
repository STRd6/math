Math
====

Require and export many math libraries.

    Point = require "point"

    Matrix = require "matrix"
    Matrix.Point = Point

    Random = require "random"

    module.exports = self =
      Point: Point
      Matrix: Matrix
      Random: Random
      rand: Random.rand

Pollute all libraries to the global namespace.

      pollute: ->
        Object.keys(self).forEach (key) ->
          return if key is "version"
          return if key is "pollute"

          global[key] = self[key]

        return self
