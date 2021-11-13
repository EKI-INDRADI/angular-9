import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrListComponent } from './arr-list.component';

describe('ArrListComponent', () => {
  let component: ArrListComponent;
  let fixture: ComponentFixture<ArrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
