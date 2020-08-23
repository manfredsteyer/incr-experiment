import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component15Component } from './feature78-component15.component';

describe('Feature78Component15Component', () => {
  let component: Feature78Component15Component;
  let fixture: ComponentFixture<Feature78Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature78Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
