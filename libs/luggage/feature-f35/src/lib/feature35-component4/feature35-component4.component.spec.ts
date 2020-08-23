import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component4Component } from './feature35-component4.component';

describe('Feature35Component4Component', () => {
  let component: Feature35Component4Component;
  let fixture: ComponentFixture<Feature35Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature35Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
