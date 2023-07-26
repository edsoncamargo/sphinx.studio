import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGoTopComponent } from './btn-go-top.component';

describe('BtnGoTopComponent', () => {
  let component: BtnGoTopComponent;
  let fixture: ComponentFixture<BtnGoTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnGoTopComponent]
    });
    fixture = TestBed.createComponent(BtnGoTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
