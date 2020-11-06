import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCQTestPagesComponent } from './mcqtest-pages.component';

describe('MCQTestPagesComponent', () => {
  let component: MCQTestPagesComponent;
  let fixture: ComponentFixture<MCQTestPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MCQTestPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MCQTestPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
