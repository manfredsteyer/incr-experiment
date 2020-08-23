import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component22Component } from './feature94-component22.component';

describe('Feature94Component22Component', () => {
  let component: Feature94Component22Component;
  let fixture: ComponentFixture<Feature94Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature94Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
