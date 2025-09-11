import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableHeroComponent } from './reusable-hero.component';

describe('ReusableHeroComponent', () => {
  let component: ReusableHeroComponent;
  let fixture: ComponentFixture<ReusableHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
