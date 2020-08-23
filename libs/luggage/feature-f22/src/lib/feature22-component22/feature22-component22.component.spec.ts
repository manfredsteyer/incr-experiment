import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component22Component } from './feature22-component22.component';

describe('Feature22Component22Component', () => {
  let component: Feature22Component22Component;
  let fixture: ComponentFixture<Feature22Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature22Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
