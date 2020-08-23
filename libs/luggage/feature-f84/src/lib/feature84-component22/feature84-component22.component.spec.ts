import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component22Component } from './feature84-component22.component';

describe('Feature84Component22Component', () => {
  let component: Feature84Component22Component;
  let fixture: ComponentFixture<Feature84Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature84Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
