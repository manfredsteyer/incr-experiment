import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component24Component } from './feature30-component24.component';

describe('Feature30Component24Component', () => {
  let component: Feature30Component24Component;
  let fixture: ComponentFixture<Feature30Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature30Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
