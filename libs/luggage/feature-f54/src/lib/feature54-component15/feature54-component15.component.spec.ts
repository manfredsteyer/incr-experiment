import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component15Component } from './feature54-component15.component';

describe('Feature54Component15Component', () => {
  let component: Feature54Component15Component;
  let fixture: ComponentFixture<Feature54Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature54Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
