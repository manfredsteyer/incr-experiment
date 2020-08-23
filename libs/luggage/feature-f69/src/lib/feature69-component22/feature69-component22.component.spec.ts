import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component22Component } from './feature69-component22.component';

describe('Feature69Component22Component', () => {
  let component: Feature69Component22Component;
  let fixture: ComponentFixture<Feature69Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature69Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
