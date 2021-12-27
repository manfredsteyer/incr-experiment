import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component22Component } from './feature68-component22.component';

describe('Feature68Component22Component', () => {
  let component: Feature68Component22Component;
  let fixture: ComponentFixture<Feature68Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature68Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
