const dev = {
    DEPLOYED_NTW_NAME: 'rinkeby',
    DEPLOYED_CHAIN_ID: 4,
    INFURA_ID: 'a5e79e6ee9a14236b385e47849805596',
    FORTMATIC_KEY: 'pk_test_DD2BBA8AAA1D4FED',
    RPC_URL: 'https://rinkeby.infura.io/v3/0a0bbd3ce4ea4be5ad706514cf2cd8cc',

    BASE_CID: 'https://ec-serverapp-staging.herokuapp.com/card',

    ETHERSCAN_URL: 'https://rinkeby.etherscan.io/',
};

const prod = {
    DEPLOYED_NTW_NAME: 'mainnet',
    DEPLOYED_CHAIN_ID: 1,
    INFURA_ID: 'a5e79e6ee9a14236b385e47849805596',
    FORTMATIC_KEY: 'pk_live_FBFF1F05F2879F29',
    //RPC_URL: 'https://mainnet.infura.io/v3/0a0bbd3ce4ea4be5ad706514cf2cd8cc',
    //RPC_URL: 'https://icy-weathered-glade.quiknode.pro/74e3e2900f41260b429e8ac065b8bee720298c94/',
    RPC_URL: 'https://mainnet.infura.io/v3/2cbb379501754b1f9e8d69ec51d3f206',

    BASE_CID: 'https://heroku.ether.cards/card',

    ETHERSCAN_URL: 'https://etherscan.io/',
};

const common = {
    APP_BASE_URL: 'https://YOUR_APP.ether.cards',
    LAYERS_BASE_URL: 'https://ether-cards.mypinata.cloud/ipfs/Qmcm7BjsmhwWVA611EZSGkxcqt3JmsbF9m37kPNhDLoy4o',
}

// if use npm/yarn start,  NODE_ENV = "development"
// if use npm/yarn build,  NODE_ENV = "production"
let envConfig = prod;// process.env.NODE_ENV === "development" ? dev : prod
let config = { ...envConfig, ...common }

export default config;


// pointless comment for test commit
