import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component6Component } from './feature37-component6.component';

describe('Feature37Component6Component', () => {
  let component: Feature37Component6Component;
  let fixture: ComponentFixture<Feature37Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature37Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
