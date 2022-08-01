import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { environmentCommon } from 'src/environments/environment-common';
import { URLS } from '../../../../data/constant';
import { Testimonial } from '../../../../model/testimonial/testimonial.model';
import { ThemeService } from '../../../../service/theme/theme.service';

@Component( {
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: [ './testimonial-card.component.scss' ],
} )
export class TestimonialCardComponent {
  URLS = URLS;

  environment = environment;
  environmentCommon = environmentCommon;

  brand = {
    brandLogo: '',
  };

  @Input() option: Testimonial = {
    review:
        '',
    reviewer: {
      name: '',
      title: '',
      photoUri: '',
      social: {
        linkedIn: '',
        twitter: '',
      },
    },
    style: {
      themeColor: 'var(--theme-color-lighter-2)',
    },
  };

  constructor( private themeService: ThemeService ) {
  }
}
