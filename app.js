const { ChainId, Fetcher, WETH, Route } = require('@uniswap/sdk');

const chainId = ChainId.MAINNET;
const tokenAddress = '0x4fabb145d64652a948d72533023f6e7a623c7c53';

const init = async () => {
    const busd = await Fetcher.fetchTokenData(chainId, tokenAddress);
    const wbnb = WETH[chainId];
    const pair = await Fetcher.fetchPairData(busd, wbnb);
    const route = new Route([pair], wbnb);

    console.log(route.midPrice.toSignificant(6));
    console.log(route.midPrice.invert().toSignificant(6));
}

init();