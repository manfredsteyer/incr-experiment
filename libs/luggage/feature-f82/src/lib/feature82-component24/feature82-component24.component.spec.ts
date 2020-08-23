import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component24Component } from './feature82-component24.component';

describe('Feature82Component24Component', () => {
  let component: Feature82Component24Component;
  let fixture: ComponentFixture<Feature82Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature82Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
