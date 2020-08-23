import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component18Component } from './feature71-component18.component';

describe('Feature71Component18Component', () => {
  let component: Feature71Component18Component;
  let fixture: ComponentFixture<Feature71Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature71Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
