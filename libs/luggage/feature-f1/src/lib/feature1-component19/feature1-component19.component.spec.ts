import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component19Component } from './feature1-component19.component';

describe('Feature1Component19Component', () => {
  let component: Feature1Component19Component;
  let fixture: ComponentFixture<Feature1Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
