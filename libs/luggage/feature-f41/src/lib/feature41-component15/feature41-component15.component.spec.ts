import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component15Component } from './feature41-component15.component';

describe('Feature41Component15Component', () => {
  let component: Feature41Component15Component;
  let fixture: ComponentFixture<Feature41Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature41Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
