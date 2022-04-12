import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirenAracComponent } from './giren-arac.component';

describe('GirenAracComponent', () => {
  let component: GirenAracComponent;
  let fixture: ComponentFixture<GirenAracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirenAracComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GirenAracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
