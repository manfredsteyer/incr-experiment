import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component11Component } from './feature47-component11.component';

describe('Feature47Component11Component', () => {
  let component: Feature47Component11Component;
  let fixture: ComponentFixture<Feature47Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature47Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
