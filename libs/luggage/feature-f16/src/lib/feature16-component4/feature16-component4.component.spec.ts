import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component4Component } from './feature16-component4.component';

describe('Feature16Component4Component', () => {
  let component: Feature16Component4Component;
  let fixture: ComponentFixture<Feature16Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature16Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
