import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component22Component } from './feature5-component22.component';

describe('Feature5Component22Component', () => {
  let component: Feature5Component22Component;
  let fixture: ComponentFixture<Feature5Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature5Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
