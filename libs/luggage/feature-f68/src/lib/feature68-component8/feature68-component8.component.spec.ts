import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component8Component } from './feature68-component8.component';

describe('Feature68Component8Component', () => {
  let component: Feature68Component8Component;
  let fixture: ComponentFixture<Feature68Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature68Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
