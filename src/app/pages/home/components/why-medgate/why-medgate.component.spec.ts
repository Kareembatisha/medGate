import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyMedgateComponent } from './why-medgate.component';

describe('WhyMedgateComponent', () => {
  let component: WhyMedgateComponent;
  let fixture: ComponentFixture<WhyMedgateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyMedgateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyMedgateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
