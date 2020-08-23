import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component22Component } from './feature4-component22.component';

describe('Feature4Component22Component', () => {
  let component: Feature4Component22Component;
  let fixture: ComponentFixture<Feature4Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature4Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
