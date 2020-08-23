import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component6Component } from './feature75-component6.component';

describe('Feature75Component6Component', () => {
  let component: Feature75Component6Component;
  let fixture: ComponentFixture<Feature75Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature75Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
