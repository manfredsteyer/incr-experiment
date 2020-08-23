import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component22Component } from './feature6-component22.component';

describe('Feature6Component22Component', () => {
  let component: Feature6Component22Component;
  let fixture: ComponentFixture<Feature6Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature6Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
