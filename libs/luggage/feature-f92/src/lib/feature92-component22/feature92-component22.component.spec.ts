import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component22Component } from './feature92-component22.component';

describe('Feature92Component22Component', () => {
  let component: Feature92Component22Component;
  let fixture: ComponentFixture<Feature92Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature92Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
