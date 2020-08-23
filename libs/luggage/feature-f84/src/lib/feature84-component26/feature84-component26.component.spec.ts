import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component26Component } from './feature84-component26.component';

describe('Feature84Component26Component', () => {
  let component: Feature84Component26Component;
  let fixture: ComponentFixture<Feature84Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature84Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
