import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component28Component } from './feature49-component28.component';

describe('Feature49Component28Component', () => {
  let component: Feature49Component28Component;
  let fixture: ComponentFixture<Feature49Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature49Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
