import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component22Component } from './feature54-component22.component';

describe('Feature54Component22Component', () => {
  let component: Feature54Component22Component;
  let fixture: ComponentFixture<Feature54Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature54Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
