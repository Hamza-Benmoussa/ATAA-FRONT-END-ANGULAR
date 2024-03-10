import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKafilaComponent } from './list-kafila.component';

describe('ListKafilaComponent', () => {
  let component: ListKafilaComponent;
  let fixture: ComponentFixture<ListKafilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListKafilaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListKafilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
