import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component25Component } from './feature25-component25.component';

describe('Feature25Component25Component', () => {
  let component: Feature25Component25Component;
  let fixture: ComponentFixture<Feature25Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature25Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
