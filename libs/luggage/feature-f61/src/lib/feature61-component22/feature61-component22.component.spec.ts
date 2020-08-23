import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component22Component } from './feature61-component22.component';

describe('Feature61Component22Component', () => {
  let component: Feature61Component22Component;
  let fixture: ComponentFixture<Feature61Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature61Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
