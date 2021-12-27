import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component16Component } from './feature66-component16.component';

describe('Feature66Component16Component', () => {
  let component: Feature66Component16Component;
  let fixture: ComponentFixture<Feature66Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature66Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
