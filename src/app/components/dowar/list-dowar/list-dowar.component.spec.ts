import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDowarComponent } from './list-dowar.component';

describe('ListDowarComponent', () => {
  let component: ListDowarComponent;
  let fixture: ComponentFixture<ListDowarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDowarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDowarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
