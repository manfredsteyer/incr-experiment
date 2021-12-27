import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component6Component } from './feature22-component6.component';

describe('Feature22Component6Component', () => {
  let component: Feature22Component6Component;
  let fixture: ComponentFixture<Feature22Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature22Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
