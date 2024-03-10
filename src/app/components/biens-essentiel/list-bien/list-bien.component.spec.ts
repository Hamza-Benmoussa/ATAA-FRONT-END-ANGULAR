import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBienComponent } from './list-bien.component';

describe('ListBienComponent', () => {
  let component: ListBienComponent;
  let fixture: ComponentFixture<ListBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
