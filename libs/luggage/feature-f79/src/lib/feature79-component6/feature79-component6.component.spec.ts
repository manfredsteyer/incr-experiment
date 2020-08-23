import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component6Component } from './feature79-component6.component';

describe('Feature79Component6Component', () => {
  let component: Feature79Component6Component;
  let fixture: ComponentFixture<Feature79Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature79Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
