import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component21Component } from './feature68-component21.component';

describe('Feature68Component21Component', () => {
  let component: Feature68Component21Component;
  let fixture: ComponentFixture<Feature68Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature68Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
