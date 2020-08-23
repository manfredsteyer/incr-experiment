import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component22Component } from './feature7-component22.component';

describe('Feature7Component22Component', () => {
  let component: Feature7Component22Component;
  let fixture: ComponentFixture<Feature7Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature7Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
