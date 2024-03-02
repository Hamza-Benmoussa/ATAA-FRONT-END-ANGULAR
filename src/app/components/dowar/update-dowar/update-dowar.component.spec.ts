import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDowarComponent } from './update-dowar.component';

describe('UpdateDowarComponent', () => {
  let component: UpdateDowarComponent;
  let fixture: ComponentFixture<UpdateDowarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDowarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDowarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
