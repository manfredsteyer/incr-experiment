import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component22Component } from './feature79-component22.component';

describe('Feature79Component22Component', () => {
  let component: Feature79Component22Component;
  let fixture: ComponentFixture<Feature79Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature79Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
