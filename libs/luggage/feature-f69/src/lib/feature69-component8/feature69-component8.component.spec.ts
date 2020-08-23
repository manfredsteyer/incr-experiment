import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component8Component } from './feature69-component8.component';

describe('Feature69Component8Component', () => {
  let component: Feature69Component8Component;
  let fixture: ComponentFixture<Feature69Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature69Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
