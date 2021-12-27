import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component22Component } from './feature63-component22.component';

describe('Feature63Component22Component', () => {
  let component: Feature63Component22Component;
  let fixture: ComponentFixture<Feature63Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature63Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
