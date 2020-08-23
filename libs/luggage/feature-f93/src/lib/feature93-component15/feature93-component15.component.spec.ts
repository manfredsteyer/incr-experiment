import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component15Component } from './feature93-component15.component';

describe('Feature93Component15Component', () => {
  let component: Feature93Component15Component;
  let fixture: ComponentFixture<Feature93Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature93Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
