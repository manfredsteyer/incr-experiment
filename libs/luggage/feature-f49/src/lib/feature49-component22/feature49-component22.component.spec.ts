import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component22Component } from './feature49-component22.component';

describe('Feature49Component22Component', () => {
  let component: Feature49Component22Component;
  let fixture: ComponentFixture<Feature49Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature49Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
