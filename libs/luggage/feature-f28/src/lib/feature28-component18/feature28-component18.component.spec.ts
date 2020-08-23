import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component18Component } from './feature28-component18.component';

describe('Feature28Component18Component', () => {
  let component: Feature28Component18Component;
  let fixture: ComponentFixture<Feature28Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature28Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
