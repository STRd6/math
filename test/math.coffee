require("../math").pollute()

console.log global

describe "Point", ->
  it "should exist", ->
    assert Point

  it "should construct points", ->
    assert Point()

describe "Matrix", ->
  it "should exist and return matrices when invoked", ->
    assert Matrix

    assert Matrix()

  it "should use the same `Point` class", ->
    assert Matrix.Point is Point

    assert Matrix().transformPoint(Point()) instanceof Point

describe "Random", ->
  it "should exist", ->
    assert Random

describe "rand", ->
  it "should exist", ->
    assert rand

    assert rand()?
