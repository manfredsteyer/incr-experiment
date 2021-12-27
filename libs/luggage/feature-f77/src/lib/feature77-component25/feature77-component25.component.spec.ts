import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component25Component } from './feature77-component25.component';

describe('Feature77Component25Component', () => {
  let component: Feature77Component25Component;
  let fixture: ComponentFixture<Feature77Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature77Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
