import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component25Component } from './feature38-component25.component';

describe('Feature38Component25Component', () => {
  let component: Feature38Component25Component;
  let fixture: ComponentFixture<Feature38Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature38Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
