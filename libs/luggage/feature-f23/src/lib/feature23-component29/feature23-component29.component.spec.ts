import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component29Component } from './feature23-component29.component';

describe('Feature23Component29Component', () => {
  let component: Feature23Component29Component;
  let fixture: ComponentFixture<Feature23Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature23Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
