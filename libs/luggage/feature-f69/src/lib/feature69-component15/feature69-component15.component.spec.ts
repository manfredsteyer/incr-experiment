import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component15Component } from './feature69-component15.component';

describe('Feature69Component15Component', () => {
  let component: Feature69Component15Component;
  let fixture: ComponentFixture<Feature69Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature69Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
