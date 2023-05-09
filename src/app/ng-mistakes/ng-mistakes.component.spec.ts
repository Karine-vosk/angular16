import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMistakesComponent } from './ng-mistakes.component';

describe('NgMistakesComponent', () => {
  let component: NgMistakesComponent;
  let fixture: ComponentFixture<NgMistakesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgMistakesComponent]
    });
    fixture = TestBed.createComponent(NgMistakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
