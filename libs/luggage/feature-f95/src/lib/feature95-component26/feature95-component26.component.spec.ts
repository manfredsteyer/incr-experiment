import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component26Component } from './feature95-component26.component';

describe('Feature95Component26Component', () => {
  let component: Feature95Component26Component;
  let fixture: ComponentFixture<Feature95Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature95Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
