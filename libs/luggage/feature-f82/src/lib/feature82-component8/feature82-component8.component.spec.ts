import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component8Component } from './feature82-component8.component';

describe('Feature82Component8Component', () => {
  let component: Feature82Component8Component;
  let fixture: ComponentFixture<Feature82Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature82Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
