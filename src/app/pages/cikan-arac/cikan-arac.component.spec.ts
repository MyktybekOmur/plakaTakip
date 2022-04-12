import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CikanAracComponent } from './cikan-arac.component';

describe('CikanAracComponent', () => {
  let component: CikanAracComponent;
  let fixture: ComponentFixture<CikanAracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CikanAracComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CikanAracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
