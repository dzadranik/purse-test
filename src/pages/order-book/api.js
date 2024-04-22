export default {
  getRestDepth: (currencyPair, limit) =>
    fetch(
      `https://api.binance.com/api/v3/depth?symbol=${currencyPair}&limit=${limit}`
    ),
  getStreamDepth: currencyPair =>
    new WebSocket(`wss://stream.binance.com:9443/ws/${currencyPair}@depth`),
};
