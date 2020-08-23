import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component6Component } from './feature26-component6.component';

describe('Feature26Component6Component', () => {
  let component: Feature26Component6Component;
  let fixture: ComponentFixture<Feature26Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature26Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
