import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component10Component } from './feature65-component10.component';

describe('Feature65Component10Component', () => {
  let component: Feature65Component10Component;
  let fixture: ComponentFixture<Feature65Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature65Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
