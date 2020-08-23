import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component4Component } from './feature95-component4.component';

describe('Feature95Component4Component', () => {
  let component: Feature95Component4Component;
  let fixture: ComponentFixture<Feature95Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature95Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
