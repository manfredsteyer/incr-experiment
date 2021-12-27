import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component15Component } from './feature5-component15.component';

describe('Feature5Component15Component', () => {
  let component: Feature5Component15Component;
  let fixture: ComponentFixture<Feature5Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature5Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
