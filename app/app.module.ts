import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { TriangleService } from './triangle.service';
import { AppComponent }  from './app.component';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ AppComponent ],
    providers: [ TriangleService ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }