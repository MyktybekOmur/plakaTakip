import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CikanAracEkleComponent } from './cikan-arac-ekle.component';

describe('CikanAracEkleComponent', () => {
  let component: CikanAracEkleComponent;
  let fixture: ComponentFixture<CikanAracEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CikanAracEkleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CikanAracEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
