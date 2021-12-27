import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component22Component } from './feature56-component22.component';

describe('Feature56Component22Component', () => {
  let component: Feature56Component22Component;
  let fixture: ComponentFixture<Feature56Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature56Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
