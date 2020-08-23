import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component4Component } from './feature25-component4.component';

describe('Feature25Component4Component', () => {
  let component: Feature25Component4Component;
  let fixture: ComponentFixture<Feature25Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature25Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
