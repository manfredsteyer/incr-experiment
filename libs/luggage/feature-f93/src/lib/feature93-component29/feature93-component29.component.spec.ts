import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component29Component } from './feature93-component29.component';

describe('Feature93Component29Component', () => {
  let component: Feature93Component29Component;
  let fixture: ComponentFixture<Feature93Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature93Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
