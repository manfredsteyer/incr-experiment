import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component15Component } from './feature37-component15.component';

describe('Feature37Component15Component', () => {
  let component: Feature37Component15Component;
  let fixture: ComponentFixture<Feature37Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature37Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
