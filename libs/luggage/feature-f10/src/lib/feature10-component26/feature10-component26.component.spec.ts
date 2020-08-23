import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component26Component } from './feature10-component26.component';

describe('Feature10Component26Component', () => {
  let component: Feature10Component26Component;
  let fixture: ComponentFixture<Feature10Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature10Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
