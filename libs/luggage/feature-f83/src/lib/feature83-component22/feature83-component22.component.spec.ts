import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component22Component } from './feature83-component22.component';

describe('Feature83Component22Component', () => {
  let component: Feature83Component22Component;
  let fixture: ComponentFixture<Feature83Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature83Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
