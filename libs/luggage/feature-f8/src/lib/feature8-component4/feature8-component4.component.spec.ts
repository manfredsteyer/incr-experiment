import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component4Component } from './feature8-component4.component';

describe('Feature8Component4Component', () => {
  let component: Feature8Component4Component;
  let fixture: ComponentFixture<Feature8Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature8Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
