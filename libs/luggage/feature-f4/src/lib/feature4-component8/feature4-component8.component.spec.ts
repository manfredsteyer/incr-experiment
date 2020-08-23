import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component8Component } from './feature4-component8.component';

describe('Feature4Component8Component', () => {
  let component: Feature4Component8Component;
  let fixture: ComponentFixture<Feature4Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature4Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
