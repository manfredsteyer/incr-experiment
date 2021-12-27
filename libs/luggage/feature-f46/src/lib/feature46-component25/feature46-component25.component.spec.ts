import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component25Component } from './feature46-component25.component';

describe('Feature46Component25Component', () => {
  let component: Feature46Component25Component;
  let fixture: ComponentFixture<Feature46Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature46Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
