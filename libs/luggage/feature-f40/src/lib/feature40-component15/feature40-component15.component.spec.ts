import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component15Component } from './feature40-component15.component';

describe('Feature40Component15Component', () => {
  let component: Feature40Component15Component;
  let fixture: ComponentFixture<Feature40Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature40Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
