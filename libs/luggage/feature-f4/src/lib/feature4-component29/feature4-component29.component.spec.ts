import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component29Component } from './feature4-component29.component';

describe('Feature4Component29Component', () => {
  let component: Feature4Component29Component;
  let fixture: ComponentFixture<Feature4Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature4Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
