import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component4Component } from './feature48-component4.component';

describe('Feature48Component4Component', () => {
  let component: Feature48Component4Component;
  let fixture: ComponentFixture<Feature48Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature48Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
