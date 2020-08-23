import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component16Component } from './feature13-component16.component';

describe('Feature13Component16Component', () => {
  let component: Feature13Component16Component;
  let fixture: ComponentFixture<Feature13Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature13Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
