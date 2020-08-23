import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component22Component } from './feature15-component22.component';

describe('Feature15Component22Component', () => {
  let component: Feature15Component22Component;
  let fixture: ComponentFixture<Feature15Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature15Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
