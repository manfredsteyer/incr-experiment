import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component8Component } from './feature48-component8.component';

describe('Feature48Component8Component', () => {
  let component: Feature48Component8Component;
  let fixture: ComponentFixture<Feature48Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature48Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
