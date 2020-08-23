import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component15Component } from './feature75-component15.component';

describe('Feature75Component15Component', () => {
  let component: Feature75Component15Component;
  let fixture: ComponentFixture<Feature75Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature75Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
