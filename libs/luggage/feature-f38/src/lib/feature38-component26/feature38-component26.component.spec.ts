import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component26Component } from './feature38-component26.component';

describe('Feature38Component26Component', () => {
  let component: Feature38Component26Component;
  let fixture: ComponentFixture<Feature38Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature38Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
