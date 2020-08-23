import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component15Component } from './feature19-component15.component';

describe('Feature19Component15Component', () => {
  let component: Feature19Component15Component;
  let fixture: ComponentFixture<Feature19Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature19Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
