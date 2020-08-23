import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component22Component } from './feature41-component22.component';

describe('Feature41Component22Component', () => {
  let component: Feature41Component22Component;
  let fixture: ComponentFixture<Feature41Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature41Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
