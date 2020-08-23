import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component9Component } from './feature99-component9.component';

describe('Feature99Component9Component', () => {
  let component: Feature99Component9Component;
  let fixture: ComponentFixture<Feature99Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature99Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
