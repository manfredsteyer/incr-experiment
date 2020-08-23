import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component5Component } from './feature40-component5.component';

describe('Feature40Component5Component', () => {
  let component: Feature40Component5Component;
  let fixture: ComponentFixture<Feature40Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature40Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
