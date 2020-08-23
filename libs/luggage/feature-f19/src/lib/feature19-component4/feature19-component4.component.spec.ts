import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component4Component } from './feature19-component4.component';

describe('Feature19Component4Component', () => {
  let component: Feature19Component4Component;
  let fixture: ComponentFixture<Feature19Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature19Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
