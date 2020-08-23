import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component2Component } from './feature99-component2.component';

describe('Feature99Component2Component', () => {
  let component: Feature99Component2Component;
  let fixture: ComponentFixture<Feature99Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature99Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
