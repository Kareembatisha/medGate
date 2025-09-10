import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailsHeroComponent } from './service-details-hero.component';

describe('ServiceDetailsHeroComponent', () => {
  let component: ServiceDetailsHeroComponent;
  let fixture: ComponentFixture<ServiceDetailsHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDetailsHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDetailsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
