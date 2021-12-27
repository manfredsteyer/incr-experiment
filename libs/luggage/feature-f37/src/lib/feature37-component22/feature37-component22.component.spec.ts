import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component22Component } from './feature37-component22.component';

describe('Feature37Component22Component', () => {
  let component: Feature37Component22Component;
  let fixture: ComponentFixture<Feature37Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature37Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
