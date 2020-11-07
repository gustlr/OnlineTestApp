import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuesAnsComponent } from './all-ques-ans.component';

describe('AllQuesAnsComponent', () => {
  let component: AllQuesAnsComponent;
  let fixture: ComponentFixture<AllQuesAnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllQuesAnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllQuesAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
