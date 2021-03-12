require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture strong response misery under gentle light army gather'; 
let testAccounts = [
"0x813b0db7555f2293a35ca216a9cfb5b666260ff32528b2bb97f7d4c4b892818f",
"0x6ed921f3e91b3e86fa599ff854560e3929a1b3c9c9476d17c99480e49a63b15e",
"0x08078a3a2e26afe093628d88a44ff631c2a6b3b7aabeadd7d930170d2b4195c0",
"0x6d5db4cba40c6eb99020ee6f7e7a4dd480e2bee57401fff98ce9416a5b53edbb",
"0xdd85e26447060502125458395357b3c87bb115ed7d2a7f84e80a74838a9f0618",
"0x74c3b12511f838945a17a58d6b02fe83ba4e1f4a53dd2c2d82b256f456c2fc77",
"0xd4d5463fd64668b8f14b57749655efbc9e50fc9cb5d71af55d5161cf5b880f62",
"0x4cd2f1a81d85a4829a92ad503d02baba44c194c2245f8ff798a6a3991620a0ce",
"0xde67e237116b6f31dede4b78425d799e87e26df23a41e306180572df2a90aee5",
"0xb5644e71af8f28fdf4a9e78341098e54be1b4af5cbf65db020893cfcf5dc1d99"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
