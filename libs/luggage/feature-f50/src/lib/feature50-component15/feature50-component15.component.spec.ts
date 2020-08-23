import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component15Component } from './feature50-component15.component';

describe('Feature50Component15Component', () => {
  let component: Feature50Component15Component;
  let fixture: ComponentFixture<Feature50Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature50Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
