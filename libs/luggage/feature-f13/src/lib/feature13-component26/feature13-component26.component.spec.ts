import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component26Component } from './feature13-component26.component';

describe('Feature13Component26Component', () => {
  let component: Feature13Component26Component;
  let fixture: ComponentFixture<Feature13Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature13Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
