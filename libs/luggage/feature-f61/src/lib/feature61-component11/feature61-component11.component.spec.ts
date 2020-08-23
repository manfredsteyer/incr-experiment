import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component11Component } from './feature61-component11.component';

describe('Feature61Component11Component', () => {
  let component: Feature61Component11Component;
  let fixture: ComponentFixture<Feature61Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature61Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
