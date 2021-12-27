import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component26Component } from './feature22-component26.component';

describe('Feature22Component26Component', () => {
  let component: Feature22Component26Component;
  let fixture: ComponentFixture<Feature22Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature22Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
