import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component19Component } from './feature67-component19.component';

describe('Feature67Component19Component', () => {
  let component: Feature67Component19Component;
  let fixture: ComponentFixture<Feature67Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature67Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
