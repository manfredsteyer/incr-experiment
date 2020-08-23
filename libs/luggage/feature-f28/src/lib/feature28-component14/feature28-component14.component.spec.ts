import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component14Component } from './feature28-component14.component';

describe('Feature28Component14Component', () => {
  let component: Feature28Component14Component;
  let fixture: ComponentFixture<Feature28Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature28Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
