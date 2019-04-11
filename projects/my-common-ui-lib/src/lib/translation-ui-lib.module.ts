import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { L10nConfig, L10nLoader, TranslationModule, StorageStrategy, ProviderType } from 'angular-l10n';

const l10nConfig: L10nConfig = {
  locale: {
    languages: [
      { code: 'en', dir: 'ltr' },
      { code: 'it', dir: 'ltr' }
    ],
    language: 'en',
    storage: StorageStrategy.Cookie
  },
  translation: {
    providers: [
      { type: ProviderType.Static, prefix: './assets/locale-' }
    ],
    caching: true,
    composedKeySeparator: '.',
    missingValue: 'No key'
  }
};

@NgModule({
  imports: [
    HttpClientModule,
    TranslationModule.forRoot(l10nConfig)
  ],
  exports: [
    TranslationModule
  ]
})
export class TranslationUiLibModule {
  constructor(public l10nLoader: L10nLoader) {
    this.l10nLoader.load();
  }
}
