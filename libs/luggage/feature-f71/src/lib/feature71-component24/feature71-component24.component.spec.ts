import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component24Component } from './feature71-component24.component';

describe('Feature71Component24Component', () => {
  let component: Feature71Component24Component;
  let fixture: ComponentFixture<Feature71Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature71Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
