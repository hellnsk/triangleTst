import { Injectable } from '@angular/core';

@Injectable()

export class TriangleService {
    public rets: Array<any> = ["scalene", "isosceles", "equilateral", "invalid"];
    public allowedTypes: Array<any> = ["number", "string"]
    TriangleCheck  = function (sides: Array<any>){
        var i: any = 0,
            prev_sides: Array<any> = [],
            ret: number = 0;
        for(i in sides){
          if( this.TriangleSideInvalid(sides[i]) ){
            ret = 3;
            break;
          }
          sides[i] = parseInt(sides[i]);
          ret += ((-1 < prev_sides.indexOf(sides[i])) ? 1 : 0);
          prev_sides[prev_sides.length] = sides[i];
        }
        if (ret != 3){
          this.TriangleInvalid(sides) && (ret = 3);
        }
        return this.rets[ret];
    }
    TriangleInvalid = function (sides: Array<any>){
        return (sides[0] + sides[1] < sides[2]) || (sides[0] + sides[2] < sides[1]) || (sides[1] + sides[2] < sides[0]);
    }
    TriangleSideInvalid = function (side: <any>){
        return (isNaN(side) || ( -1 == this.allowedTypes.indexOf(typeof(side)) || (parseInt(side) <= 0);
    }
}
