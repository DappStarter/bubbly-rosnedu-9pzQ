require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give prison obtain suggest name rice saddle horse grace casual equal giggle'; 
let testAccounts = [
"0x14186253362630d493b16444b3245b27c81c353621cdc5407e70b83702000f30",
"0xe6420be75db84400892ffbbbb723aa68fb9bcb5b6460259edffa12071b7d5011",
"0x28d0c939e1887c7f4c443cacf7c352698160dd53779d5486a2692c0927443e82",
"0xd9fc13a8ef656e33b60a153abacd08e52c2d5a20ec6c2280ccde1b97aa07b337",
"0xfdb467f3356b4ed35f0378c0a494d06f167c4081429d626713def9c01f5fb68e",
"0xb2b5958e6d4d3df82941780c26808d5a59fb4dba9b129978124436819446a357",
"0xdfc3e2c80d9bcac7bf5185db05704cc535a22256d14a47d10446c4427199b33d",
"0xd3c5d78b19a1aafc871cc88c27f5dd97bda0b06e771b707d603e577019d4e3de",
"0xc39633ed587c6bc6396409443586721c32f50885358ff751dd76bbdf9c9dc3e3",
"0x6d4d8a300b0366d967efb98c140de2af0fff310fdf608b8b6216ae93f8951890"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


