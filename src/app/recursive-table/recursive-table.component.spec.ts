import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveTableComponent } from './recursive-table.component';

describe('RecursiveTableComponent', () => {
  let component: RecursiveTableComponent;
  let fixture: ComponentFixture<RecursiveTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursiveTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursiveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
