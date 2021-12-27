import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component22Component } from './feature26-component22.component';

describe('Feature26Component22Component', () => {
  let component: Feature26Component22Component;
  let fixture: ComponentFixture<Feature26Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature26Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
