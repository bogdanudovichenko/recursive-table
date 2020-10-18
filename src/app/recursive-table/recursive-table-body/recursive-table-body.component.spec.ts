import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveTableBodyComponent } from './recursive-table-body.component';

describe('RecursiveTableBodyComponent', () => {
  let component: RecursiveTableBodyComponent;
  let fixture: ComponentFixture<RecursiveTableBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursiveTableBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursiveTableBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
