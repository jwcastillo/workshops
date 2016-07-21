while (eth.accounts.length < 3) {
	personal.newAccount(""); // Empty passphrase
}

miner.setEtherbase(eth.accounts[0]);
miner.start(3);

// Security best practices ftw
for (i = 0; i < eth.accounts.length; i++) {
    personal.unlockAccount(eth.accounts[i], "", 3600);
}

var alice = eth.accounts[0];

var gerard = eth.accounts[1];
var monique = eth.accounts[2];

admin.sleepBlocks(1);           // block reward for alice
eth.sendTransaction({from:alice, to:gerard, value: web3.toWei(1, "ether")})
eth.sendTransaction({from:alice, to:monique, value: web3.toWei(1, "ether")})
admin.sleepBlocks(3);

// Generated by compile.py
loadScript('EthLove.js');

var ethlove = deployEthLove();

function runEthLove() {
	ethlove.link.sendTransaction("Monique", gerard, {from: monique});
	ethlove.link.sendTransaction("Gerard", monique, {from: gerard});
	admin.sleepBlocks(1);
}