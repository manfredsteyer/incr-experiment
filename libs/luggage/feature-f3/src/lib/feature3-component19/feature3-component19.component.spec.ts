import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component19Component } from './feature3-component19.component';

describe('Feature3Component19Component', () => {
  let component: Feature3Component19Component;
  let fixture: ComponentFixture<Feature3Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature3Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
