import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component8Component } from './feature40-component8.component';

describe('Feature40Component8Component', () => {
  let component: Feature40Component8Component;
  let fixture: ComponentFixture<Feature40Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature40Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
