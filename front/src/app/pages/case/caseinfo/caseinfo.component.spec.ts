import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseinfoComponent } from './caseinfo.component';

describe('CaseinfoComponent', () => {
  let component: CaseinfoComponent;
  let fixture: ComponentFixture<CaseinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
