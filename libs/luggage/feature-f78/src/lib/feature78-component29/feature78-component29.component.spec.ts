import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component29Component } from './feature78-component29.component';

describe('Feature78Component29Component', () => {
  let component: Feature78Component29Component;
  let fixture: ComponentFixture<Feature78Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature78Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
