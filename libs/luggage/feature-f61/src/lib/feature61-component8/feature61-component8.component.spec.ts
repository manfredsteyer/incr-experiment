import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component8Component } from './feature61-component8.component';

describe('Feature61Component8Component', () => {
  let component: Feature61Component8Component;
  let fixture: ComponentFixture<Feature61Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature61Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
