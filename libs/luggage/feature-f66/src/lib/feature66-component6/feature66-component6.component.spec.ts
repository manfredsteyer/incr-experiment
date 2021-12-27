import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component6Component } from './feature66-component6.component';

describe('Feature66Component6Component', () => {
  let component: Feature66Component6Component;
  let fixture: ComponentFixture<Feature66Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature66Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
