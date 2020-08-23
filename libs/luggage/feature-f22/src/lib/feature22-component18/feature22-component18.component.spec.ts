import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component18Component } from './feature22-component18.component';

describe('Feature22Component18Component', () => {
  let component: Feature22Component18Component;
  let fixture: ComponentFixture<Feature22Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature22Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
