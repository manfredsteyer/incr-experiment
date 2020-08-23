import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component17Component } from './feature22-component17.component';

describe('Feature22Component17Component', () => {
  let component: Feature22Component17Component;
  let fixture: ComponentFixture<Feature22Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature22Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
