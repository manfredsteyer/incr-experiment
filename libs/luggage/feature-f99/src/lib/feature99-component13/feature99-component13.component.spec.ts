import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component13Component } from './feature99-component13.component';

describe('Feature99Component13Component', () => {
  let component: Feature99Component13Component;
  let fixture: ComponentFixture<Feature99Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature99Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
