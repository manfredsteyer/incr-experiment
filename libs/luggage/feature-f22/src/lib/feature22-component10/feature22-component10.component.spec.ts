import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component10Component } from './feature22-component10.component';

describe('Feature22Component10Component', () => {
  let component: Feature22Component10Component;
  let fixture: ComponentFixture<Feature22Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature22Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
