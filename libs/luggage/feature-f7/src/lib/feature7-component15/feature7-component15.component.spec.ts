import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component15Component } from './feature7-component15.component';

describe('Feature7Component15Component', () => {
  let component: Feature7Component15Component;
  let fixture: ComponentFixture<Feature7Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature7Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
