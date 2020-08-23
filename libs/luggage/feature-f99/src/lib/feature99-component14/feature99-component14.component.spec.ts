import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component14Component } from './feature99-component14.component';

describe('Feature99Component14Component', () => {
  let component: Feature99Component14Component;
  let fixture: ComponentFixture<Feature99Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature99Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
