import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component10Component } from './feature47-component10.component';

describe('Feature47Component10Component', () => {
  let component: Feature47Component10Component;
  let fixture: ComponentFixture<Feature47Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature47Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
