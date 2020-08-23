import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component24Component } from './feature65-component24.component';

describe('Feature65Component24Component', () => {
  let component: Feature65Component24Component;
  let fixture: ComponentFixture<Feature65Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature65Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
