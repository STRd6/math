{Point, Size, Rectangle} = require "../math"

describe "rectangle", ->
  it "should iterate", ->
    rectangle = Rectangle
      position: Point(2, 2)
      size: Size(2, 2)

    total = 0
    rectangle.each (x, y) ->
      total += 1

    assert.equal total, 4
