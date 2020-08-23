import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component24Component } from './feature98-component24.component';

describe('Feature98Component24Component', () => {
  let component: Feature98Component24Component;
  let fixture: ComponentFixture<Feature98Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature98Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
