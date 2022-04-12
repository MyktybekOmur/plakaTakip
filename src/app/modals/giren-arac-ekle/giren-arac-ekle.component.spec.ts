import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirenAracEkleComponent } from './giren-arac-ekle.component';

describe('GirenAracEkleComponent', () => {
  let component: GirenAracEkleComponent;
  let fixture: ComponentFixture<GirenAracEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirenAracEkleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GirenAracEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
