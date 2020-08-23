import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component19Component } from './feature55-component19.component';

describe('Feature55Component19Component', () => {
  let component: Feature55Component19Component;
  let fixture: ComponentFixture<Feature55Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature55Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
