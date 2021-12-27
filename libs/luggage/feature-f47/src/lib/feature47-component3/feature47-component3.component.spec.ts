import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component3Component } from './feature47-component3.component';

describe('Feature47Component3Component', () => {
  let component: Feature47Component3Component;
  let fixture: ComponentFixture<Feature47Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature47Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
