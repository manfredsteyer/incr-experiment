import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component24Component } from './feature26-component24.component';

describe('Feature26Component24Component', () => {
  let component: Feature26Component24Component;
  let fixture: ComponentFixture<Feature26Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature26Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
