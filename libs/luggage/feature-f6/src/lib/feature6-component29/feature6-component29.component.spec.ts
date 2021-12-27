import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component29Component } from './feature6-component29.component';

describe('Feature6Component29Component', () => {
  let component: Feature6Component29Component;
  let fixture: ComponentFixture<Feature6Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature6Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
