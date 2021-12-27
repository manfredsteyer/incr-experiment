import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component15Component } from './feature83-component15.component';

describe('Feature83Component15Component', () => {
  let component: Feature83Component15Component;
  let fixture: ComponentFixture<Feature83Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature83Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
