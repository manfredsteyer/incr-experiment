import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component24Component } from './feature29-component24.component';

describe('Feature29Component24Component', () => {
  let component: Feature29Component24Component;
  let fixture: ComponentFixture<Feature29Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature29Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
