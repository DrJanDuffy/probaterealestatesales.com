declare namespace JSX {
  interface IntrinsicElements {
    'realscout-office-listings': {
      'agent-encoded-id': string;
      'sort-order'?: string;
      'listing-status'?: string;
      'property-types'?: string;
      'price-min'?: string;
      'price-max'?: string;
      [key: string]: any;
    };
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': {
        'agent-encoded-id': string;
        'sort-order'?: string;
        'listing-status'?: string;
        'property-types'?: string;
        'price-min'?: string;
        'price-max'?: string;
        [key: string]: any;
      };
    }
  }
}
