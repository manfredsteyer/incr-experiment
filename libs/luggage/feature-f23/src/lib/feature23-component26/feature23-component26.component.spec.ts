import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component26Component } from './feature23-component26.component';

describe('Feature23Component26Component', () => {
  let component: Feature23Component26Component;
  let fixture: ComponentFixture<Feature23Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature23Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
