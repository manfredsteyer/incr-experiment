import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component26Component } from './feature42-component26.component';

describe('Feature42Component26Component', () => {
  let component: Feature42Component26Component;
  let fixture: ComponentFixture<Feature42Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature42Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
