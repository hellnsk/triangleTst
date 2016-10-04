import { Component } from '@angular/core';
import { TriangleService } from './triangle.service';

@Component({
    selector: 'triangle',
    template: `<h2>{{title}}</h2>
    <h3>Triangle sides:</h3>
    <ul>
    <li *ngFor="let side of sides; let i=index;">
    [{{i}}]: <input [(ngModel)]="sides[i]" (blur)="checkTriangle()" (input)="checkTriangle()" (keyup)="simpleCheck($event)"> {{side}}
    </li>
    </ul>
    <h3>Result: {{triangleCheckResult}}</h3>
    `,
})
export class AppComponent {
    public title: String = 'Triangle check';
    public sides: Array<any> = [0,0,0];
    public triangleCheckResult: String = '';
    private triangleService: TriangleService;
    private sidePattern = new RegExp('[0-9\t\n\r\v]+');
    private allowedKeyCodes = [8,9,37,38,39,40,46];

    constructor(triangleService:TriangleService){
        this.triangleService = triangleService;
        this.sidePattern = new RegExp('[0-9\t\n\r\v]+');
        this.allowedKeyCodes = [8,9,37,38,39,40,46];
        this.checkTriangle();
    }

    checkTriangle(){
        console.dir('checkTriangle');
        console.dir(this.sides);
        this.triangleCheckResult = this.triangleService.TriangleCheck(this.sides);
        console.dir(this.triangleCheckResult);
    }

    /* Just to do not import full pack of Validators */
    simpleCheck(event: KeyboardEvent){
        console.dir(event);
        let ret = ((-1 < this.allowedKeyCodes.indexOf(event.keyCode)) || this.sidePattern.test(event.key));
        return ret;
    }
}