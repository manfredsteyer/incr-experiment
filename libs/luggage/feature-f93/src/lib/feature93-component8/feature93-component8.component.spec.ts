import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component8Component } from './feature93-component8.component';

describe('Feature93Component8Component', () => {
  let component: Feature93Component8Component;
  let fixture: ComponentFixture<Feature93Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature93Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
