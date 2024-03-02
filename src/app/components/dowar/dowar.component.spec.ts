import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowarComponent } from './dowar.component';

describe('DowarComponent', () => {
  let component: DowarComponent;
  let fixture: ComponentFixture<DowarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DowarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DowarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
