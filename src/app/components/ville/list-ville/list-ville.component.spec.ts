import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVilleComponent } from './list-ville.component';

describe('ListVilleComponent', () => {
  let component: ListVilleComponent;
  let fixture: ComponentFixture<ListVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
