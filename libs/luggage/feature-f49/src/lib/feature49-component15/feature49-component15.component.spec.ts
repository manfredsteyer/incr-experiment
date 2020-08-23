import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component15Component } from './feature49-component15.component';

describe('Feature49Component15Component', () => {
  let component: Feature49Component15Component;
  let fixture: ComponentFixture<Feature49Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature49Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
