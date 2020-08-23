import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component19Component } from './feature17-component19.component';

describe('Feature17Component19Component', () => {
  let component: Feature17Component19Component;
  let fixture: ComponentFixture<Feature17Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature17Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
