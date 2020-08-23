import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component24Component } from './feature47-component24.component';

describe('Feature47Component24Component', () => {
  let component: Feature47Component24Component;
  let fixture: ComponentFixture<Feature47Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature47Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
