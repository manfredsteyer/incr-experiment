import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component1Component } from './feature99-component1.component';

describe('Feature99Component1Component', () => {
  let component: Feature99Component1Component;
  let fixture: ComponentFixture<Feature99Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature99Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
