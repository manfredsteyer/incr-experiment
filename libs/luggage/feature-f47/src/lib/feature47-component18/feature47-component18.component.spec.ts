import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component18Component } from './feature47-component18.component';

describe('Feature47Component18Component', () => {
  let component: Feature47Component18Component;
  let fixture: ComponentFixture<Feature47Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature47Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
