import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component17Component } from './feature99-component17.component';

describe('Feature99Component17Component', () => {
  let component: Feature99Component17Component;
  let fixture: ComponentFixture<Feature99Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature99Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
