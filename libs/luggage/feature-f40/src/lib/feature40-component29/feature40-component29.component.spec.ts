import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component29Component } from './feature40-component29.component';

describe('Feature40Component29Component', () => {
  let component: Feature40Component29Component;
  let fixture: ComponentFixture<Feature40Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature40Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
