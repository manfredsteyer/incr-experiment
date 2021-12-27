import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component22Component } from './feature48-component22.component';

describe('Feature48Component22Component', () => {
  let component: Feature48Component22Component;
  let fixture: ComponentFixture<Feature48Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature48Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
