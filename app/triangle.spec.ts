

import { TriangleService } from './triangle.service';

describe('Triangle checking tests: valid cases', () => {

    var triangleService = new TriangleService();

    it('Equilateral(3,3,3)', () => expect(triangleService.TriangleCheck([3, 3, 3])).toBe('equilateral'));

    it('Isosceles(2,2,3)', () => expect(triangleService.TriangleCheck([2, 2, 3])).toBe('isosceles'));

    it('Scalene(2,3,4)', () => expect(triangleService.TriangleCheck([2, 3, 4])).toBe('scalene'));

    it('Valid isosceles with js-convertable types of sides lengths("2", "2","1")', function () { return expect(triangleService.TriangleCheck(["2", "2","1"])).toBe('isosceles'); });

});

describe('Triangle checking tests: invalid cases with incorrect sides lengths', () => {

    var triangleService = new TriangleService();

    it('Invalid: zero-length side(0, 3, 3)', function () {
        return expect(triangleService.TriangleCheck([0, 3, 3])).toBe('invalid');
    });

    it('Invalid: negative-length side(3, -1, 3)', function () {
        return expect(triangleService.TriangleCheck([3, -1, 3])).toBe('invalid');
    });

    it('Invalid: zero-length and negative-length sides(0, -1, 8)', function () {
        return expect(triangleService.TriangleCheck([0, -1, 8])).toBe('invalid');
    });

});

describe('Triangle checking tests: invalid cases with incorrect types of sides lengths', () => {

    var triangleService = new TriangleService();

    it('Invalid: (null, 1,1)', function () { return expect(triangleService.TriangleCheck([null, 1,1])).toBe('invalid'); });

    it('Invalid: (NaN, 1, 1)', function () { return expect(triangleService.TriangleCheck([NaN, 1, 1])).toBe('invalid'); });

    it('Invalid: (undefined, 1, 1)', function () { return expect(triangleService.TriangleCheck([undefined, 1, 1])).toBe('invalid'); });

    it('Invalid: (false, 1, 1)', function () { return expect(triangleService.TriangleCheck([false, 1, 1])).toBe('invalid'); });

    it('Invalid: (true, 1, 1)', function () { return expect(triangleService.TriangleCheck([true, 1, 1])).toBe('invalid'); });

});

describe('Triangle checking tests: invalid cases with other cases', () => {

    var triangleService = new TriangleService();


    it('Invalid with incorrect sides count: square(2, 2, 2, 2)', function () {
        return expect(triangleService.TriangleCheck([2, 2, 2, 2])).toBe('invalid');
    });

    it('Invalid with incorrect sides count: angle(2, 2)', function () {
        return expect(triangleService.TriangleCheck([2, 2])).toBe('invalid');
    });

    it('Invalid with impossible sides lengths combination(1,2,8)', () => expect(triangleService.TriangleCheck([1, 2, 8])).toBe('invalid'));

});
