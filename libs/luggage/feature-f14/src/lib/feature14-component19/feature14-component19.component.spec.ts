import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component19Component } from './feature14-component19.component';

describe('Feature14Component19Component', () => {
  let component: Feature14Component19Component;
  let fixture: ComponentFixture<Feature14Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature14Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
