import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component24Component } from './feature69-component24.component';

describe('Feature69Component24Component', () => {
  let component: Feature69Component24Component;
  let fixture: ComponentFixture<Feature69Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature69Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
