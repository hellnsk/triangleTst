

import { TriangleService } from './triangle.service';

describe('Triangle checking tests', () => {

    var triangleService = new TriangleService();

    it('Equilateral(3,3,3)', () => expect(triangleService.TriangleCheck([3,3,3])).toBe('equilateral'));

    it('Isosceles(2,2,3)', () => expect(triangleService.TriangleCheck([2,2,3])).toBe('isosceles'));

    it('Scalene(2,3,4)', () => expect(triangleService.TriangleCheck([2,3,4])).toBe('scalene'));

    it('Invalid with incorrect sides count(2, 2, 2, 2)', function () { return expect(triangleService.TriangleCheck([2, 2, 2, 2])).toBe('invalid'); });

    it('Invalid with impossible sides lengths combination(1,2,8)', () => expect(triangleService.TriangleCheck([1,2,8])).toBe('invalid'));

    it('Invalid with incorrect sides lengths: zero-length side(0, 3, 3)', function () { return expect(triangleService.TriangleCheck([0, 3, 3])).toBe('invalid'); });

    it('Invalid with incorrect sides lengths: negative-length side(3, -1, 3)', function () { return expect(triangleService.TriangleCheck([3, -1, 3])).toBe('invalid'); });

    it('Invalid with incorrect sides lengths: zero-length and negative-length sides(0, -1, 8)', function () { return expect(triangleService.TriangleCheck([0, -1, 8])).toBe('invalid'); });

    it('Valid isosceles with js-convertable types of sides lengths("2", "2","1")', function () { return expect(triangleService.TriangleCheck(["2", "2","1"])).toBe('isosceles'); });

    it('Invalid with incorrect types of sides lengths(null, 1,1)', function () { return expect(triangleService.TriangleCheck([null, 1,1])).toBe('invalid'); });

    it('Invalid with incorrect types of sides lengths(NaN, 1, 1)', function () { return expect(triangleService.TriangleCheck([NaN, 1, 1])).toBe('invalid'); });

    it('Invalid with incorrect types of sides lengths(undefined, 1, 1)', function () { return expect(triangleService.TriangleCheck([undefined, 1, 1])).toBe('invalid'); });

    it('Invalid with incorrect types of sides lengths(false, 1, 1)', function () { return expect(triangleService.TriangleCheck([false, 1, 1])).toBe('invalid'); });

    it('Invalid with incorrect types of sides lengths(true, 1, 1)', function () { return expect(triangleService.TriangleCheck([true, 1, 1])).toBe('invalid'); });

});
