import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component5Component } from './feature93-component5.component';

describe('Feature93Component5Component', () => {
  let component: Feature93Component5Component;
  let fixture: ComponentFixture<Feature93Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature93Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
