import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component15Component } from './feature4-component15.component';

describe('Feature4Component15Component', () => {
  let component: Feature4Component15Component;
  let fixture: ComponentFixture<Feature4Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature4Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
