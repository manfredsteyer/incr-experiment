import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component15Component } from './feature35-component15.component';

describe('Feature35Component15Component', () => {
  let component: Feature35Component15Component;
  let fixture: ComponentFixture<Feature35Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature35Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
