import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component8Component } from './feature34-component8.component';

describe('Feature34Component8Component', () => {
  let component: Feature34Component8Component;
  let fixture: ComponentFixture<Feature34Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature34Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
