import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component28Component } from './feature83-component28.component';

describe('Feature83Component28Component', () => {
  let component: Feature83Component28Component;
  let fixture: ComponentFixture<Feature83Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature83Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
