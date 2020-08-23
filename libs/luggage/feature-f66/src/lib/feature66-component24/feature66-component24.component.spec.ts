import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component24Component } from './feature66-component24.component';

describe('Feature66Component24Component', () => {
  let component: Feature66Component24Component;
  let fixture: ComponentFixture<Feature66Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature66Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
