import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component22Component } from './feature98-component22.component';

describe('Feature98Component22Component', () => {
  let component: Feature98Component22Component;
  let fixture: ComponentFixture<Feature98Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature98Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
