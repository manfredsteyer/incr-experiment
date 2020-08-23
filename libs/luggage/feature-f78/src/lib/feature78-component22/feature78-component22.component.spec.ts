import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component22Component } from './feature78-component22.component';

describe('Feature78Component22Component', () => {
  let component: Feature78Component22Component;
  let fixture: ComponentFixture<Feature78Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature78Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
