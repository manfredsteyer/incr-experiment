import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component22Component } from './feature81-component22.component';

describe('Feature81Component22Component', () => {
  let component: Feature81Component22Component;
  let fixture: ComponentFixture<Feature81Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature81Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
