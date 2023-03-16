import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { metaTag } from '@core/interfaces';
import { defaultMetaTag } from '@core/constants';
import { ogTypeMetaTag } from '@core/enums';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta, private titleService: Title) { }

  setTags(tags: metaTag = defaultMetaTag): void {
    console.log(tags);
    // set title
    this.titleService.setTitle(tags.title);

    // set meta tags
    // Twitter tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary'});
    this.meta.updateTag({ name: 'twitter:domain', content: 'domain-name'});
    this.meta.updateTag({ name: 'twitter:url', content: 'site-url'});
    this.meta.updateTag({ name: 'twitter:title', content: tags.title});
    this.meta.updateTag({ name: 'twitter:description', content: tags.description});
    this.meta.updateTag({ name: 'twitter:image', content: tags.image});

    // Og Tags
    this.meta.updateTag({ name: 'og:type', content: ogTypeMetaTag.article});
    this.meta.updateTag({ name: 'og:site_name', content: 'Angular Template'});
    this.meta.updateTag({ name: 'og:title', content: tags.title});
    this.meta.updateTag({ name: 'og:description', content: tags.description});
    this.meta.updateTag({ name: 'og:image', content: tags.image});
    this.meta.updateTag({ name: 'og:url', content: 'site-url'});
  }
}
