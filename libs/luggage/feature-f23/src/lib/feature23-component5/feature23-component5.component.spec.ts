import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component5Component } from './feature23-component5.component';

describe('Feature23Component5Component', () => {
  let component: Feature23Component5Component;
  let fixture: ComponentFixture<Feature23Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature23Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
