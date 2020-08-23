import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component15Component } from './feature8-component15.component';

describe('Feature8Component15Component', () => {
  let component: Feature8Component15Component;
  let fixture: ComponentFixture<Feature8Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature8Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
