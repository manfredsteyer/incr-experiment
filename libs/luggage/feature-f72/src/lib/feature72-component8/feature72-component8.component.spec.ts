import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component8Component } from './feature72-component8.component';

describe('Feature72Component8Component', () => {
  let component: Feature72Component8Component;
  let fixture: ComponentFixture<Feature72Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature72Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
