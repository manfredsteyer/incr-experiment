import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component5Component } from './feature69-component5.component';

describe('Feature69Component5Component', () => {
  let component: Feature69Component5Component;
  let fixture: ComponentFixture<Feature69Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature69Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
