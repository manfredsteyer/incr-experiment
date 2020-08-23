import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component24Component } from './feature79-component24.component';

describe('Feature79Component24Component', () => {
  let component: Feature79Component24Component;
  let fixture: ComponentFixture<Feature79Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature79Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
