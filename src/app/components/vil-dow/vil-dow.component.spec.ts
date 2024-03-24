import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilDowComponent } from './vil-dow.component';

describe('VilDowComponent', () => {
  let component: VilDowComponent;
  let fixture: ComponentFixture<VilDowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VilDowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VilDowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
