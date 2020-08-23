import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component5Component } from './feature8-component5.component';

describe('Feature8Component5Component', () => {
  let component: Feature8Component5Component;
  let fixture: ComponentFixture<Feature8Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature8Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
