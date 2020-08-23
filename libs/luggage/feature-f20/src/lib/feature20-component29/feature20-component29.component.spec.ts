import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component29Component } from './feature20-component29.component';

describe('Feature20Component29Component', () => {
  let component: Feature20Component29Component;
  let fixture: ComponentFixture<Feature20Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature20Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
