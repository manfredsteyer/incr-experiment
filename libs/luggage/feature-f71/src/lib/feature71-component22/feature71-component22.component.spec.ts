import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component22Component } from './feature71-component22.component';

describe('Feature71Component22Component', () => {
  let component: Feature71Component22Component;
  let fixture: ComponentFixture<Feature71Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature71Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
