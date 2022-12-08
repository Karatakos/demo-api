import { assert } from 'chai';

import { fib } from '../lib/fib';

describe("Fibonacci tests", () => {
    it("should return 3 if sequence 4 requested", () => {
        assert.equal(fib(4), 3);
    });

    it("should return 5 if sequence 5 requested", () => {
        assert.equal(fib(5), 5);
    });

    it("should return 21 if sequence 8 requested", () => {
        assert.equal(fib(8), 21);
    });
});