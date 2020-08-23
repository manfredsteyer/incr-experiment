import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component8Component } from './feature35-component8.component';

describe('Feature35Component8Component', () => {
  let component: Feature35Component8Component;
  let fixture: ComponentFixture<Feature35Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature35Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
