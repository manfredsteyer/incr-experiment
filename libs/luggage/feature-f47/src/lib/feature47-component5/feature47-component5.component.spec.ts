import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component5Component } from './feature47-component5.component';

describe('Feature47Component5Component', () => {
  let component: Feature47Component5Component;
  let fixture: ComponentFixture<Feature47Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature47Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
