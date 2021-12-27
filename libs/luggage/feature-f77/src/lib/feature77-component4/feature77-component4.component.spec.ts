import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component4Component } from './feature77-component4.component';

describe('Feature77Component4Component', () => {
  let component: Feature77Component4Component;
  let fixture: ComponentFixture<Feature77Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature77Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
