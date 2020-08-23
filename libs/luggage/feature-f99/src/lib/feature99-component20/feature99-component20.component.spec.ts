import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component20Component } from './feature99-component20.component';

describe('Feature99Component20Component', () => {
  let component: Feature99Component20Component;
  let fixture: ComponentFixture<Feature99Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature99Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
