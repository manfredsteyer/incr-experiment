import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component21Component } from './feature47-component21.component';

describe('Feature47Component21Component', () => {
  let component: Feature47Component21Component;
  let fixture: ComponentFixture<Feature47Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature47Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
