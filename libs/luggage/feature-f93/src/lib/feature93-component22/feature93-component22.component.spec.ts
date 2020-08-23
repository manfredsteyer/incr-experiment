import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component22Component } from './feature93-component22.component';

describe('Feature93Component22Component', () => {
  let component: Feature93Component22Component;
  let fixture: ComponentFixture<Feature93Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature93Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
