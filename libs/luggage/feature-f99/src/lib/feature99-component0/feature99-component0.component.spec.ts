import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component0Component } from './feature99-component0.component';

describe('Feature99Component0Component', () => {
  let component: Feature99Component0Component;
  let fixture: ComponentFixture<Feature99Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature99Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
