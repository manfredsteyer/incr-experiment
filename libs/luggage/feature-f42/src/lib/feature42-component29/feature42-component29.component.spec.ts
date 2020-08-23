import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component29Component } from './feature42-component29.component';

describe('Feature42Component29Component', () => {
  let component: Feature42Component29Component;
  let fixture: ComponentFixture<Feature42Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature42Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
