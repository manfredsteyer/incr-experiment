import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component29Component } from './feature50-component29.component';

describe('Feature50Component29Component', () => {
  let component: Feature50Component29Component;
  let fixture: ComponentFixture<Feature50Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature50Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
