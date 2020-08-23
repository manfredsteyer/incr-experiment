import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component5Component } from './feature58-component5.component';

describe('Feature58Component5Component', () => {
  let component: Feature58Component5Component;
  let fixture: ComponentFixture<Feature58Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature58Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
