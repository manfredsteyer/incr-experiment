import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component23Component } from './feature75-component23.component';

describe('Feature75Component23Component', () => {
  let component: Feature75Component23Component;
  let fixture: ComponentFixture<Feature75Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature75Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
