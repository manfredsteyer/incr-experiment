import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component7Component } from './feature79-component7.component';

describe('Feature79Component7Component', () => {
  let component: Feature79Component7Component;
  let fixture: ComponentFixture<Feature79Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature79Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
