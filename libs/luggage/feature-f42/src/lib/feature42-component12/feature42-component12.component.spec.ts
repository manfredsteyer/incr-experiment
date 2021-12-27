import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component12Component } from './feature42-component12.component';

describe('Feature42Component12Component', () => {
  let component: Feature42Component12Component;
  let fixture: ComponentFixture<Feature42Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature42Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
