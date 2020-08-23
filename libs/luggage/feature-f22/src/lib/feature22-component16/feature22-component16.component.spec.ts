import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component16Component } from './feature22-component16.component';

describe('Feature22Component16Component', () => {
  let component: Feature22Component16Component;
  let fixture: ComponentFixture<Feature22Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature22Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
