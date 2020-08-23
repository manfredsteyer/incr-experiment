import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component19Component } from './feature12-component19.component';

describe('Feature12Component19Component', () => {
  let component: Feature12Component19Component;
  let fixture: ComponentFixture<Feature12Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature12Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
