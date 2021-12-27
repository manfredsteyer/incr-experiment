import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component28Component } from './feature28-component28.component';

describe('Feature28Component28Component', () => {
  let component: Feature28Component28Component;
  let fixture: ComponentFixture<Feature28Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature28Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
