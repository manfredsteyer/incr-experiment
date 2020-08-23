import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component24Component } from './feature22-component24.component';

describe('Feature22Component24Component', () => {
  let component: Feature22Component24Component;
  let fixture: ComponentFixture<Feature22Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature22Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
