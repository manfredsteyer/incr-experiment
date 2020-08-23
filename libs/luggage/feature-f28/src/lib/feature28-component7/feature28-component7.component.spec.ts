import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component7Component } from './feature28-component7.component';

describe('Feature28Component7Component', () => {
  let component: Feature28Component7Component;
  let fixture: ComponentFixture<Feature28Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature28Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
