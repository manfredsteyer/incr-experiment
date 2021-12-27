import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component15Component } from './feature29-component15.component';

describe('Feature29Component15Component', () => {
  let component: Feature29Component15Component;
  let fixture: ComponentFixture<Feature29Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature29Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
