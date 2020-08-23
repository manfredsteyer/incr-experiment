import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component12Component } from './feature53-component12.component';

describe('Feature53Component12Component', () => {
  let component: Feature53Component12Component;
  let fixture: ComponentFixture<Feature53Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature53Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
