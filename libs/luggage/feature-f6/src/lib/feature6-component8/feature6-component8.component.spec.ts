import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component8Component } from './feature6-component8.component';

describe('Feature6Component8Component', () => {
  let component: Feature6Component8Component;
  let fixture: ComponentFixture<Feature6Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature6Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
