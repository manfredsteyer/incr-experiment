import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component8Component } from './feature65-component8.component';

describe('Feature65Component8Component', () => {
  let component: Feature65Component8Component;
  let fixture: ComponentFixture<Feature65Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature65Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
