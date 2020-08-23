import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component6Component } from './feature19-component6.component';

describe('Feature19Component6Component', () => {
  let component: Feature19Component6Component;
  let fixture: ComponentFixture<Feature19Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature19Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
