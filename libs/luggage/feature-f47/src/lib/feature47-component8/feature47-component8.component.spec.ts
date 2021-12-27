import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component8Component } from './feature47-component8.component';

describe('Feature47Component8Component', () => {
  let component: Feature47Component8Component;
  let fixture: ComponentFixture<Feature47Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature47Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
