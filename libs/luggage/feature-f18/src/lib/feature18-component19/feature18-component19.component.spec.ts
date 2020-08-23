import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component19Component } from './feature18-component19.component';

describe('Feature18Component19Component', () => {
  let component: Feature18Component19Component;
  let fixture: ComponentFixture<Feature18Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature18Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
