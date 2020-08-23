import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component4Component } from './feature13-component4.component';

describe('Feature13Component4Component', () => {
  let component: Feature13Component4Component;
  let fixture: ComponentFixture<Feature13Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature13Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
