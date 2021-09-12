var Web3 = require('web3');
const web3 = new Web3('https://api.avax.network/ext/bc/C/rpc');


var huskyABI  = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"uint256","name":"supply","internalType":"uint256"}]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"spender","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowance","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"spender","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"approve","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint8","name":"","internalType":"uint8"}],"name":"decimals","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"decreaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"increaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"addedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transfer","inputs":[{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transferFrom","inputs":[{"type":"address","name":"sender","internalType":"address"},{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]}];
var avaxABI   = [{"type":"event","name":"Approval","inputs":[{"type":"address","name":"src","internalType":"address","indexed":true},{"type":"address","name":"guy","internalType":"address","indexed":true},{"type":"uint256","name":"wad","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Deposit","inputs":[{"type":"address","name":"dst","internalType":"address","indexed":true},{"type":"uint256","name":"wad","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"src","internalType":"address","indexed":true},{"type":"address","name":"dst","internalType":"address","indexed":true},{"type":"uint256","name":"wad","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Withdrawal","inputs":[{"type":"address","name":"src","internalType":"address","indexed":true},{"type":"uint256","name":"wad","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"fallback","stateMutability":"payable","payable":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowance","inputs":[{"type":"address","name":"","internalType":"address"},{"type":"address","name":"","internalType":"address"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"approve","inputs":[{"type":"address","name":"guy","internalType":"address"},{"type":"uint256","name":"wad","internalType":"uint256"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"","internalType":"address"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint8","name":"","internalType":"uint8"}],"name":"decimals","inputs":[],"constant":true},{"type":"function","stateMutability":"payable","payable":true,"outputs":[],"name":"deposit","inputs":[],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transfer","inputs":[{"type":"address","name":"dst","internalType":"address"},{"type":"uint256","name":"wad","internalType":"uint256"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transferFrom","inputs":[{"type":"address","name":"src","internalType":"address"},{"type":"address","name":"dst","internalType":"address"},{"type":"uint256","name":"wad","internalType":"uint256"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"wad","internalType":"uint256"}],"constant":false}];
var usdteABI  = [{"type":"constructor","stateMutability":"nonpayable","inputs":[]},{"type":"event","name":"AddSupportedChainId","inputs":[{"type":"uint256","name":"chainId","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"AddSwapToken","inputs":[{"type":"address","name":"contractAddress","internalType":"address","indexed":false},{"type":"uint256","name":"supplyIncrement","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"spender","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"MigrateBridgeRole","inputs":[{"type":"address","name":"newBridgeRoleAddress","internalType":"address","indexed":false}],"anonymous":false},{"type":"event","name":"Mint","inputs":[{"type":"address","name":"to","internalType":"address","indexed":false},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false},{"type":"address","name":"feeAddress","internalType":"address","indexed":false},{"type":"uint256","name":"feeAmount","internalType":"uint256","indexed":false},{"type":"bytes32","name":"originTxId","internalType":"bytes32","indexed":false}],"anonymous":false},{"type":"event","name":"RemoveSwapToken","inputs":[{"type":"address","name":"contractAddress","internalType":"address","indexed":false},{"type":"uint256","name":"supplyDecrement","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Swap","inputs":[{"type":"address","name":"token","internalType":"address","indexed":false},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Unwrap","inputs":[{"type":"uint256","name":"amount","internalType":"uint256","indexed":false},{"type":"uint256","name":"chainId","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"addSupportedChainId","inputs":[{"type":"uint256","name":"chainId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"addSwapToken","inputs":[{"type":"address","name":"contractAddress","internalType":"address"},{"type":"uint256","name":"supplyIncrement","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowance","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"spender","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"approve","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"burn","inputs":[{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"burnFrom","inputs":[{"type":"address","name":"account","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"chainIds","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint8","name":"","internalType":"uint8"}],"name":"decimals","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"decreaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"increaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"addedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"migrateBridgeRole","inputs":[{"type":"address","name":"newBridgeRoleAddress","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"mint","inputs":[{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"address","name":"feeAddress","internalType":"address"},{"type":"uint256","name":"feeAmount","internalType":"uint256"},{"type":"bytes32","name":"originTxId","internalType":"bytes32"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"removeSwapToken","inputs":[{"type":"address","name":"contractAddress","internalType":"address"},{"type":"uint256","name":"supplyDecrement","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"swap","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"swapSupply","inputs":[{"type":"address","name":"token","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transfer","inputs":[{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transferFrom","inputs":[{"type":"address","name":"sender","internalType":"address"},{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"unwrap","inputs":[{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"chainId","internalType":"uint256"}]}];


let wavax            = "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7";
let husky            = "0x65378b697853568da9ff8eab60c13e1ee9f4a654";
let usdte            = "0xc7198437980c041c805a1edcba50c1ce5db95118";

let huskyXwavaxPair  = "0xd05e435ae8d33fae82e8a9e79b28aaffb54c1751";
let usdteXwavaxPair  = "0xe28984e1ee8d431346d32bec9ec800efb643eef4";

let burnAddress      = "0x000000000000000000000000000000000000dEaD";



async function getHusky2USDTe(callback)  {
    var dict = {};
    // Husky x AVAX
    var wavaxContract = await new web3.eth.Contract(avaxABI, wavax);
    wavaxContract.methods
    .balanceOf(huskyXwavaxPair)
    .call()
    .then(response => {
        let wavaxPooledTokens = response / (10**18)

        var huskyContract     = new web3.eth.Contract(huskyABI, husky);
        huskyContract.methods
        .balanceOf(huskyXwavaxPair)
        .call()
        .then(response => {
            let huskyPooledTokens = response / (10**18)

            let huskyPriceAvax = wavaxPooledTokens / huskyPooledTokens; 
            
            // Husky x Usdt
            var wavaxContract = new web3.eth.Contract(avaxABI, wavax);
            wavaxContract.methods
            .balanceOf(usdteXwavaxPair)
            .call()
            .then(response => {
                let wavaxPooledTokens = response / (10**18)

                var usdteContract     = new web3.eth.Contract(usdteABI, usdte);
                usdteContract.methods
                .balanceOf(usdteXwavaxPair)
                .call()
                .then(async response => {
                    let usdtePooledTokens = response / (10**6)
                    
                    let avaxPrice = usdtePooledTokens / wavaxPooledTokens;
                    dict['avax2usdte'] = avaxPrice;

                    let huskyPrice = huskyPriceAvax * avaxPrice;
                    dict['husky2usdte'] = huskyPrice;

                    let totalLiquidity = huskyPooledTokens * huskyPrice;
                    dict['totalLiquidity'] = totalLiquidity;

                    let totalSupply = 100000000000000;
                    dict['totalSupply'] = totalSupply;

                    let mc = totalSupply * huskyPrice;
                    dict['mc'] = mc;
                    
                    var huskyContract     = new web3.eth.Contract(huskyABI, husky);
                    huskyContract.methods
                    .balanceOf(burnAddress)
                    .call()
                    .then(response => {
                        let supplyBurn     =  response / (10 ** 18)
                        dict['supplyBurn'] = supplyBurn

                        callback(dict)
                        return callback;
                    })
                })
            })
        })
    })

}
// // // // //
// API REST //
// // // // //
const express = require('express')
const app = express()
const port = 5000

app
.get('/', (req, res) => {
    getHusky2USDTe(function (response) {
        res.json(response)
    })
})
.listen(process.env.PORT || 5000)