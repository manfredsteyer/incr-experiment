import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component26Component } from './feature35-component26.component';

describe('Feature35Component26Component', () => {
  let component: Feature35Component26Component;
  let fixture: ComponentFixture<Feature35Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature35Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
