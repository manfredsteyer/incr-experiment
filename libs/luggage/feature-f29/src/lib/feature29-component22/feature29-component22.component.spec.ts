import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component22Component } from './feature29-component22.component';

describe('Feature29Component22Component', () => {
  let component: Feature29Component22Component;
  let fixture: ComponentFixture<Feature29Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature29Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
