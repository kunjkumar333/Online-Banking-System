import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTxnComponent } from './admin-txn.component';

describe('AdminTxnComponent', () => {
  let component: AdminTxnComponent;
  let fixture: ComponentFixture<AdminTxnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTxnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTxnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
