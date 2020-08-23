import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component22Component } from './feature72-component22.component';

describe('Feature72Component22Component', () => {
  let component: Feature72Component22Component;
  let fixture: ComponentFixture<Feature72Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature72Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
