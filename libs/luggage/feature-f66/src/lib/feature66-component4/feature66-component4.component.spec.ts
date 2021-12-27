import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component4Component } from './feature66-component4.component';

describe('Feature66Component4Component', () => {
  let component: Feature66Component4Component;
  let fixture: ComponentFixture<Feature66Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature66Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
