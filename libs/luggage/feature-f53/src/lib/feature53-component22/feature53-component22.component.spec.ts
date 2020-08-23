import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component22Component } from './feature53-component22.component';

describe('Feature53Component22Component', () => {
  let component: Feature53Component22Component;
  let fixture: ComponentFixture<Feature53Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature53Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
