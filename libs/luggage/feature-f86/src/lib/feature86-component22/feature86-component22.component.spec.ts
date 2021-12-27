import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component22Component } from './feature86-component22.component';

describe('Feature86Component22Component', () => {
  let component: Feature86Component22Component;
  let fixture: ComponentFixture<Feature86Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature86Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
