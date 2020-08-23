import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component21Component } from './feature65-component21.component';

describe('Feature65Component21Component', () => {
  let component: Feature65Component21Component;
  let fixture: ComponentFixture<Feature65Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature65Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
