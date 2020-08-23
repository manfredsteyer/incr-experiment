import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component21Component } from './feature99-component21.component';

describe('Feature99Component21Component', () => {
  let component: Feature99Component21Component;
  let fixture: ComponentFixture<Feature99Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature99Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
