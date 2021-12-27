import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component25Component } from './feature22-component25.component';

describe('Feature22Component25Component', () => {
  let component: Feature22Component25Component;
  let fixture: ComponentFixture<Feature22Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature22Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
