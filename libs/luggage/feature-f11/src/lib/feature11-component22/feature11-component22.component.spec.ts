import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component22Component } from './feature11-component22.component';

describe('Feature11Component22Component', () => {
  let component: Feature11Component22Component;
  let fixture: ComponentFixture<Feature11Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature11Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
