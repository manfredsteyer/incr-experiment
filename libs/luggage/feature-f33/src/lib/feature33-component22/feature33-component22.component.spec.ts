import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component22Component } from './feature33-component22.component';

describe('Feature33Component22Component', () => {
  let component: Feature33Component22Component;
  let fixture: ComponentFixture<Feature33Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature33Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
