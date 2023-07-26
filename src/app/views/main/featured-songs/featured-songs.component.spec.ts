import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedSongsComponent } from './featured-songs.component';

describe('FeaturedSongsComponent', () => {
  let component: FeaturedSongsComponent;
  let fixture: ComponentFixture<FeaturedSongsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedSongsComponent]
    });
    fixture = TestBed.createComponent(FeaturedSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
