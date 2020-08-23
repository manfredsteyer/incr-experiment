import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component8Component } from './feature26-component8.component';

describe('Feature26Component8Component', () => {
  let component: Feature26Component8Component;
  let fixture: ComponentFixture<Feature26Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature26Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
