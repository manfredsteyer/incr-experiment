import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component28Component } from './feature92-component28.component';

describe('Feature92Component28Component', () => {
  let component: Feature92Component28Component;
  let fixture: ComponentFixture<Feature92Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature92Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
