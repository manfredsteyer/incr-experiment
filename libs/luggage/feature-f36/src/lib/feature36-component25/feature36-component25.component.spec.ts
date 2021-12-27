import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component25Component } from './feature36-component25.component';

describe('Feature36Component25Component', () => {
  let component: Feature36Component25Component;
  let fixture: ComponentFixture<Feature36Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature36Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
