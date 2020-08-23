import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component22Component } from './feature89-component22.component';

describe('Feature89Component22Component', () => {
  let component: Feature89Component22Component;
  let fixture: ComponentFixture<Feature89Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature89Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
