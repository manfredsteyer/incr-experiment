import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component15Component } from './feature92-component15.component';

describe('Feature92Component15Component', () => {
  let component: Feature92Component15Component;
  let fixture: ComponentFixture<Feature92Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature92Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
