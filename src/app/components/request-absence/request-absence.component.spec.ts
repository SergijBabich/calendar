import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAbsenceComponent } from './request-absence.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CompfirmAbsenceService } from 'src/app/services/confirm-absence.service';
import { HttpClientModule } from '@angular/common/http';

describe('RequestAbsenceComponent', () => {
  let component: RequestAbsenceComponent;
  let fixture: ComponentFixture<RequestAbsenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAbsenceComponent ],
      imports: [ReactiveFormsModule, 
        HttpClientModule ],
        providers: [ CompfirmAbsenceService,  ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
