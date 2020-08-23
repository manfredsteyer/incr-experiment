import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component26Component } from './feature99-component26.component';

describe('Feature99Component26Component', () => {
  let component: Feature99Component26Component;
  let fixture: ComponentFixture<Feature99Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature99Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
