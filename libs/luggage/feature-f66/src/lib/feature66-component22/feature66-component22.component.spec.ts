import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component22Component } from './feature66-component22.component';

describe('Feature66Component22Component', () => {
  let component: Feature66Component22Component;
  let fixture: ComponentFixture<Feature66Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature66Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
