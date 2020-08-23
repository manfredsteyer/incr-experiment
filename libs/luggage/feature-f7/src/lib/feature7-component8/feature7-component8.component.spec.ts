import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component8Component } from './feature7-component8.component';

describe('Feature7Component8Component', () => {
  let component: Feature7Component8Component;
  let fixture: ComponentFixture<Feature7Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature7Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
