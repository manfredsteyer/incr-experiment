import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component29Component } from './feature72-component29.component';

describe('Feature72Component29Component', () => {
  let component: Feature72Component29Component;
  let fixture: ComponentFixture<Feature72Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature72Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
