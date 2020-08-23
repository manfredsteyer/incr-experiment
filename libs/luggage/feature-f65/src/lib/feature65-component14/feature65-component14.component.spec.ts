import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component14Component } from './feature65-component14.component';

describe('Feature65Component14Component', () => {
  let component: Feature65Component14Component;
  let fixture: ComponentFixture<Feature65Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature65Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
