import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverMedgateComponent } from './discover-medgate.component';

describe('DiscoverMedgateComponent', () => {
  let component: DiscoverMedgateComponent;
  let fixture: ComponentFixture<DiscoverMedgateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverMedgateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverMedgateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
