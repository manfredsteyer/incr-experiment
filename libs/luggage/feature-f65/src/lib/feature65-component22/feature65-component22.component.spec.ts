import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component22Component } from './feature65-component22.component';

describe('Feature65Component22Component', () => {
  let component: Feature65Component22Component;
  let fixture: ComponentFixture<Feature65Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature65Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
