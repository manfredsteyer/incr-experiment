import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component20Component } from './feature47-component20.component';

describe('Feature47Component20Component', () => {
  let component: Feature47Component20Component;
  let fixture: ComponentFixture<Feature47Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature47Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
