import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatecategoriComponent } from './templatecategori.component';

describe('TemplatecategoriComponent', () => {
  let component: TemplatecategoriComponent;
  let fixture: ComponentFixture<TemplatecategoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatecategoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatecategoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
