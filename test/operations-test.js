const buster = require("buster");
const OE     = require("../");

buster.testCase("Operations - (+) Add", {
    setUp: () => this.OE = new OE(),

    "simple": () => buster.assert.equals(this.OE.evaluate("1 + 1"), 2),
    "large":  () => buster.assert.equals(this.OE.evaluate("2147483647 + 2147483647"), 4294967294),
    "float":  () => buster.assert.equals(this.OE.evaluate("0.56 + 0.56"), 1.12)
});

buster.testCase("Operations - (-) Subtract", {
    setUp: () => this.OE = new OE(),

    "simple": () => buster.assert.equals(this.OE.evaluate("5 - 2"), 3),
    "large":  () => buster.assert.equals(this.OE.evaluate("4294967294 - 2147483647"), 2147483647),
    "float":  () => buster.assert.equals(this.OE.evaluate("1.6 - 0.5"), 1.1)
});

buster.testCase("Operations - (*) Multiply", {
    setUp: () => this.OE = new OE(),

    "simple": () => buster.assert.equals(this.OE.evaluate("12 * 12"), 144),
    "large":  () => buster.assert.equals(this.OE.evaluate("65535 * 65535"), 4294836225),
    "float":  () => buster.assert.equals(this.OE.evaluate("0.12 * 3.21"), 0.3852)
});

buster.testCase("Operations - (/) Divide", {
    setUp: () => this.OE = new OE(),

    "simple": () => buster.assert.equals(this.OE.evaluate("9 / 3"), 3),
    "large":  () => buster.assert.equals(this.OE.evaluate("4294836225 / 65535"), 65535),
    "float":  () => buster.assert.equals(this.OE.evaluate("17.408 / 3.4"), 5.12)
});

buster.testCase("Operations - (&&) AND", {
    setUp: () => this.OE = new OE(),

    "true AND true":   () => buster.assert.equals(this.OE.evaluate("true && true"), true),
    "true AND false":  () => buster.assert.equals(this.OE.evaluate("true && false"), false),
    "false AND false": () => buster.assert.equals(this.OE.evaluate("false && false"), false)
});

buster.testCase("Operations - (||) OR", {
    setUp: () => this.OE = new OE(),

    "true OR true":   () => buster.assert.equals(this.OE.evaluate("true || true"), true),
    "true OR false":  () => buster.assert.equals(this.OE.evaluate("true || false"), true),
    "false OR false":  () => buster.assert.equals(this.OE.evaluate("false || false"), false)
});
