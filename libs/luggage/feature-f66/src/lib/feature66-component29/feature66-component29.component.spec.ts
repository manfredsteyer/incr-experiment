import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component29Component } from './feature66-component29.component';

describe('Feature66Component29Component', () => {
  let component: Feature66Component29Component;
  let fixture: ComponentFixture<Feature66Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature66Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
