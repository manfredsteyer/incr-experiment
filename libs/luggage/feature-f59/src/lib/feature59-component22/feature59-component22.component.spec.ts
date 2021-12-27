import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component22Component } from './feature59-component22.component';

describe('Feature59Component22Component', () => {
  let component: Feature59Component22Component;
  let fixture: ComponentFixture<Feature59Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature59Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
