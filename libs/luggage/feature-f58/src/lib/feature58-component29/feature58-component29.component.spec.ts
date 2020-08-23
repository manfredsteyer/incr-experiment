import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component29Component } from './feature58-component29.component';

describe('Feature58Component29Component', () => {
  let component: Feature58Component29Component;
  let fixture: ComponentFixture<Feature58Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature58Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
