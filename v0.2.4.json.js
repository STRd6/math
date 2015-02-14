window["distri/math:v0.2.4"]({
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "mode": "100644",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "content": "math\n====\n\nMath is for cool guys.\n",
      "mode": "100644",
      "type": "blob"
    },
    "math.coffee.md": {
      "path": "math.coffee.md",
      "content": "Math\n====\n\nRequire and export many math libraries.\n\n    Point = require \"point\"\n    Size = require \"size\"\n\n    Matrix = require \"matrix\"\n    Matrix.Point = Point\n\n    Random = require \"random\"\n\n    module.exports = self =\n      Point: Point\n      Matrix: Matrix\n      Random: Random\n      Rectangle: require \"./rectangle\"\n      rand: Random.rand\n      Size: Size\n      version: require(\"./pixie\").version\n\nPollute all libraries to the global namespace.\n\n      pollute: ->\n        Object.keys(self).forEach (key) ->\n          return if key is \"version\"\n          return if key is \"pollute\"\n\n          global[key] = self[key]\n\n        return self\n",
      "mode": "100644",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "content": "entryPoint: \"math\"\nversion: \"0.2.4\"\ndependencies:\n  point: \"distri/point:v0.2.0\"\n  matrix: \"distri/matrix:v0.3.1\"\n  random: \"distri/random:v0.2.0\"\n  size: \"distri/size:v0.1.4\"\n",
      "mode": "100644",
      "type": "blob"
    },
    "rectangle.coffee.md": {
      "path": "rectangle.coffee.md",
      "content": "Rectangle\n=========\n\nA rectangle is a size at a given position.\n\n    {abs, min} = Math\n\n    Size = require \"size\"\n\n    module.exports = Rectangle = (position, size) ->\n      if position?.size?\n        {position, size} = position\n\n      position: Point(position)\n      size: Size(size)\n      __proto__: Rectangle.prototype\n\n    Rectangle.prototype =\n      each: (iterator) ->\n        p = @position\n\n        @size.each (x, y) ->\n          iterator(p.x + x, p.y + y)\n\n    Rectangle.fromPoints = (start, end) ->\n      Rectangle Point(min(start.x, end.x), min(start.y, end.y)), Size(abs(end.x - start.x), abs(end.y - start.y))\n",
      "mode": "100644",
      "type": "blob"
    },
    "test/math.coffee": {
      "path": "test/math.coffee",
      "content": "require(\"../math\").pollute()\n\ndescribe \"Point\", ->\n  it \"should exist\", ->\n    assert Point\n\n  it \"should construct points\", ->\n    assert Point()\n\ndescribe \"Matrix\", ->\n  it \"should exist and return matrices when invoked\", ->\n    assert Matrix\n\n    assert Matrix()\n\n  it \"should use the same `Point` class\", ->\n    assert Matrix.Point is Point\n\n    assert Matrix().transformPoint(Point()) instanceof Point\n\ndescribe \"Random\", ->\n  it \"should exist\", ->\n    assert Random\n\ndescribe \"rand\", ->\n  it \"should exist\", ->\n    assert rand\n\n    assert rand()?\n\ndescribe \"Size\", ->\n  it \"should exist\", ->\n    assert Size\n\ndescribe \"Math\", ->\n  it \"should have a version\", ->\n    assert require(\"../math\").version\n",
      "mode": "100644",
      "type": "blob"
    },
    "test/rectangle.coffee": {
      "path": "test/rectangle.coffee",
      "content": "{Point, Size, Rectangle} = require \"../math\"\n\ndescribe \"rectangle\", ->\n  it \"should iterate\", ->\n    rectangle = Rectangle\n      position: Point(2, 2)\n      size: Size(2, 2)\n\n    total = 0\n    rectangle.each (x, y) ->\n      total += 1\n\n    assert.equal total, 4\n",
      "mode": "100644",
      "type": "blob"
    }
  },
  "distribution": {
    "math": {
      "path": "math",
      "content": "(function() {\n  var Matrix, Point, Random, Size, self;\n\n  Point = require(\"point\");\n\n  Size = require(\"size\");\n\n  Matrix = require(\"matrix\");\n\n  Matrix.Point = Point;\n\n  Random = require(\"random\");\n\n  module.exports = self = {\n    Point: Point,\n    Matrix: Matrix,\n    Random: Random,\n    Rectangle: require(\"./rectangle\"),\n    rand: Random.rand,\n    Size: Size,\n    version: require(\"./pixie\").version,\n    pollute: function() {\n      Object.keys(self).forEach(function(key) {\n        if (key === \"version\") {\n          return;\n        }\n        if (key === \"pollute\") {\n          return;\n        }\n        return global[key] = self[key];\n      });\n      return self;\n    }\n  };\n\n}).call(this);\n",
      "type": "blob"
    },
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"entryPoint\":\"math\",\"version\":\"0.2.4\",\"dependencies\":{\"point\":\"distri/point:v0.2.0\",\"matrix\":\"distri/matrix:v0.3.1\",\"random\":\"distri/random:v0.2.0\",\"size\":\"distri/size:v0.1.4\"}};",
      "type": "blob"
    },
    "rectangle": {
      "path": "rectangle",
      "content": "(function() {\n  var Rectangle, Size, abs, min;\n\n  abs = Math.abs, min = Math.min;\n\n  Size = require(\"size\");\n\n  module.exports = Rectangle = function(position, size) {\n    var _ref;\n    if ((position != null ? position.size : void 0) != null) {\n      _ref = position, position = _ref.position, size = _ref.size;\n    }\n    return {\n      position: Point(position),\n      size: Size(size),\n      __proto__: Rectangle.prototype\n    };\n  };\n\n  Rectangle.prototype = {\n    each: function(iterator) {\n      var p;\n      p = this.position;\n      return this.size.each(function(x, y) {\n        return iterator(p.x + x, p.y + y);\n      });\n    }\n  };\n\n  Rectangle.fromPoints = function(start, end) {\n    return Rectangle(Point(min(start.x, end.x), min(start.y, end.y)), Size(abs(end.x - start.x), abs(end.y - start.y)));\n  };\n\n}).call(this);\n",
      "type": "blob"
    },
    "test/math": {
      "path": "test/math",
      "content": "(function() {\n  require(\"../math\").pollute();\n\n  describe(\"Point\", function() {\n    it(\"should exist\", function() {\n      return assert(Point);\n    });\n    return it(\"should construct points\", function() {\n      return assert(Point());\n    });\n  });\n\n  describe(\"Matrix\", function() {\n    it(\"should exist and return matrices when invoked\", function() {\n      assert(Matrix);\n      return assert(Matrix());\n    });\n    return it(\"should use the same `Point` class\", function() {\n      assert(Matrix.Point === Point);\n      return assert(Matrix().transformPoint(Point()) instanceof Point);\n    });\n  });\n\n  describe(\"Random\", function() {\n    return it(\"should exist\", function() {\n      return assert(Random);\n    });\n  });\n\n  describe(\"rand\", function() {\n    return it(\"should exist\", function() {\n      assert(rand);\n      return assert(rand() != null);\n    });\n  });\n\n  describe(\"Size\", function() {\n    return it(\"should exist\", function() {\n      return assert(Size);\n    });\n  });\n\n  describe(\"Math\", function() {\n    return it(\"should have a version\", function() {\n      return assert(require(\"../math\").version);\n    });\n  });\n\n}).call(this);\n",
      "type": "blob"
    },
    "test/rectangle": {
      "path": "test/rectangle",
      "content": "(function() {\n  var Point, Rectangle, Size, _ref;\n\n  _ref = require(\"../math\"), Point = _ref.Point, Size = _ref.Size, Rectangle = _ref.Rectangle;\n\n  describe(\"rectangle\", function() {\n    return it(\"should iterate\", function() {\n      var rectangle, total;\n      rectangle = Rectangle({\n        position: Point(2, 2),\n        size: Size(2, 2)\n      });\n      total = 0;\n      rectangle.each(function(x, y) {\n        return total += 1;\n      });\n      return assert.equal(total, 4);\n    });\n  });\n\n}).call(this);\n",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://www.danielx.net/editor/"
  },
  "version": "0.2.4",
  "entryPoint": "math",
  "repository": {
    "branch": "v0.2.4",
    "default_branch": "master",
    "full_name": "distri/math",
    "homepage": null,
    "description": "Math is for cool guys.",
    "html_url": "https://github.com/distri/math",
    "url": "https://api.github.com/repos/distri/math",
    "publishBranch": "gh-pages"
  },
  "dependencies": {
    "point": {
      "source": {
        "LICENSE": {
          "path": "LICENSE",
          "mode": "100644",
          "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
          "type": "blob"
        },
        "README.md": {
          "path": "README.md",
          "mode": "100644",
          "content": "point\n=====\n\nJavaScript Point implementation\n",
          "type": "blob"
        },
        "interactive_runtime.coffee.md": {
          "path": "interactive_runtime.coffee.md",
          "mode": "100644",
          "content": "Interactive Runtime\n-------------------\n\n    window.Point = require(\"./point\")\n\nRegister our example runner.\n\n    Interactive.register \"example\", ({source, runtimeElement}) ->\n      program = CoffeeScript.compile(source, bare: true)\n\n      outputElement = document.createElement \"pre\"\n      runtimeElement.empty().append outputElement\n\n      result = eval(program)\n\n      if typeof result is \"number\"\n        if result != (0 | result)\n          result = result.toFixed(4)\n    \n\n      outputElement.textContent = result\n",
          "type": "blob"
        },
        "pixie.cson": {
          "path": "pixie.cson",
          "mode": "100644",
          "content": "version: \"0.2.0\"\nentryPoint: \"point\"\n",
          "type": "blob"
        },
        "point.coffee.md": {
          "path": "point.coffee.md",
          "mode": "100644",
          "content": "\nCreate a new point with given x and y coordinates. If no arguments are given\ndefaults to (0, 0).\n\n>     #! example\n>     Point()\n\n----\n\n>     #! example\n>     Point(-2, 5)\n\n----\n\n    Point = (x, y) ->\n      if isObject(x)\n        {x, y} = x\n\n      __proto__: Point.prototype\n      x: x ? 0\n      y: y ? 0\n\nPoint protoype methods.\n\n    Point:: =\n\nConstrain the magnitude of a vector.\n\n      clamp: (n) ->\n        if @magnitude() > n\n          @norm(n)\n        else\n          @copy()\n\nCreates a copy of this point.\n\n      copy: ->\n        Point(@x, @y)\n\n>     #! example\n>     Point(1, 1).copy()\n\n----\n\nAdds a point to this one and returns the new point. You may\nalso use a two argument call like `point.add(x, y)`\nto add x and y values without a second point object.\n\n      add: (first, second) ->\n        if second?\n          Point(\n            @x + first\n            @y + second\n          )\n        else\n          Point(\n            @x + first.x,\n            @y + first.y\n          )\n\n>     #! example\n>     Point(2, 3).add(Point(3, 4))\n\n----\n\nSubtracts a point to this one and returns the new point.\n\n      subtract: (first, second) ->\n        if second?\n          Point(\n            @x - first,\n            @y - second\n          )\n        else\n          @add(first.scale(-1))\n\n>     #! example\n>     Point(1, 2).subtract(Point(2, 0))\n\n----\n\nScale this Point (Vector) by a constant amount.\n\n      scale: (scalar) ->\n        Point(\n          @x * scalar,\n          @y * scalar\n        )\n\n>     #! example\n>     point = Point(5, 6).scale(2)\n\n----\n\nThe `norm` of a vector is the unit vector pointing in the same direction. This method\ntreats the point as though it is a vector from the origin to (x, y).\n\n      norm: (length=1.0) ->\n        if m = @length()\n          @scale(length/m)\n        else\n          @copy()\n\n>     #! example\n>     point = Point(2, 3).norm()\n\n----\n\nDetermine whether this `Point` is equal to another `Point`. Returns `true` if\nthey are equal and `false` otherwise.\n\n      equal: (other) ->\n        @x == other.x && @y == other.y\n\n>     #! example\n>     point = Point(2, 3)\n>\n>     point.equal(Point(2, 3))\n\n----\n\nComputed the length of this point as though it were a vector from (0,0) to (x,y).\n\n      length: ->\n        Math.sqrt(@dot(this))\n\n>     #! example\n>     Point(5, 7).length()\n\n----\n\nCalculate the magnitude of this Point (Vector).\n\n      magnitude: ->\n        @length()\n\n>     #! example\n>     Point(5, 7).magnitude()\n\n----\n\nReturns the direction in radians of this point from the origin.\n\n      direction: ->\n        Math.atan2(@y, @x)\n\n>     #! example\n>     point = Point(0, 1)\n>\n>     point.direction()\n\n----\n\nCalculate the dot product of this point and another point (Vector).\n\n      dot: (other) ->\n        @x * other.x + @y * other.y\n\n\n`cross` calculates the cross product of this point and another point (Vector).\nUsually cross products are thought of as only applying to three dimensional vectors,\nbut z can be treated as zero. The result of this method is interpreted as the magnitude\nof the vector result of the cross product between [x1, y1, 0] x [x2, y2, 0]\nperpendicular to the xy plane.\n\n      cross: (other) ->\n        @x * other.y - other.x * @y\n\n\n`distance` computes the Euclidean distance between this point and another point.\n\n      distance: (other) ->\n        Point.distance(this, other)\n\n>     #! example\n>     pointA = Point(2, 3)\n>     pointB = Point(9, 2)\n>\n>     pointA.distance(pointB)\n\n----\n\n`toFixed` returns a string representation of this point with fixed decimal places.\n\n      toFixed: (n) ->\n        \"Point(#{@x.toFixed(n)}, #{@y.toFixed(n)})\"\n\n`toString` returns a string representation of this point. The representation is\nsuch that if `eval`d it will return a `Point`\n\n      toString: ->\n        \"Point(#{@x}, #{@y})\"\n\n`distance` Compute the Euclidean distance between two points.\n\n    Point.distance = (p1, p2) ->\n      Math.sqrt(Point.distanceSquared(p1, p2))\n\n>     #! example\n>     pointA = Point(2, 3)\n>     pointB = Point(9, 2)\n>\n>     Point.distance(pointA, pointB)\n\n----\n\n`distanceSquared` The square of the Euclidean distance between two points.\n\n    Point.distanceSquared = (p1, p2) ->\n      Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)\n\n>     #! example\n>     pointA = Point(2, 3)\n>     pointB = Point(9, 2)\n>\n>     Point.distanceSquared(pointA, pointB)\n\n----\n\n`interpolate` returns a point along the path from p1 to p2\n\n    Point.interpolate = (p1, p2, t) ->\n      p2.subtract(p1).scale(t).add(p1)\n\nConstruct a point on the unit circle for the given angle.\n\n    Point.fromAngle = (angle) ->\n      Point(Math.cos(angle), Math.sin(angle))\n\n>     #! example\n>     Point.fromAngle(Math.PI / 2)\n\n----\n\nIf you have two dudes, one standing at point p1, and the other\nstanding at point p2, then this method will return the direction\nthat the dude standing at p1 will need to face to look at p2.\n\n>     #! example\n>     p1 = Point(0, 0)\n>     p2 = Point(7, 3)\n>\n>     Point.direction(p1, p2)\n\n    Point.direction = (p1, p2) ->\n      Math.atan2(\n        p2.y - p1.y,\n        p2.x - p1.x\n      )\n\nThe centroid of a set of points is their arithmetic mean.\n\n    Point.centroid = (points...) ->\n      points.reduce((sumPoint, point) ->\n        sumPoint.add(point)\n      , Point(0, 0))\n      .scale(1/points.length)\n\nGenerate a random point on the unit circle.\n\n    Point.random = ->\n      Point.fromAngle(Math.random() * 2 * Math.PI)\n\nExport\n\n    module.exports = Point\n\nHelpers\n-------\n\n    isObject = (object) ->\n      Object.prototype.toString.call(object) is \"[object Object]\"\n\nLive Examples\n-------------\n\n>     #! setup\n>     require(\"/interactive_runtime\")\n",
          "type": "blob"
        },
        "test/test.coffee": {
          "path": "test/test.coffee",
          "mode": "100644",
          "content": "Point = require \"../point\"\n\nok = assert\nequals = assert.equal\n\nTAU = 2 * Math.PI\n\ndescribe \"Point\", ->\n\n  TOLERANCE = 0.00001\n\n  equalEnough = (expected, actual, tolerance, message) ->\n    message ||= \"\" + expected + \" within \" + tolerance + \" of \" + actual\n    ok(expected + tolerance >= actual && expected - tolerance <= actual, message)\n\n  it \"copy constructor\", ->\n    p = Point(3, 7)\n\n    p2 = Point(p)\n\n    equals p2.x, p.x\n    equals p2.y, p.y\n\n  it \"#add\", ->\n    p1 = Point(5, 6)\n    p2 = Point(7, 5)\n\n    result = p1.add(p2)\n\n    equals result.x, p1.x + p2.x\n    equals result.y, p1.y + p2.y\n\n    equals p1.x, 5\n    equals p1.y, 6\n    equals p2.x, 7\n    equals p2.y, 5\n\n  it \"#add with two arguments\", ->\n    point = Point(3, 7)\n    x = 2\n    y = 1\n\n    result = point.add(x, y)\n\n    equals result.x, point.x + x\n    equals result.y, point.y + y\n\n    x = 2\n    y = 0\n\n    result = point.add(x, y)\n\n    equals result.x, point.x + x\n    equals result.y, point.y + y\n\n  it \"#add existing\", ->\n    p = Point(0, 0)\n\n    p.add(Point(3, 5))\n\n    equals p.x, 0\n    equals p.y, 0\n\n  it \"#subtract\", ->\n    p1 = Point(5, 6)\n    p2 = Point(7, 5)\n\n    result = p1.subtract(p2)\n\n    equals result.x, p1.x - p2.x\n    equals result.y, p1.y - p2.y\n\n  it \"#subtract existing\", ->\n    p = Point(8, 6)\n\n    p.subtract(3, 4)\n\n    equals p.x, 8\n    equals p.y, 6\n\n  it \"#norm\", ->\n    p = Point(2, 0)\n\n    normal = p.norm()\n    equals normal.x, 1\n\n    normal = p.norm(5)\n    equals normal.x, 5\n\n    p = Point(0, 0)\n\n    normal = p.norm()\n    equals normal.x, 0, \"x value of norm of point(0,0) is 0\"\n    equals normal.y, 0, \"y value of norm of point(0,0) is 0\"\n\n  it \"#norm existing\", ->\n    p = Point(6, 8)\n\n    p.norm(5)\n\n    equals p.x, 6\n    equals p.y, 8\n\n  it \"#scale\", ->\n    p = Point(5, 6)\n    scalar = 2\n\n    result = p.scale(scalar)\n\n    equals result.x, p.x * scalar\n    equals result.y, p.y * scalar\n\n    equals p.x, 5\n    equals p.y, 6\n\n  it \"#scale existing\", ->\n    p = Point(0, 1)\n    scalar = 3\n\n    p.scale(scalar)\n\n    equals p.x, 0\n    equals p.y, 1\n\n  it \"#equal\", ->\n    ok Point(7, 8).equal(Point(7, 8))\n\n  it \"#magnitude\", ->\n    equals Point(3, 4).magnitude(), 5\n\n  it \"#length\", ->\n    equals Point(0, 0).length(), 0\n    equals Point(-1, 0).length(), 1\n\n  it \"#toString\", ->\n    p = Point(7, 5)\n    ok eval(p.toString()).equal(p)\n\n  it \"#clamp\", ->\n    p = Point(10, 10)\n    p2 = p.clamp(5)\n\n    equals p2.length(), 5\n\n  it \".centroid\", ->\n    centroid = Point.centroid(\n      Point(0, 0),\n      Point(10, 10),\n      Point(10, 0),\n      Point(0, 10)\n    )\n\n    equals centroid.x, 5\n    equals centroid.y, 5\n\n  it \".fromAngle\", ->\n    p = Point.fromAngle(TAU / 4)\n\n    equalEnough p.x, 0, TOLERANCE\n    equals p.y, 1\n\n  it \".random\", ->\n    p = Point.random()\n\n    ok p\n\n  it \".interpolate\", ->\n    p1 = Point(10, 7)\n    p2 = Point(-6, 29)\n\n    ok p1.equal(Point.interpolate(p1, p2, 0))\n    ok p2.equal(Point.interpolate(p1, p2, 1))\n",
          "type": "blob"
        }
      },
      "distribution": {
        "interactive_runtime": {
          "path": "interactive_runtime",
          "content": "(function() {\n  window.Point = require(\"./point\");\n\n  Interactive.register(\"example\", function(_arg) {\n    var outputElement, program, result, runtimeElement, source;\n    source = _arg.source, runtimeElement = _arg.runtimeElement;\n    program = CoffeeScript.compile(source, {\n      bare: true\n    });\n    outputElement = document.createElement(\"pre\");\n    runtimeElement.empty().append(outputElement);\n    result = eval(program);\n    if (typeof result === \"number\") {\n      if (result !== (0 | result)) {\n        result = result.toFixed(4);\n      }\n    }\n    return outputElement.textContent = result;\n  });\n\n}).call(this);\n\n//# sourceURL=interactive_runtime.coffee",
          "type": "blob"
        },
        "pixie": {
          "path": "pixie",
          "content": "module.exports = {\"version\":\"0.2.0\",\"entryPoint\":\"point\"};",
          "type": "blob"
        },
        "point": {
          "path": "point",
          "content": "(function() {\n  var Point, isObject,\n    __slice = [].slice;\n\n  Point = function(x, y) {\n    var _ref;\n    if (isObject(x)) {\n      _ref = x, x = _ref.x, y = _ref.y;\n    }\n    return {\n      __proto__: Point.prototype,\n      x: x != null ? x : 0,\n      y: y != null ? y : 0\n    };\n  };\n\n  Point.prototype = {\n    clamp: function(n) {\n      if (this.magnitude() > n) {\n        return this.norm(n);\n      } else {\n        return this.copy();\n      }\n    },\n    copy: function() {\n      return Point(this.x, this.y);\n    },\n    add: function(first, second) {\n      if (second != null) {\n        return Point(this.x + first, this.y + second);\n      } else {\n        return Point(this.x + first.x, this.y + first.y);\n      }\n    },\n    subtract: function(first, second) {\n      if (second != null) {\n        return Point(this.x - first, this.y - second);\n      } else {\n        return this.add(first.scale(-1));\n      }\n    },\n    scale: function(scalar) {\n      return Point(this.x * scalar, this.y * scalar);\n    },\n    norm: function(length) {\n      var m;\n      if (length == null) {\n        length = 1.0;\n      }\n      if (m = this.length()) {\n        return this.scale(length / m);\n      } else {\n        return this.copy();\n      }\n    },\n    equal: function(other) {\n      return this.x === other.x && this.y === other.y;\n    },\n    length: function() {\n      return Math.sqrt(this.dot(this));\n    },\n    magnitude: function() {\n      return this.length();\n    },\n    direction: function() {\n      return Math.atan2(this.y, this.x);\n    },\n    dot: function(other) {\n      return this.x * other.x + this.y * other.y;\n    },\n    cross: function(other) {\n      return this.x * other.y - other.x * this.y;\n    },\n    distance: function(other) {\n      return Point.distance(this, other);\n    },\n    toFixed: function(n) {\n      return \"Point(\" + (this.x.toFixed(n)) + \", \" + (this.y.toFixed(n)) + \")\";\n    },\n    toString: function() {\n      return \"Point(\" + this.x + \", \" + this.y + \")\";\n    }\n  };\n\n  Point.distance = function(p1, p2) {\n    return Math.sqrt(Point.distanceSquared(p1, p2));\n  };\n\n  Point.distanceSquared = function(p1, p2) {\n    return Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2);\n  };\n\n  Point.interpolate = function(p1, p2, t) {\n    return p2.subtract(p1).scale(t).add(p1);\n  };\n\n  Point.fromAngle = function(angle) {\n    return Point(Math.cos(angle), Math.sin(angle));\n  };\n\n  Point.direction = function(p1, p2) {\n    return Math.atan2(p2.y - p1.y, p2.x - p1.x);\n  };\n\n  Point.centroid = function() {\n    var points;\n    points = 1 <= arguments.length ? __slice.call(arguments, 0) : [];\n    return points.reduce(function(sumPoint, point) {\n      return sumPoint.add(point);\n    }, Point(0, 0)).scale(1 / points.length);\n  };\n\n  Point.random = function() {\n    return Point.fromAngle(Math.random() * 2 * Math.PI);\n  };\n\n  module.exports = Point;\n\n  isObject = function(object) {\n    return Object.prototype.toString.call(object) === \"[object Object]\";\n  };\n\n}).call(this);\n\n//# sourceURL=point.coffee",
          "type": "blob"
        },
        "test/test": {
          "path": "test/test",
          "content": "(function() {\n  var Point, TAU, equals, ok;\n\n  Point = require(\"../point\");\n\n  ok = assert;\n\n  equals = assert.equal;\n\n  TAU = 2 * Math.PI;\n\n  describe(\"Point\", function() {\n    var TOLERANCE, equalEnough;\n    TOLERANCE = 0.00001;\n    equalEnough = function(expected, actual, tolerance, message) {\n      message || (message = \"\" + expected + \" within \" + tolerance + \" of \" + actual);\n      return ok(expected + tolerance >= actual && expected - tolerance <= actual, message);\n    };\n    it(\"copy constructor\", function() {\n      var p, p2;\n      p = Point(3, 7);\n      p2 = Point(p);\n      equals(p2.x, p.x);\n      return equals(p2.y, p.y);\n    });\n    it(\"#add\", function() {\n      var p1, p2, result;\n      p1 = Point(5, 6);\n      p2 = Point(7, 5);\n      result = p1.add(p2);\n      equals(result.x, p1.x + p2.x);\n      equals(result.y, p1.y + p2.y);\n      equals(p1.x, 5);\n      equals(p1.y, 6);\n      equals(p2.x, 7);\n      return equals(p2.y, 5);\n    });\n    it(\"#add with two arguments\", function() {\n      var point, result, x, y;\n      point = Point(3, 7);\n      x = 2;\n      y = 1;\n      result = point.add(x, y);\n      equals(result.x, point.x + x);\n      equals(result.y, point.y + y);\n      x = 2;\n      y = 0;\n      result = point.add(x, y);\n      equals(result.x, point.x + x);\n      return equals(result.y, point.y + y);\n    });\n    it(\"#add existing\", function() {\n      var p;\n      p = Point(0, 0);\n      p.add(Point(3, 5));\n      equals(p.x, 0);\n      return equals(p.y, 0);\n    });\n    it(\"#subtract\", function() {\n      var p1, p2, result;\n      p1 = Point(5, 6);\n      p2 = Point(7, 5);\n      result = p1.subtract(p2);\n      equals(result.x, p1.x - p2.x);\n      return equals(result.y, p1.y - p2.y);\n    });\n    it(\"#subtract existing\", function() {\n      var p;\n      p = Point(8, 6);\n      p.subtract(3, 4);\n      equals(p.x, 8);\n      return equals(p.y, 6);\n    });\n    it(\"#norm\", function() {\n      var normal, p;\n      p = Point(2, 0);\n      normal = p.norm();\n      equals(normal.x, 1);\n      normal = p.norm(5);\n      equals(normal.x, 5);\n      p = Point(0, 0);\n      normal = p.norm();\n      equals(normal.x, 0, \"x value of norm of point(0,0) is 0\");\n      return equals(normal.y, 0, \"y value of norm of point(0,0) is 0\");\n    });\n    it(\"#norm existing\", function() {\n      var p;\n      p = Point(6, 8);\n      p.norm(5);\n      equals(p.x, 6);\n      return equals(p.y, 8);\n    });\n    it(\"#scale\", function() {\n      var p, result, scalar;\n      p = Point(5, 6);\n      scalar = 2;\n      result = p.scale(scalar);\n      equals(result.x, p.x * scalar);\n      equals(result.y, p.y * scalar);\n      equals(p.x, 5);\n      return equals(p.y, 6);\n    });\n    it(\"#scale existing\", function() {\n      var p, scalar;\n      p = Point(0, 1);\n      scalar = 3;\n      p.scale(scalar);\n      equals(p.x, 0);\n      return equals(p.y, 1);\n    });\n    it(\"#equal\", function() {\n      return ok(Point(7, 8).equal(Point(7, 8)));\n    });\n    it(\"#magnitude\", function() {\n      return equals(Point(3, 4).magnitude(), 5);\n    });\n    it(\"#length\", function() {\n      equals(Point(0, 0).length(), 0);\n      return equals(Point(-1, 0).length(), 1);\n    });\n    it(\"#toString\", function() {\n      var p;\n      p = Point(7, 5);\n      return ok(eval(p.toString()).equal(p));\n    });\n    it(\"#clamp\", function() {\n      var p, p2;\n      p = Point(10, 10);\n      p2 = p.clamp(5);\n      return equals(p2.length(), 5);\n    });\n    it(\".centroid\", function() {\n      var centroid;\n      centroid = Point.centroid(Point(0, 0), Point(10, 10), Point(10, 0), Point(0, 10));\n      equals(centroid.x, 5);\n      return equals(centroid.y, 5);\n    });\n    it(\".fromAngle\", function() {\n      var p;\n      p = Point.fromAngle(TAU / 4);\n      equalEnough(p.x, 0, TOLERANCE);\n      return equals(p.y, 1);\n    });\n    it(\".random\", function() {\n      var p;\n      p = Point.random();\n      return ok(p);\n    });\n    return it(\".interpolate\", function() {\n      var p1, p2;\n      p1 = Point(10, 7);\n      p2 = Point(-6, 29);\n      ok(p1.equal(Point.interpolate(p1, p2, 0)));\n      return ok(p2.equal(Point.interpolate(p1, p2, 1)));\n    });\n  });\n\n}).call(this);\n\n//# sourceURL=test/test.coffee",
          "type": "blob"
        }
      },
      "progenitor": {
        "url": "http://strd6.github.io/editor/"
      },
      "version": "0.2.0",
      "entryPoint": "point",
      "repository": {
        "id": 13484982,
        "name": "point",
        "full_name": "distri/point",
        "owner": {
          "login": "distri",
          "id": 6005125,
          "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
          "gravatar_id": null,
          "url": "https://api.github.com/users/distri",
          "html_url": "https://github.com/distri",
          "followers_url": "https://api.github.com/users/distri/followers",
          "following_url": "https://api.github.com/users/distri/following{/other_user}",
          "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
          "organizations_url": "https://api.github.com/users/distri/orgs",
          "repos_url": "https://api.github.com/users/distri/repos",
          "events_url": "https://api.github.com/users/distri/events{/privacy}",
          "received_events_url": "https://api.github.com/users/distri/received_events",
          "type": "Organization",
          "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/distri/point",
        "description": "JavaScript Point implementation",
        "fork": false,
        "url": "https://api.github.com/repos/distri/point",
        "forks_url": "https://api.github.com/repos/distri/point/forks",
        "keys_url": "https://api.github.com/repos/distri/point/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/distri/point/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/distri/point/teams",
        "hooks_url": "https://api.github.com/repos/distri/point/hooks",
        "issue_events_url": "https://api.github.com/repos/distri/point/issues/events{/number}",
        "events_url": "https://api.github.com/repos/distri/point/events",
        "assignees_url": "https://api.github.com/repos/distri/point/assignees{/user}",
        "branches_url": "https://api.github.com/repos/distri/point/branches{/branch}",
        "tags_url": "https://api.github.com/repos/distri/point/tags",
        "blobs_url": "https://api.github.com/repos/distri/point/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/distri/point/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/distri/point/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/distri/point/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/distri/point/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/distri/point/languages",
        "stargazers_url": "https://api.github.com/repos/distri/point/stargazers",
        "contributors_url": "https://api.github.com/repos/distri/point/contributors",
        "subscribers_url": "https://api.github.com/repos/distri/point/subscribers",
        "subscription_url": "https://api.github.com/repos/distri/point/subscription",
        "commits_url": "https://api.github.com/repos/distri/point/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/distri/point/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/distri/point/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/distri/point/issues/comments/{number}",
        "contents_url": "https://api.github.com/repos/distri/point/contents/{+path}",
        "compare_url": "https://api.github.com/repos/distri/point/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/distri/point/merges",
        "archive_url": "https://api.github.com/repos/distri/point/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/distri/point/downloads",
        "issues_url": "https://api.github.com/repos/distri/point/issues{/number}",
        "pulls_url": "https://api.github.com/repos/distri/point/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/distri/point/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/distri/point/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/distri/point/labels{/name}",
        "releases_url": "https://api.github.com/repos/distri/point/releases{/id}",
        "created_at": "2013-10-10T22:59:27Z",
        "updated_at": "2013-12-23T23:33:20Z",
        "pushed_at": "2013-10-15T00:22:04Z",
        "git_url": "git://github.com/distri/point.git",
        "ssh_url": "git@github.com:distri/point.git",
        "clone_url": "https://github.com/distri/point.git",
        "svn_url": "https://github.com/distri/point",
        "homepage": null,
        "size": 836,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "CoffeeScript",
        "has_issues": true,
        "has_downloads": true,
        "has_wiki": true,
        "forks_count": 0,
        "mirror_url": null,
        "open_issues_count": 0,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master",
        "master_branch": "master",
        "permissions": {
          "admin": true,
          "push": true,
          "pull": true
        },
        "organization": {
          "login": "distri",
          "id": 6005125,
          "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
          "gravatar_id": null,
          "url": "https://api.github.com/users/distri",
          "html_url": "https://github.com/distri",
          "followers_url": "https://api.github.com/users/distri/followers",
          "following_url": "https://api.github.com/users/distri/following{/other_user}",
          "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
          "organizations_url": "https://api.github.com/users/distri/orgs",
          "repos_url": "https://api.github.com/users/distri/repos",
          "events_url": "https://api.github.com/users/distri/events{/privacy}",
          "received_events_url": "https://api.github.com/users/distri/received_events",
          "type": "Organization",
          "site_admin": false
        },
        "network_count": 0,
        "subscribers_count": 1,
        "branch": "v0.2.0",
        "defaultBranch": "master"
      },
      "dependencies": {}
    },
    "matrix": {
      "source": {
        "LICENSE": {
          "path": "LICENSE",
          "mode": "100644",
          "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
          "type": "blob"
        },
        "README.md": {
          "path": "README.md",
          "mode": "100644",
          "content": "matrix\n======\n\nWhere matrices become heroes, together.\n",
          "type": "blob"
        },
        "matrix.coffee.md": {
          "path": "matrix.coffee.md",
          "mode": "100644",
          "content": "Matrix\n======\n\n```\n   _        _\n  | a  c tx  |\n  | b  d ty  |\n  |_0  0  1 _|\n```\n\nCreates a matrix for 2d affine transformations.\n\n`concat`, `inverse`, `rotate`, `scale` and `translate` return new matrices with\nthe transformations applied. The matrix is not modified in place.\n\nReturns the identity matrix when called with no arguments.\n\n    Matrix = (a, b, c, d, tx, ty) ->\n      if isObject(a)\n        {a, b, c, d, tx, ty} = a\n\n      __proto__: Matrix.prototype\n      a: a ? 1\n      b: b ? 0\n      c: c ? 0\n      d: d ? 1\n      tx: tx ? 0\n      ty: ty ? 0\n\nA `Point` constructor for the methods that return points. This can be overridden\nwith a compatible constructor if you want fancier points.\n\n    Matrix.Point = require \"./point\"\n\n    Matrix.prototype =\n\n`concat` returns the result of this matrix multiplied by another matrix\ncombining the geometric effects of the two. In mathematical terms,\nconcatenating two matrixes is the same as combining them using matrix multiplication.\nIf this matrix is A and the matrix passed in is B, the resulting matrix is A x B\nhttp://mathworld.wolfram.com/MatrixMultiplication.html\n\n      concat: (matrix) ->\n        Matrix(\n          @a * matrix.a + @c * matrix.b,\n          @b * matrix.a + @d * matrix.b,\n          @a * matrix.c + @c * matrix.d,\n          @b * matrix.c + @d * matrix.d,\n          @a * matrix.tx + @c * matrix.ty + @tx,\n          @b * matrix.tx + @d * matrix.ty + @ty\n        )\n\n\nReturn a new matrix that is a `copy` of this matrix.\n\n      copy: ->\n        Matrix(@a, @b, @c, @d, @tx, @ty)\n\nGiven a point in the pretransform coordinate space, returns the coordinates of\nthat point after the transformation occurs. Unlike the standard transformation\napplied using the transformPoint() method, the deltaTransformPoint() method\ndoes not consider the translation parameters tx and ty.\n\nReturns a new `Point` transformed by this matrix ignoring tx and ty.\n\n      deltaTransformPoint: (point) ->\n        Matrix.Point(\n          @a * point.x + @c * point.y,\n          @b * point.x + @d * point.y\n        )\n\nReturns a new matrix that is the inverse of this matrix.\nhttp://mathworld.wolfram.com/MatrixInverse.html\n\n      inverse: ->\n        determinant = @a * @d - @b * @c\n\n        Matrix(\n          @d / determinant,\n          -@b / determinant,\n          -@c / determinant,\n          @a / determinant,\n          (@c * @ty - @d * @tx) / determinant,\n          (@b * @tx - @a * @ty) / determinant\n        )\n\nReturns a new matrix that corresponds this matrix multiplied by a\na rotation matrix.\n\nThe first parameter `theta` is the amount to rotate in radians.\n\nThe second optional parameter, `aboutPoint` is the point about which the\nrotation occurs. Defaults to (0,0).\n\n      rotate: (theta, aboutPoint) ->\n        @concat(Matrix.rotation(theta, aboutPoint))\n\nReturns a new matrix that corresponds this matrix multiplied by a\na scaling matrix.\n\n      scale: (sx, sy, aboutPoint) ->\n        @concat(Matrix.scale(sx, sy, aboutPoint))\n\nReturns a new matrix that corresponds this matrix multiplied by a\na skewing matrix.\n\n      skew: (skewX, skewY) ->\n        @concat(Matrix.skew(skewX, skewY))\n\nReturns a string representation of this matrix.\n\n      toString: ->\n        \"Matrix(#{@a}, #{@b}, #{@c}, #{@d}, #{@tx}, #{@ty})\"\n\nReturns the result of applying the geometric transformation represented by the\nMatrix object to the specified point.\n\n      transformPoint: (point) ->\n        Matrix.Point(\n          @a * point.x + @c * point.y + @tx,\n          @b * point.x + @d * point.y + @ty\n        )\n\nTranslates the matrix along the x and y axes, as specified by the tx and ty parameters.\n\n      translate: (tx, ty) ->\n        @concat(Matrix.translation(tx, ty))\n\nCreates a matrix transformation that corresponds to the given rotation,\naround (0,0) or the specified point.\n\n    Matrix.rotate = Matrix.rotation = (theta, aboutPoint) ->\n      rotationMatrix = Matrix(\n        Math.cos(theta),\n        Math.sin(theta),\n        -Math.sin(theta),\n        Math.cos(theta)\n      )\n\n      if aboutPoint?\n        rotationMatrix =\n          Matrix.translation(aboutPoint.x, aboutPoint.y).concat(\n            rotationMatrix\n          ).concat(\n            Matrix.translation(-aboutPoint.x, -aboutPoint.y)\n          )\n\n      return rotationMatrix\n\nReturns a matrix that corresponds to scaling by factors of sx, sy along\nthe x and y axis respectively.\n\nIf only one parameter is given the matrix is scaled uniformly along both axis.\n\nIf the optional aboutPoint parameter is given the scaling takes place\nabout the given point.\n\n    Matrix.scale = (sx, sy, aboutPoint) ->\n      sy = sy || sx\n\n      scaleMatrix = Matrix(sx, 0, 0, sy)\n\n      if aboutPoint\n        scaleMatrix =\n          Matrix.translation(aboutPoint.x, aboutPoint.y).concat(\n            scaleMatrix\n          ).concat(\n            Matrix.translation(-aboutPoint.x, -aboutPoint.y)\n          )\n\n      return scaleMatrix\n\n\nReturns a matrix that corresponds to a skew of skewX, skewY.\n\n    Matrix.skew = (skewX, skewY) ->\n      Matrix(0, Math.tan(skewY), Math.tan(skewX), 0)\n\nReturns a matrix that corresponds to a translation of tx, ty.\n\n    Matrix.translate = Matrix.translation = (tx, ty) ->\n      Matrix(1, 0, 0, 1, tx, ty)\n\nHelpers\n-------\n\n    isObject = (object) ->\n      Object.prototype.toString.call(object) is \"[object Object]\"\n\n    frozen = (object) ->\n      Object.freeze?(object)\n\n      return object\n\nConstants\n---------\n\nA constant representing the identity matrix.\n\n    Matrix.IDENTITY = frozen Matrix()\n\nA constant representing the horizontal flip transformation matrix.\n\n    Matrix.HORIZONTAL_FLIP = frozen Matrix(-1, 0, 0, 1)\n\nA constant representing the vertical flip transformation matrix.\n\n    Matrix.VERTICAL_FLIP = frozen Matrix(1, 0, 0, -1)\n\nExports\n-------\n\n    module.exports = Matrix\n",
          "type": "blob"
        },
        "pixie.cson": {
          "path": "pixie.cson",
          "mode": "100644",
          "content": "version: \"0.3.1\"\nentryPoint: \"matrix\"\n",
          "type": "blob"
        },
        "test/matrix.coffee": {
          "path": "test/matrix.coffee",
          "mode": "100644",
          "content": "Matrix = require \"../matrix\"\nPoint = require \"../point\"\n\nok = assert\nequals = assert.equal\ntest = it\n\ndescribe \"Matrix\", ->\n\n  TOLERANCE = 0.00001\n  \n  equalEnough = (expected, actual, tolerance, message) ->\n    message ||= \"\" + expected + \" within \" + tolerance + \" of \" + actual\n    ok(expected + tolerance >= actual && expected - tolerance <= actual, message)\n  \n  matrixEqual = (m1, m2) ->\n    equalEnough(m1.a, m2.a, TOLERANCE)\n    equalEnough(m1.b, m2.b, TOLERANCE)\n    equalEnough(m1.c, m2.c, TOLERANCE)\n    equalEnough(m1.d, m2.d, TOLERANCE)\n    equalEnough(m1.tx, m2.tx, TOLERANCE)\n    equalEnough(m1.ty, m2.ty, TOLERANCE)\n  \n  test \"copy constructor\", ->\n   matrix = Matrix(1, 0, 0, 1, 10, 12)\n  \n   matrix2 = Matrix(matrix)\n  \n   ok matrix != matrix2\n   matrixEqual(matrix2, matrix)\n  \n  test \"Matrix() (Identity)\", ->\n    matrix = Matrix()\n  \n    equals(matrix.a, 1, \"a\")\n    equals(matrix.b, 0, \"b\")\n    equals(matrix.c, 0, \"c\")\n    equals(matrix.d, 1, \"d\")\n    equals(matrix.tx, 0, \"tx\")\n    equals(matrix.ty, 0, \"ty\")\n  \n    matrixEqual(matrix, Matrix.IDENTITY)\n  \n  test \"Empty\", ->\n    matrix = Matrix(0, 0, 0, 0, 0, 0)\n  \n    equals(matrix.a, 0, \"a\")\n    equals(matrix.b, 0, \"b\")\n    equals(matrix.c, 0, \"c\")\n    equals(matrix.d, 0, \"d\")\n    equals(matrix.tx, 0, \"tx\")\n    equals(matrix.ty, 0, \"ty\")\n  \n  test \"#copy\", ->\n    matrix = Matrix(2, 0, 0, 2)\n  \n    copyMatrix = matrix.copy()\n  \n    matrixEqual copyMatrix, matrix\n  \n    copyMatrix.a = 4\n  \n    equals copyMatrix.a, 4\n    equals matrix.a, 2, \"Old 'a' value is unchanged\"\n  \n  test \".scale\", ->\n    matrix = Matrix.scale(2, 2)\n  \n    equals(matrix.a, 2, \"a\")\n    equals(matrix.b, 0, \"b\")\n    equals(matrix.c, 0, \"c\")\n    equals(matrix.d, 2, \"d\")\n  \n    matrix = Matrix.scale(3)\n  \n    equals(matrix.a, 3, \"a\")\n    equals(matrix.b, 0, \"b\")\n    equals(matrix.c, 0, \"c\")\n    equals(matrix.d, 3, \"d\")\n  \n  test \".scale (about a point)\", ->\n    p = Point(5, 17)\n  \n    transformedPoint = Matrix.scale(3, 7, p).transformPoint(p)\n  \n    equals(transformedPoint.x, p.x, \"Point should remain the same\")\n    equals(transformedPoint.y, p.y, \"Point should remain the same\")\n  \n  test \"#scale (about a point)\", ->\n    p = Point(3, 11)\n  \n    transformedPoint = Matrix.IDENTITY.scale(3, 7, p).transformPoint(p)\n  \n    equals(transformedPoint.x, p.x, \"Point should remain the same\")\n    equals(transformedPoint.y, p.y, \"Point should remain the same\")\n  \n  test \"#skew\", ->\n    matrix = Matrix()\n\n    angle = 0.25 * Math.PI\n  \n    matrix = matrix.skew(angle, 0)\n  \n    equals matrix.c, Math.tan(angle)\n  \n  test \".rotation\", ->\n    matrix = Matrix.rotation(Math.PI / 2)\n  \n    equalEnough(matrix.a, 0, TOLERANCE)\n    equalEnough(matrix.b, 1, TOLERANCE)\n    equalEnough(matrix.c,-1, TOLERANCE)\n    equalEnough(matrix.d, 0, TOLERANCE)\n  \n  test \".rotation (about a point)\", ->\n    p = Point(11, 7)\n  \n    transformedPoint = Matrix.rotation(Math.PI / 2, p).transformPoint(p)\n  \n    equals transformedPoint.x, p.x, \"Point should remain the same\"\n    equals transformedPoint.y, p.y, \"Point should remain the same\"\n  \n  test \"#rotate (about a point)\", ->\n    p = Point(8, 5);\n  \n    transformedPoint = Matrix.IDENTITY.rotate(Math.PI / 2, p).transformPoint(p)\n  \n    equals transformedPoint.x, p.x, \"Point should remain the same\"\n    equals transformedPoint.y, p.y, \"Point should remain the same\"\n  \n  test \"#inverse (Identity)\", ->\n    matrix = Matrix().inverse()\n  \n    equals(matrix.a, 1, \"a\")\n    equals(matrix.b, 0, \"b\")\n    equals(matrix.c, 0, \"c\")\n    equals(matrix.d, 1, \"d\")\n    equals(matrix.tx, 0, \"tx\")\n    equals(matrix.ty, 0, \"ty\")\n  \n  test \"#concat\", ->\n    matrix = Matrix.rotation(Math.PI / 2).concat(Matrix.rotation(-Math.PI / 2))\n  \n    matrixEqual(matrix, Matrix.IDENTITY)\n  \n  test \"#toString\", ->\n    matrix = Matrix(0.5, 2, 0.5, -2, 3, 4.5)\n    matrixEqual eval(matrix.toString()), matrix\n  \n  test \"Maths\", ->\n    a = Matrix(12, 3, 3, 1, 7, 9)\n    b = Matrix(3, 8, 3, 2, 1, 5)\n  \n    c = a.concat(b)\n  \n    equals(c.a, 60)\n    equals(c.b, 17)\n    equals(c.c, 42)\n    equals(c.d, 11)\n    equals(c.tx, 34)\n    equals(c.ty, 17)\n  \n  test \"Order of transformations should match manual concat\", ->\n    tx = 10\n    ty = 5\n    theta = Math.PI/3\n    s = 2\n  \n    m1 = Matrix().translate(tx, ty).scale(s).rotate(theta)\n    m2 = Matrix().concat(Matrix.translation(tx, ty)).concat(Matrix.scale(s)).concat(Matrix.rotation(theta))\n  \n    matrixEqual(m1, m2)\n  \n  test \"IDENTITY is immutable\", ->\n    identity = Matrix.IDENTITY\n  \n    identity.a = 5\n  \n    equals identity.a, 1\n",
          "type": "blob"
        },
        "point.coffee.md": {
          "path": "point.coffee.md",
          "mode": "100644",
          "content": "Point\n=====\n\nA very simple Point object constructor.\n\n    module.exports = (x, y) ->\n      x: x\n      y: y\n",
          "type": "blob"
        }
      },
      "distribution": {
        "matrix": {
          "path": "matrix",
          "content": "(function() {\n  var Matrix, frozen, isObject;\n\n  Matrix = function(a, b, c, d, tx, ty) {\n    var _ref;\n    if (isObject(a)) {\n      _ref = a, a = _ref.a, b = _ref.b, c = _ref.c, d = _ref.d, tx = _ref.tx, ty = _ref.ty;\n    }\n    return {\n      __proto__: Matrix.prototype,\n      a: a != null ? a : 1,\n      b: b != null ? b : 0,\n      c: c != null ? c : 0,\n      d: d != null ? d : 1,\n      tx: tx != null ? tx : 0,\n      ty: ty != null ? ty : 0\n    };\n  };\n\n  Matrix.Point = require(\"./point\");\n\n  Matrix.prototype = {\n    concat: function(matrix) {\n      return Matrix(this.a * matrix.a + this.c * matrix.b, this.b * matrix.a + this.d * matrix.b, this.a * matrix.c + this.c * matrix.d, this.b * matrix.c + this.d * matrix.d, this.a * matrix.tx + this.c * matrix.ty + this.tx, this.b * matrix.tx + this.d * matrix.ty + this.ty);\n    },\n    copy: function() {\n      return Matrix(this.a, this.b, this.c, this.d, this.tx, this.ty);\n    },\n    deltaTransformPoint: function(point) {\n      return Matrix.Point(this.a * point.x + this.c * point.y, this.b * point.x + this.d * point.y);\n    },\n    inverse: function() {\n      var determinant;\n      determinant = this.a * this.d - this.b * this.c;\n      return Matrix(this.d / determinant, -this.b / determinant, -this.c / determinant, this.a / determinant, (this.c * this.ty - this.d * this.tx) / determinant, (this.b * this.tx - this.a * this.ty) / determinant);\n    },\n    rotate: function(theta, aboutPoint) {\n      return this.concat(Matrix.rotation(theta, aboutPoint));\n    },\n    scale: function(sx, sy, aboutPoint) {\n      return this.concat(Matrix.scale(sx, sy, aboutPoint));\n    },\n    skew: function(skewX, skewY) {\n      return this.concat(Matrix.skew(skewX, skewY));\n    },\n    toString: function() {\n      return \"Matrix(\" + this.a + \", \" + this.b + \", \" + this.c + \", \" + this.d + \", \" + this.tx + \", \" + this.ty + \")\";\n    },\n    transformPoint: function(point) {\n      return Matrix.Point(this.a * point.x + this.c * point.y + this.tx, this.b * point.x + this.d * point.y + this.ty);\n    },\n    translate: function(tx, ty) {\n      return this.concat(Matrix.translation(tx, ty));\n    }\n  };\n\n  Matrix.rotate = Matrix.rotation = function(theta, aboutPoint) {\n    var rotationMatrix;\n    rotationMatrix = Matrix(Math.cos(theta), Math.sin(theta), -Math.sin(theta), Math.cos(theta));\n    if (aboutPoint != null) {\n      rotationMatrix = Matrix.translation(aboutPoint.x, aboutPoint.y).concat(rotationMatrix).concat(Matrix.translation(-aboutPoint.x, -aboutPoint.y));\n    }\n    return rotationMatrix;\n  };\n\n  Matrix.scale = function(sx, sy, aboutPoint) {\n    var scaleMatrix;\n    sy = sy || sx;\n    scaleMatrix = Matrix(sx, 0, 0, sy);\n    if (aboutPoint) {\n      scaleMatrix = Matrix.translation(aboutPoint.x, aboutPoint.y).concat(scaleMatrix).concat(Matrix.translation(-aboutPoint.x, -aboutPoint.y));\n    }\n    return scaleMatrix;\n  };\n\n  Matrix.skew = function(skewX, skewY) {\n    return Matrix(0, Math.tan(skewY), Math.tan(skewX), 0);\n  };\n\n  Matrix.translate = Matrix.translation = function(tx, ty) {\n    return Matrix(1, 0, 0, 1, tx, ty);\n  };\n\n  isObject = function(object) {\n    return Object.prototype.toString.call(object) === \"[object Object]\";\n  };\n\n  frozen = function(object) {\n    if (typeof Object.freeze === \"function\") {\n      Object.freeze(object);\n    }\n    return object;\n  };\n\n  Matrix.IDENTITY = frozen(Matrix());\n\n  Matrix.HORIZONTAL_FLIP = frozen(Matrix(-1, 0, 0, 1));\n\n  Matrix.VERTICAL_FLIP = frozen(Matrix(1, 0, 0, -1));\n\n  module.exports = Matrix;\n\n}).call(this);\n\n//# sourceURL=matrix.coffee",
          "type": "blob"
        },
        "pixie": {
          "path": "pixie",
          "content": "module.exports = {\"version\":\"0.3.1\",\"entryPoint\":\"matrix\"};",
          "type": "blob"
        },
        "test/matrix": {
          "path": "test/matrix",
          "content": "(function() {\n  var Matrix, Point, equals, ok, test;\n\n  Matrix = require(\"../matrix\");\n\n  Point = require(\"../point\");\n\n  ok = assert;\n\n  equals = assert.equal;\n\n  test = it;\n\n  describe(\"Matrix\", function() {\n    var TOLERANCE, equalEnough, matrixEqual;\n    TOLERANCE = 0.00001;\n    equalEnough = function(expected, actual, tolerance, message) {\n      message || (message = \"\" + expected + \" within \" + tolerance + \" of \" + actual);\n      return ok(expected + tolerance >= actual && expected - tolerance <= actual, message);\n    };\n    matrixEqual = function(m1, m2) {\n      equalEnough(m1.a, m2.a, TOLERANCE);\n      equalEnough(m1.b, m2.b, TOLERANCE);\n      equalEnough(m1.c, m2.c, TOLERANCE);\n      equalEnough(m1.d, m2.d, TOLERANCE);\n      equalEnough(m1.tx, m2.tx, TOLERANCE);\n      return equalEnough(m1.ty, m2.ty, TOLERANCE);\n    };\n    test(\"copy constructor\", function() {\n      var matrix, matrix2;\n      matrix = Matrix(1, 0, 0, 1, 10, 12);\n      matrix2 = Matrix(matrix);\n      ok(matrix !== matrix2);\n      return matrixEqual(matrix2, matrix);\n    });\n    test(\"Matrix() (Identity)\", function() {\n      var matrix;\n      matrix = Matrix();\n      equals(matrix.a, 1, \"a\");\n      equals(matrix.b, 0, \"b\");\n      equals(matrix.c, 0, \"c\");\n      equals(matrix.d, 1, \"d\");\n      equals(matrix.tx, 0, \"tx\");\n      equals(matrix.ty, 0, \"ty\");\n      return matrixEqual(matrix, Matrix.IDENTITY);\n    });\n    test(\"Empty\", function() {\n      var matrix;\n      matrix = Matrix(0, 0, 0, 0, 0, 0);\n      equals(matrix.a, 0, \"a\");\n      equals(matrix.b, 0, \"b\");\n      equals(matrix.c, 0, \"c\");\n      equals(matrix.d, 0, \"d\");\n      equals(matrix.tx, 0, \"tx\");\n      return equals(matrix.ty, 0, \"ty\");\n    });\n    test(\"#copy\", function() {\n      var copyMatrix, matrix;\n      matrix = Matrix(2, 0, 0, 2);\n      copyMatrix = matrix.copy();\n      matrixEqual(copyMatrix, matrix);\n      copyMatrix.a = 4;\n      equals(copyMatrix.a, 4);\n      return equals(matrix.a, 2, \"Old 'a' value is unchanged\");\n    });\n    test(\".scale\", function() {\n      var matrix;\n      matrix = Matrix.scale(2, 2);\n      equals(matrix.a, 2, \"a\");\n      equals(matrix.b, 0, \"b\");\n      equals(matrix.c, 0, \"c\");\n      equals(matrix.d, 2, \"d\");\n      matrix = Matrix.scale(3);\n      equals(matrix.a, 3, \"a\");\n      equals(matrix.b, 0, \"b\");\n      equals(matrix.c, 0, \"c\");\n      return equals(matrix.d, 3, \"d\");\n    });\n    test(\".scale (about a point)\", function() {\n      var p, transformedPoint;\n      p = Point(5, 17);\n      transformedPoint = Matrix.scale(3, 7, p).transformPoint(p);\n      equals(transformedPoint.x, p.x, \"Point should remain the same\");\n      return equals(transformedPoint.y, p.y, \"Point should remain the same\");\n    });\n    test(\"#scale (about a point)\", function() {\n      var p, transformedPoint;\n      p = Point(3, 11);\n      transformedPoint = Matrix.IDENTITY.scale(3, 7, p).transformPoint(p);\n      equals(transformedPoint.x, p.x, \"Point should remain the same\");\n      return equals(transformedPoint.y, p.y, \"Point should remain the same\");\n    });\n    test(\"#skew\", function() {\n      var angle, matrix;\n      matrix = Matrix();\n      angle = 0.25 * Math.PI;\n      matrix = matrix.skew(angle, 0);\n      return equals(matrix.c, Math.tan(angle));\n    });\n    test(\".rotation\", function() {\n      var matrix;\n      matrix = Matrix.rotation(Math.PI / 2);\n      equalEnough(matrix.a, 0, TOLERANCE);\n      equalEnough(matrix.b, 1, TOLERANCE);\n      equalEnough(matrix.c, -1, TOLERANCE);\n      return equalEnough(matrix.d, 0, TOLERANCE);\n    });\n    test(\".rotation (about a point)\", function() {\n      var p, transformedPoint;\n      p = Point(11, 7);\n      transformedPoint = Matrix.rotation(Math.PI / 2, p).transformPoint(p);\n      equals(transformedPoint.x, p.x, \"Point should remain the same\");\n      return equals(transformedPoint.y, p.y, \"Point should remain the same\");\n    });\n    test(\"#rotate (about a point)\", function() {\n      var p, transformedPoint;\n      p = Point(8, 5);\n      transformedPoint = Matrix.IDENTITY.rotate(Math.PI / 2, p).transformPoint(p);\n      equals(transformedPoint.x, p.x, \"Point should remain the same\");\n      return equals(transformedPoint.y, p.y, \"Point should remain the same\");\n    });\n    test(\"#inverse (Identity)\", function() {\n      var matrix;\n      matrix = Matrix().inverse();\n      equals(matrix.a, 1, \"a\");\n      equals(matrix.b, 0, \"b\");\n      equals(matrix.c, 0, \"c\");\n      equals(matrix.d, 1, \"d\");\n      equals(matrix.tx, 0, \"tx\");\n      return equals(matrix.ty, 0, \"ty\");\n    });\n    test(\"#concat\", function() {\n      var matrix;\n      matrix = Matrix.rotation(Math.PI / 2).concat(Matrix.rotation(-Math.PI / 2));\n      return matrixEqual(matrix, Matrix.IDENTITY);\n    });\n    test(\"#toString\", function() {\n      var matrix;\n      matrix = Matrix(0.5, 2, 0.5, -2, 3, 4.5);\n      return matrixEqual(eval(matrix.toString()), matrix);\n    });\n    test(\"Maths\", function() {\n      var a, b, c;\n      a = Matrix(12, 3, 3, 1, 7, 9);\n      b = Matrix(3, 8, 3, 2, 1, 5);\n      c = a.concat(b);\n      equals(c.a, 60);\n      equals(c.b, 17);\n      equals(c.c, 42);\n      equals(c.d, 11);\n      equals(c.tx, 34);\n      return equals(c.ty, 17);\n    });\n    test(\"Order of transformations should match manual concat\", function() {\n      var m1, m2, s, theta, tx, ty;\n      tx = 10;\n      ty = 5;\n      theta = Math.PI / 3;\n      s = 2;\n      m1 = Matrix().translate(tx, ty).scale(s).rotate(theta);\n      m2 = Matrix().concat(Matrix.translation(tx, ty)).concat(Matrix.scale(s)).concat(Matrix.rotation(theta));\n      return matrixEqual(m1, m2);\n    });\n    return test(\"IDENTITY is immutable\", function() {\n      var identity;\n      identity = Matrix.IDENTITY;\n      identity.a = 5;\n      return equals(identity.a, 1);\n    });\n  });\n\n}).call(this);\n\n//# sourceURL=test/matrix.coffee",
          "type": "blob"
        },
        "point": {
          "path": "point",
          "content": "(function() {\n  module.exports = function(x, y) {\n    return {\n      x: x,\n      y: y\n    };\n  };\n\n}).call(this);\n\n//# sourceURL=point.coffee",
          "type": "blob"
        }
      },
      "progenitor": {
        "url": "http://strd6.github.io/editor/"
      },
      "version": "0.3.1",
      "entryPoint": "matrix",
      "repository": {
        "id": 13551996,
        "name": "matrix",
        "full_name": "distri/matrix",
        "owner": {
          "login": "distri",
          "id": 6005125,
          "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
          "gravatar_id": null,
          "url": "https://api.github.com/users/distri",
          "html_url": "https://github.com/distri",
          "followers_url": "https://api.github.com/users/distri/followers",
          "following_url": "https://api.github.com/users/distri/following{/other_user}",
          "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
          "organizations_url": "https://api.github.com/users/distri/orgs",
          "repos_url": "https://api.github.com/users/distri/repos",
          "events_url": "https://api.github.com/users/distri/events{/privacy}",
          "received_events_url": "https://api.github.com/users/distri/received_events",
          "type": "Organization",
          "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/distri/matrix",
        "description": "Where matrices become heroes, together.",
        "fork": false,
        "url": "https://api.github.com/repos/distri/matrix",
        "forks_url": "https://api.github.com/repos/distri/matrix/forks",
        "keys_url": "https://api.github.com/repos/distri/matrix/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/distri/matrix/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/distri/matrix/teams",
        "hooks_url": "https://api.github.com/repos/distri/matrix/hooks",
        "issue_events_url": "https://api.github.com/repos/distri/matrix/issues/events{/number}",
        "events_url": "https://api.github.com/repos/distri/matrix/events",
        "assignees_url": "https://api.github.com/repos/distri/matrix/assignees{/user}",
        "branches_url": "https://api.github.com/repos/distri/matrix/branches{/branch}",
        "tags_url": "https://api.github.com/repos/distri/matrix/tags",
        "blobs_url": "https://api.github.com/repos/distri/matrix/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/distri/matrix/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/distri/matrix/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/distri/matrix/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/distri/matrix/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/distri/matrix/languages",
        "stargazers_url": "https://api.github.com/repos/distri/matrix/stargazers",
        "contributors_url": "https://api.github.com/repos/distri/matrix/contributors",
        "subscribers_url": "https://api.github.com/repos/distri/matrix/subscribers",
        "subscription_url": "https://api.github.com/repos/distri/matrix/subscription",
        "commits_url": "https://api.github.com/repos/distri/matrix/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/distri/matrix/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/distri/matrix/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/distri/matrix/issues/comments/{number}",
        "contents_url": "https://api.github.com/repos/distri/matrix/contents/{+path}",
        "compare_url": "https://api.github.com/repos/distri/matrix/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/distri/matrix/merges",
        "archive_url": "https://api.github.com/repos/distri/matrix/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/distri/matrix/downloads",
        "issues_url": "https://api.github.com/repos/distri/matrix/issues{/number}",
        "pulls_url": "https://api.github.com/repos/distri/matrix/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/distri/matrix/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/distri/matrix/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/distri/matrix/labels{/name}",
        "releases_url": "https://api.github.com/repos/distri/matrix/releases{/id}",
        "created_at": "2013-10-14T03:46:16Z",
        "updated_at": "2013-12-23T23:45:28Z",
        "pushed_at": "2013-10-15T00:22:51Z",
        "git_url": "git://github.com/distri/matrix.git",
        "ssh_url": "git@github.com:distri/matrix.git",
        "clone_url": "https://github.com/distri/matrix.git",
        "svn_url": "https://github.com/distri/matrix",
        "homepage": null,
        "size": 580,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "CoffeeScript",
        "has_issues": true,
        "has_downloads": true,
        "has_wiki": true,
        "forks_count": 0,
        "mirror_url": null,
        "open_issues_count": 0,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master",
        "master_branch": "master",
        "permissions": {
          "admin": true,
          "push": true,
          "pull": true
        },
        "organization": {
          "login": "distri",
          "id": 6005125,
          "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
          "gravatar_id": null,
          "url": "https://api.github.com/users/distri",
          "html_url": "https://github.com/distri",
          "followers_url": "https://api.github.com/users/distri/followers",
          "following_url": "https://api.github.com/users/distri/following{/other_user}",
          "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
          "organizations_url": "https://api.github.com/users/distri/orgs",
          "repos_url": "https://api.github.com/users/distri/repos",
          "events_url": "https://api.github.com/users/distri/events{/privacy}",
          "received_events_url": "https://api.github.com/users/distri/received_events",
          "type": "Organization",
          "site_admin": false
        },
        "network_count": 0,
        "subscribers_count": 1,
        "branch": "v0.3.1",
        "defaultBranch": "master"
      },
      "dependencies": {}
    },
    "random": {
      "source": {
        "LICENSE": {
          "path": "LICENSE",
          "mode": "100644",
          "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
          "type": "blob"
        },
        "README.md": {
          "path": "README.md",
          "mode": "100644",
          "content": "random\n======\n\nRandom generation.\n",
          "type": "blob"
        },
        "pixie.cson": {
          "path": "pixie.cson",
          "mode": "100644",
          "content": "version: \"0.2.0\"\nentryPoint: \"random\"\n",
          "type": "blob"
        },
        "random.coffee.md": {
          "path": "random.coffee.md",
          "mode": "100644",
          "content": "Random\n======\n\nSome useful methods for generating random things.\n\nHelpers\n-------\n\n`τ` is the circle constant.\n\n    τ = 2 * Math.PI\n\n`U` returns a continuous uniform distribution between `min` and `max`.\n\n    U = (min, max) ->\n      ->\n        Math.random() * (max - min) + min\n\n`standardUniformDistribution` is the uniform distribution between [0, 1]\n\n    standardUniformDistribution = U(0, 1)\n\n`rand` is a helpful shortcut for generating random numbers from a standard\nuniform distribution or from a discreet set of integers.\n\n    rand = (n) ->\n      if n\n        Math.floor(n * standardUniformDistribution())\n      else\n        standardUniformDistribution()\n\nMethods\n-------\n\n    module.exports = Random =\n\nReturns a random angle, uniformly distributed, between 0 and τ.\n\n      angle: ->\n        rand() * τ\n\nA binomial distribution.\n\n      binomial: (n=1, p=0.5) ->\n        [0...n].map ->\n          if rand() < p\n            1\n          else\n            0\n        .reduce (a, b) ->\n          a + b\n        , 0\n\nReturns a random float between two numbers.\n\n      between: (min, max) ->\n        rand() * (max - min) + min\n\nReturns random integers from [0, n) if n is given.\nOtherwise returns random float between 0 and 1.\n\n      rand: rand\n\nReturns random float from [-n / 2, n / 2] if n is given.\nOtherwise returns random float between -0.5 and 0.5.\n\n      signed: (n=1) ->\n        (n * rand()) - (n / 2)\n",
          "type": "blob"
        },
        "test/random.coffee": {
          "path": "test/random.coffee",
          "mode": "100644",
          "content": "Random = require \"../random\"\n\nok = assert\nequals = assert.equal\ntest = it\n\ndescribe \"Random\", ->\n  \n  test \"methods\", ->\n    [\n      \"angle\"\n      \"binomial\"\n      \"between\"\n      \"rand\"\n      \"signed\"\n    ].forEach (name) ->\n      ok(Random[name], name)\n\n  it \"should have binomial\", ->\n    result = Random.binomial()\n\n    assert result is 1 or result is 0\n",
          "type": "blob"
        }
      },
      "distribution": {
        "pixie": {
          "path": "pixie",
          "content": "module.exports = {\"version\":\"0.2.0\",\"entryPoint\":\"random\"};",
          "type": "blob"
        },
        "random": {
          "path": "random",
          "content": "(function() {\n  var Random, U, rand, standardUniformDistribution, τ;\n\n  τ = 2 * Math.PI;\n\n  U = function(min, max) {\n    return function() {\n      return Math.random() * (max - min) + min;\n    };\n  };\n\n  standardUniformDistribution = U(0, 1);\n\n  rand = function(n) {\n    if (n) {\n      return Math.floor(n * standardUniformDistribution());\n    } else {\n      return standardUniformDistribution();\n    }\n  };\n\n  module.exports = Random = {\n    angle: function() {\n      return rand() * τ;\n    },\n    binomial: function(n, p) {\n      var _i, _results;\n      if (n == null) {\n        n = 1;\n      }\n      if (p == null) {\n        p = 0.5;\n      }\n      return (function() {\n        _results = [];\n        for (var _i = 0; 0 <= n ? _i < n : _i > n; 0 <= n ? _i++ : _i--){ _results.push(_i); }\n        return _results;\n      }).apply(this).map(function() {\n        if (rand() < p) {\n          return 1;\n        } else {\n          return 0;\n        }\n      }).reduce(function(a, b) {\n        return a + b;\n      }, 0);\n    },\n    between: function(min, max) {\n      return rand() * (max - min) + min;\n    },\n    rand: rand,\n    signed: function(n) {\n      if (n == null) {\n        n = 1;\n      }\n      return (n * rand()) - (n / 2);\n    }\n  };\n\n}).call(this);\n\n//# sourceURL=random.coffee",
          "type": "blob"
        },
        "test/random": {
          "path": "test/random",
          "content": "(function() {\n  var Random, equals, ok, test;\n\n  Random = require(\"../random\");\n\n  ok = assert;\n\n  equals = assert.equal;\n\n  test = it;\n\n  describe(\"Random\", function() {\n    test(\"methods\", function() {\n      return [\"angle\", \"binomial\", \"between\", \"rand\", \"signed\"].forEach(function(name) {\n        return ok(Random[name], name);\n      });\n    });\n    return it(\"should have binomial\", function() {\n      var result;\n      result = Random.binomial();\n      return assert(result === 1 || result === 0);\n    });\n  });\n\n}).call(this);\n\n//# sourceURL=test/random.coffee",
          "type": "blob"
        }
      },
      "progenitor": {
        "url": "http://strd6.github.io/editor/"
      },
      "version": "0.2.0",
      "entryPoint": "random",
      "repository": {
        "id": 13576812,
        "name": "random",
        "full_name": "distri/random",
        "owner": {
          "login": "distri",
          "id": 6005125,
          "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
          "gravatar_id": null,
          "url": "https://api.github.com/users/distri",
          "html_url": "https://github.com/distri",
          "followers_url": "https://api.github.com/users/distri/followers",
          "following_url": "https://api.github.com/users/distri/following{/other_user}",
          "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
          "organizations_url": "https://api.github.com/users/distri/orgs",
          "repos_url": "https://api.github.com/users/distri/repos",
          "events_url": "https://api.github.com/users/distri/events{/privacy}",
          "received_events_url": "https://api.github.com/users/distri/received_events",
          "type": "Organization",
          "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/distri/random",
        "description": "Random generation.",
        "fork": false,
        "url": "https://api.github.com/repos/distri/random",
        "forks_url": "https://api.github.com/repos/distri/random/forks",
        "keys_url": "https://api.github.com/repos/distri/random/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/distri/random/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/distri/random/teams",
        "hooks_url": "https://api.github.com/repos/distri/random/hooks",
        "issue_events_url": "https://api.github.com/repos/distri/random/issues/events{/number}",
        "events_url": "https://api.github.com/repos/distri/random/events",
        "assignees_url": "https://api.github.com/repos/distri/random/assignees{/user}",
        "branches_url": "https://api.github.com/repos/distri/random/branches{/branch}",
        "tags_url": "https://api.github.com/repos/distri/random/tags",
        "blobs_url": "https://api.github.com/repos/distri/random/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/distri/random/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/distri/random/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/distri/random/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/distri/random/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/distri/random/languages",
        "stargazers_url": "https://api.github.com/repos/distri/random/stargazers",
        "contributors_url": "https://api.github.com/repos/distri/random/contributors",
        "subscribers_url": "https://api.github.com/repos/distri/random/subscribers",
        "subscription_url": "https://api.github.com/repos/distri/random/subscription",
        "commits_url": "https://api.github.com/repos/distri/random/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/distri/random/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/distri/random/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/distri/random/issues/comments/{number}",
        "contents_url": "https://api.github.com/repos/distri/random/contents/{+path}",
        "compare_url": "https://api.github.com/repos/distri/random/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/distri/random/merges",
        "archive_url": "https://api.github.com/repos/distri/random/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/distri/random/downloads",
        "issues_url": "https://api.github.com/repos/distri/random/issues{/number}",
        "pulls_url": "https://api.github.com/repos/distri/random/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/distri/random/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/distri/random/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/distri/random/labels{/name}",
        "releases_url": "https://api.github.com/repos/distri/random/releases{/id}",
        "created_at": "2013-10-15T00:28:31Z",
        "updated_at": "2013-12-06T23:31:24Z",
        "pushed_at": "2013-10-15T01:01:00Z",
        "git_url": "git://github.com/distri/random.git",
        "ssh_url": "git@github.com:distri/random.git",
        "clone_url": "https://github.com/distri/random.git",
        "svn_url": "https://github.com/distri/random",
        "homepage": null,
        "size": 292,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "CoffeeScript",
        "has_issues": true,
        "has_downloads": true,
        "has_wiki": true,
        "forks_count": 0,
        "mirror_url": null,
        "open_issues_count": 0,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master",
        "master_branch": "master",
        "permissions": {
          "admin": true,
          "push": true,
          "pull": true
        },
        "organization": {
          "login": "distri",
          "id": 6005125,
          "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
          "gravatar_id": null,
          "url": "https://api.github.com/users/distri",
          "html_url": "https://github.com/distri",
          "followers_url": "https://api.github.com/users/distri/followers",
          "following_url": "https://api.github.com/users/distri/following{/other_user}",
          "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
          "organizations_url": "https://api.github.com/users/distri/orgs",
          "repos_url": "https://api.github.com/users/distri/repos",
          "events_url": "https://api.github.com/users/distri/events{/privacy}",
          "received_events_url": "https://api.github.com/users/distri/received_events",
          "type": "Organization",
          "site_admin": false
        },
        "network_count": 0,
        "subscribers_count": 1,
        "branch": "v0.2.0",
        "defaultBranch": "master"
      },
      "dependencies": {}
    },
    "size": {
      "source": {
        "LICENSE": {
          "path": "LICENSE",
          "content": "The MIT License (MIT)\n\nCopyright (c) 2014 \n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.",
          "mode": "100644",
          "type": "blob"
        },
        "README.md": {
          "path": "README.md",
          "content": "size\n====\n\n2d extent\n",
          "mode": "100644",
          "type": "blob"
        },
        "main.coffee.md": {
          "path": "main.coffee.md",
          "content": "Size\n====\n\nA simple 2d extent.\n\n    Size = (width, height) ->\n      if Array.isArray(width)\n        [width, height] = width\n      else if typeof width is \"object\"\n        {width, height} = width\n\n      width: width\n      height: height\n      __proto__: Size.prototype\n\n    Size.prototype =\n      copy: ->\n        Size(this)\n\n      scale: (scalar) ->\n        Size(@width * scalar, @height * scalar)\n\n      toString: ->\n        \"Size(#{@width}, #{@height})\"\n\n      max: (otherSize) ->\n        Size(\n          Math.max(@width, otherSize.width)\n          Math.max(@height, otherSize.height)\n        )\n\n      each: (iterator) ->\n        [0...@height].forEach (y) =>\n          [0...@width].forEach (x) ->\n            iterator(x, y)\n\n      inverse: ->\n        Size(1/@width, 1/@height)\n\n    module.exports = Size\n",
          "mode": "100644",
          "type": "blob"
        },
        "pixie.cson": {
          "path": "pixie.cson",
          "content": "version: \"0.1.4\"\n",
          "mode": "100644",
          "type": "blob"
        },
        "test/test.coffee": {
          "path": "test/test.coffee",
          "content": "Size = require \"../main\"\n\ndescribe \"Size\", ->\n  it \"should have a width and height\", ->\n    size = Size(10, 10)\n\n    assert.equal size.width, 10\n    assert.equal size.height, 10\n\n  it \"should be createable from an array\", ->\n    size = Size [5, 4]\n\n    assert.equal size.width, 5\n    assert.equal size.height, 4\n\n  it \"should be createable from an object\", ->\n    size = Size\n      width: 6\n      height: 7\n\n    assert.equal size.width, 6\n    assert.equal size.height, 7\n\n  it \"should iterate\", ->\n    size = Size(4, 5)\n    total = 0\n\n    size.each (x, y) ->\n      total += 1\n\n    assert.equal total, 20\n\n  it \"should have no iterations when empty\", ->\n    size = Size(0, 0)\n    total = 0\n\n    size.each (x, y) ->\n      total += 1\n\n    assert.equal total, 0\n",
          "mode": "100644",
          "type": "blob"
        }
      },
      "distribution": {
        "main": {
          "path": "main",
          "content": "(function() {\n  var Size;\n\n  Size = function(width, height) {\n    var _ref, _ref1;\n    if (Array.isArray(width)) {\n      _ref = width, width = _ref[0], height = _ref[1];\n    } else if (typeof width === \"object\") {\n      _ref1 = width, width = _ref1.width, height = _ref1.height;\n    }\n    return {\n      width: width,\n      height: height,\n      __proto__: Size.prototype\n    };\n  };\n\n  Size.prototype = {\n    copy: function() {\n      return Size(this);\n    },\n    scale: function(scalar) {\n      return Size(this.width * scalar, this.height * scalar);\n    },\n    toString: function() {\n      return \"Size(\" + this.width + \", \" + this.height + \")\";\n    },\n    max: function(otherSize) {\n      return Size(Math.max(this.width, otherSize.width), Math.max(this.height, otherSize.height));\n    },\n    each: function(iterator) {\n      var _i, _ref, _results;\n      return (function() {\n        _results = [];\n        for (var _i = 0, _ref = this.height; 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }\n        return _results;\n      }).apply(this).forEach((function(_this) {\n        return function(y) {\n          var _i, _ref, _results;\n          return (function() {\n            _results = [];\n            for (var _i = 0, _ref = _this.width; 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }\n            return _results;\n          }).apply(this).forEach(function(x) {\n            return iterator(x, y);\n          });\n        };\n      })(this));\n    },\n    inverse: function() {\n      return Size(1 / this.width, 1 / this.height);\n    }\n  };\n\n  module.exports = Size;\n\n}).call(this);\n",
          "type": "blob"
        },
        "pixie": {
          "path": "pixie",
          "content": "module.exports = {\"version\":\"0.1.4\"};",
          "type": "blob"
        },
        "test/test": {
          "path": "test/test",
          "content": "(function() {\n  var Size;\n\n  Size = require(\"../main\");\n\n  describe(\"Size\", function() {\n    it(\"should have a width and height\", function() {\n      var size;\n      size = Size(10, 10);\n      assert.equal(size.width, 10);\n      return assert.equal(size.height, 10);\n    });\n    it(\"should be createable from an array\", function() {\n      var size;\n      size = Size([5, 4]);\n      assert.equal(size.width, 5);\n      return assert.equal(size.height, 4);\n    });\n    it(\"should be createable from an object\", function() {\n      var size;\n      size = Size({\n        width: 6,\n        height: 7\n      });\n      assert.equal(size.width, 6);\n      return assert.equal(size.height, 7);\n    });\n    it(\"should iterate\", function() {\n      var size, total;\n      size = Size(4, 5);\n      total = 0;\n      size.each(function(x, y) {\n        return total += 1;\n      });\n      return assert.equal(total, 20);\n    });\n    return it(\"should have no iterations when empty\", function() {\n      var size, total;\n      size = Size(0, 0);\n      total = 0;\n      size.each(function(x, y) {\n        return total += 1;\n      });\n      return assert.equal(total, 0);\n    });\n  });\n\n}).call(this);\n",
          "type": "blob"
        }
      },
      "progenitor": {
        "url": "http://www.danielx.net/editor/"
      },
      "version": "0.1.4",
      "entryPoint": "main",
      "repository": {
        "branch": "v0.1.4",
        "default_branch": "master",
        "full_name": "distri/size",
        "homepage": null,
        "description": "2d extent",
        "html_url": "https://github.com/distri/size",
        "url": "https://api.github.com/repos/distri/size",
        "publishBranch": "gh-pages"
      },
      "dependencies": {}
    }
  }
});