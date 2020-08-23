import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component4Component } from './feature24-component4.component';

describe('Feature24Component4Component', () => {
  let component: Feature24Component4Component;
  let fixture: ComponentFixture<Feature24Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature24Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
