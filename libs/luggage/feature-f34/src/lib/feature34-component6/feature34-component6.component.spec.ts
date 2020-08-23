import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component6Component } from './feature34-component6.component';

describe('Feature34Component6Component', () => {
  let component: Feature34Component6Component;
  let fixture: ComponentFixture<Feature34Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature34Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
