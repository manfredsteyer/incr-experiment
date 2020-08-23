import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component5Component } from './feature71-component5.component';

describe('Feature71Component5Component', () => {
  let component: Feature71Component5Component;
  let fixture: ComponentFixture<Feature71Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature71Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
