import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component22Component } from './feature97-component22.component';

describe('Feature97Component22Component', () => {
  let component: Feature97Component22Component;
  let fixture: ComponentFixture<Feature97Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature97Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
