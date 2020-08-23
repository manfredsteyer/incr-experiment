import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component29Component } from './feature89-component29.component';

describe('Feature89Component29Component', () => {
  let component: Feature89Component29Component;
  let fixture: ComponentFixture<Feature89Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature89Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
