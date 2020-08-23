import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component22Component } from './feature28-component22.component';

describe('Feature28Component22Component', () => {
  let component: Feature28Component22Component;
  let fixture: ComponentFixture<Feature28Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature28Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
