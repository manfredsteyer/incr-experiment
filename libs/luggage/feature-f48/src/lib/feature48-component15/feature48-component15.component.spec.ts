import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component15Component } from './feature48-component15.component';

describe('Feature48Component15Component', () => {
  let component: Feature48Component15Component;
  let fixture: ComponentFixture<Feature48Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature48Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
