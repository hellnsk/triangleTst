import { Component } from '@angular/core';
import { TriangleService } from './triangle.service';

@Component({
    selector: 'triangle',
    template: `<h2>{{title}}</h2>
    <h3>Triangle sides:</h3>
    <ul>
    <li *ngFor="let side of sides; let i=index;">
    [{{i}}]: <input type="number" maxlength="10" pattern="[0-9]+\.?[0-9]*" [(ngModel)]="sides[i]" (input)="checkTriangle()"> {{side}}
    </li>
    </ul>
    <p>Result: {{triangleCheckResult}}</p>
    `,
})
export class AppComponent {
    public title: String = 'Triangle check';
    public sides: Array<any> = [0,0,0];
    public triangleCheckResult: String = '';
    private triangleService: TriangleService;

    constructor(triangleService:TriangleService){
        this.triangleService = triangleService;
        this.checkTriangle();
    }

    checkTriangle(){
        console.dir('checkTriangle');
        console.dir(this.sides);
        this.triangleCheckResult = this.triangleService.TriangleCheck(this.sides);
        console.dir(this.triangleCheckResult);
    }

}
