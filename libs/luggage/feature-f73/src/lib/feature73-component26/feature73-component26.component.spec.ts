import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component26Component } from './feature73-component26.component';

describe('Feature73Component26Component', () => {
  let component: Feature73Component26Component;
  let fixture: ComponentFixture<Feature73Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature73Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
