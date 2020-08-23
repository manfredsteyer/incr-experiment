import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component19Component } from './feature44-component19.component';

describe('Feature44Component19Component', () => {
  let component: Feature44Component19Component;
  let fixture: ComponentFixture<Feature44Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature44Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
