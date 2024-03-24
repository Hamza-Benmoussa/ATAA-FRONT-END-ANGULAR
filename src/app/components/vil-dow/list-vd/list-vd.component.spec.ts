import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVDComponent } from './list-vd.component';

describe('ListVDComponent', () => {
  let component: ListVDComponent;
  let fixture: ComponentFixture<ListVDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
