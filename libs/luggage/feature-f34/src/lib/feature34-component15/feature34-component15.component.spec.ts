import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component15Component } from './feature34-component15.component';

describe('Feature34Component15Component', () => {
  let component: Feature34Component15Component;
  let fixture: ComponentFixture<Feature34Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature34Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
