import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component5Component } from './feature79-component5.component';

describe('Feature79Component5Component', () => {
  let component: Feature79Component5Component;
  let fixture: ComponentFixture<Feature79Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature79Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
