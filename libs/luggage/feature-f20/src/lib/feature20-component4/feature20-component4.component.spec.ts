import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component4Component } from './feature20-component4.component';

describe('Feature20Component4Component', () => {
  let component: Feature20Component4Component;
  let fixture: ComponentFixture<Feature20Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature20Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
