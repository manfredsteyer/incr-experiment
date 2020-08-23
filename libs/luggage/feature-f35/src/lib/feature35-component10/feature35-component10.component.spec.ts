import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component10Component } from './feature35-component10.component';

describe('Feature35Component10Component', () => {
  let component: Feature35Component10Component;
  let fixture: ComponentFixture<Feature35Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature35Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
