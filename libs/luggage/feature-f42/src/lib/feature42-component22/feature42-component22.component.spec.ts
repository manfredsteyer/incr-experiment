import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component22Component } from './feature42-component22.component';

describe('Feature42Component22Component', () => {
  let component: Feature42Component22Component;
  let fixture: ComponentFixture<Feature42Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature42Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
