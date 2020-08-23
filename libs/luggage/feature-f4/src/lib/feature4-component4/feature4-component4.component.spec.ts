import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component4Component } from './feature4-component4.component';

describe('Feature4Component4Component', () => {
  let component: Feature4Component4Component;
  let fixture: ComponentFixture<Feature4Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature4Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
