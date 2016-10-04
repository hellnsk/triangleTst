import { Injectable } from '@angular/core';

@Injectable()

export class TriangleService {
    public rets: Array<any> = ["scalene", "isosceles", "equilateral", "invalid"];
    TriangleCheck  = function (sides: Array<any>){
        var i: any = 0,
            prev_sides: Array<any> = [],
            ret: number = 0;
        for(i in sides){
            sides[i] = parseInt(sides[i]);
            ret += ((-1 < prev_sides.indexOf(sides[i])) ? 1 : 0);
            prev_sides[prev_sides.length] = sides[i];
        }
        this.TriangleInvalid(sides) && (ret = 3);
        return this.rets[ret];
    }
    TriangleInvalid = function (sides: Array<any>){
        return (sides[0] + sides[1] < sides[2]) || (sides[0] + sides[2] < sides[1]) || (sides[1] + sides[2] < sides[0]);
    }
}