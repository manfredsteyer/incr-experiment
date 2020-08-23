import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component15Component } from './feature86-component15.component';

describe('Feature86Component15Component', () => {
  let component: Feature86Component15Component;
  let fixture: ComponentFixture<Feature86Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature86Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
