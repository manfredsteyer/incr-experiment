import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component22Component } from './feature99-component22.component';

describe('Feature99Component22Component', () => {
  let component: Feature99Component22Component;
  let fixture: ComponentFixture<Feature99Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature99Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
