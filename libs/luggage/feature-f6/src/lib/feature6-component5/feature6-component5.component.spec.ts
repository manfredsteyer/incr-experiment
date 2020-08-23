import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component5Component } from './feature6-component5.component';

describe('Feature6Component5Component', () => {
  let component: Feature6Component5Component;
  let fixture: ComponentFixture<Feature6Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature6Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
