import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component14Component } from './feature47-component14.component';

describe('Feature47Component14Component', () => {
  let component: Feature47Component14Component;
  let fixture: ComponentFixture<Feature47Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature47Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
