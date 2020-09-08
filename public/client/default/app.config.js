exports.config = {
  domain: {
    underlyings: {
      // Not required to include 'Stock', 'Cash' and 'Other' here, they are defaults.
      // If this array is empty, only 'Cash' and 'Other' will be supported.
      supportedTypes: [
        'Bond',
        'Cryptocurrencies',
        'ExchangeTradedFund',
        'Fund',
        'Future',
        'FxForward',
        'FxSwap',
        'Option',
        'StructuredProduct',
      ],
    },
  },
};
