import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component5Component } from './feature98-component5.component';

describe('Feature98Component5Component', () => {
  let component: Feature98Component5Component;
  let fixture: ComponentFixture<Feature98Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature98Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
