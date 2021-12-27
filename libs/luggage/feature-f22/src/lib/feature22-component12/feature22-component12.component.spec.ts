import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component12Component } from './feature22-component12.component';

describe('Feature22Component12Component', () => {
  let component: Feature22Component12Component;
  let fixture: ComponentFixture<Feature22Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature22Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
