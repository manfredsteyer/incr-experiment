import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component4Component } from './feature93-component4.component';

describe('Feature93Component4Component', () => {
  let component: Feature93Component4Component;
  let fixture: ComponentFixture<Feature93Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature93Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
