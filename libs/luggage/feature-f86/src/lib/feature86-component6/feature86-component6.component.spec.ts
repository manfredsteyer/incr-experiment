import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component6Component } from './feature86-component6.component';

describe('Feature86Component6Component', () => {
  let component: Feature86Component6Component;
  let fixture: ComponentFixture<Feature86Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature86Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
