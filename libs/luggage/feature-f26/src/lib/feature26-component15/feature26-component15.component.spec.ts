import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component15Component } from './feature26-component15.component';

describe('Feature26Component15Component', () => {
  let component: Feature26Component15Component;
  let fixture: ComponentFixture<Feature26Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature26Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
