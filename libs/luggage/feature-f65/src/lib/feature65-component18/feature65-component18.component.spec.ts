import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component18Component } from './feature65-component18.component';

describe('Feature65Component18Component', () => {
  let component: Feature65Component18Component;
  let fixture: ComponentFixture<Feature65Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature65Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
