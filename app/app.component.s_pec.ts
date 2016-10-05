
import { AppComponent } from './app.component';

import { TestBed }      from '@angular/core/testing';

import { By }           from '@angular/platform-browser';


describe('AppComponent common test', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [AppComponent]});
  });

  it('Check if app component instantiates correctly', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });

  it('Check if index.html appears by testing its <h1> text', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    let h1 = fixture.debugElement.query(By.css('h1')).nativeElement;

    expect(h1.innerText).toMatch(/Triangle/i, '<h1> must appear and contain "Triangle" word');
  });

it('Check if app component template appears by testing its <h2> text', () => {
  let fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();

  let h2 = fixture.debugElement.query(By.css('h2')).nativeElement;

  expect(h2.innerText).toMatch(/Triangle/i, '<h2> must appear and contain "Triangle" word');
});

});
