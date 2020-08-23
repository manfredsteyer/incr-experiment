import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component19Component } from './feature76-component19.component';

describe('Feature76Component19Component', () => {
  let component: Feature76Component19Component;
  let fixture: ComponentFixture<Feature76Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature76Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
