import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component4Component } from './feature61-component4.component';

describe('Feature61Component4Component', () => {
  let component: Feature61Component4Component;
  let fixture: ComponentFixture<Feature61Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature61Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});