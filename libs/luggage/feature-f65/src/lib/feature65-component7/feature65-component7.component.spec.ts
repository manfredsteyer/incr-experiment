import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component7Component } from './feature65-component7.component';

describe('Feature65Component7Component', () => {
  let component: Feature65Component7Component;
  let fixture: ComponentFixture<Feature65Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature65Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
