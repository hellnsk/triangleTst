

import { TriangleService } from './triangle.service';

describe('Triangle checking tests', () => {
    var triangleService = new TriangleService();

    it('Equilateral(3,3,3)', () => expect(triangleService.TriangleCheck([3,3,3])).toBe('equilateral'));
    it('Isosceles(2,2,3)', () => expect(triangleService.TriangleCheck([2,2,3])).toBe('isosceles'));
    it('Scalene(2,3,4)', () => expect(triangleService.TriangleCheck([2,3,4])).toBe('scalene'));
    it('Invalid(1,2,8)', () => expect(triangleService.TriangleCheck([1,2,8])).toBe('invalid'));
});
