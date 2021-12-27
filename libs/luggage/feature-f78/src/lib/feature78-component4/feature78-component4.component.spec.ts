import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component4Component } from './feature78-component4.component';

describe('Feature78Component4Component', () => {
  let component: Feature78Component4Component;
  let fixture: ComponentFixture<Feature78Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature78Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
