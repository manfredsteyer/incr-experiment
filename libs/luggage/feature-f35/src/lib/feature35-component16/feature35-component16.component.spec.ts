import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component16Component } from './feature35-component16.component';

describe('Feature35Component16Component', () => {
  let component: Feature35Component16Component;
  let fixture: ComponentFixture<Feature35Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature35Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
