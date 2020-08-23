import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component5Component } from './feature75-component5.component';

describe('Feature75Component5Component', () => {
  let component: Feature75Component5Component;
  let fixture: ComponentFixture<Feature75Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature75Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
