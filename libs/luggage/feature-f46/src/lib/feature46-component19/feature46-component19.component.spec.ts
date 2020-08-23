import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component19Component } from './feature46-component19.component';

describe('Feature46Component19Component', () => {
  let component: Feature46Component19Component;
  let fixture: ComponentFixture<Feature46Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature46Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
