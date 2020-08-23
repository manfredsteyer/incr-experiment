import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component5Component } from './feature22-component5.component';

describe('Feature22Component5Component', () => {
  let component: Feature22Component5Component;
  let fixture: ComponentFixture<Feature22Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature22Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
