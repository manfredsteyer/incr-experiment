import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component15Component } from './feature6-component15.component';

describe('Feature6Component15Component', () => {
  let component: Feature6Component15Component;
  let fixture: ComponentFixture<Feature6Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature6Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
