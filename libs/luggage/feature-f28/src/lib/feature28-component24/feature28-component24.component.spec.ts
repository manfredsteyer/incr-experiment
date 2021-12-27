import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component24Component } from './feature28-component24.component';

describe('Feature28Component24Component', () => {
  let component: Feature28Component24Component;
  let fixture: ComponentFixture<Feature28Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature28Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
