import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component6Component } from './feature29-component6.component';

describe('Feature29Component6Component', () => {
  let component: Feature29Component6Component;
  let fixture: ComponentFixture<Feature29Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature29Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
