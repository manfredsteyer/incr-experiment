import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component22Component } from './feature47-component22.component';

describe('Feature47Component22Component', () => {
  let component: Feature47Component22Component;
  let fixture: ComponentFixture<Feature47Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature47Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
