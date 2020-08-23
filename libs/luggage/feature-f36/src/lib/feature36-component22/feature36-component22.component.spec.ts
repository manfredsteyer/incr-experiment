import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component22Component } from './feature36-component22.component';

describe('Feature36Component22Component', () => {
  let component: Feature36Component22Component;
  let fixture: ComponentFixture<Feature36Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature36Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
