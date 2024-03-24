import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDvComponent } from './list-dv.component';

describe('ListDvComponent', () => {
  let component: ListDvComponent;
  let fixture: ComponentFixture<ListDvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
