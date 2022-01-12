import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcatComponent } from './shortcat.component';

describe('ShortcatComponent', () => {
  let component: ShortcatComponent;
  let fixture: ComponentFixture<ShortcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortcatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
