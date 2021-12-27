import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component22Component } from './feature23-component22.component';

describe('Feature23Component22Component', () => {
  let component: Feature23Component22Component;
  let fixture: ComponentFixture<Feature23Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature23Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
