import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component13Component } from './feature26-component13.component';

describe('Feature26Component13Component', () => {
  let component: Feature26Component13Component;
  let fixture: ComponentFixture<Feature26Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature26Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
