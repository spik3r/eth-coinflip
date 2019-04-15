# eth-coinflip

Requirements: 
- Ganache `brew cask install ganache` or https://truffleframework.com/ganache
- Ganache `Open Ganache and click the little cog then change the port to 8545`
- truffle `npm install -g truffle`
- MetaMask add the browser extension: https://metamask.io/
- npm
- web3 `npm install web3`

Start the app:
- Install everything under Requirements & Setting up MetaMask
- run `npm install`
- run `truffle compile && truffle migrate`
- run npm start or yarn start
- accept the transaction in MetaMask


Setting up MetaMask:
- download the MetaMask extension either for Chrome or Firefox (I like to use it in Chrome Canary so I can use a real one in Chrome without switching accounts)
- copy the MNEMONIC shown at the top of Ganache and ask MetaMask import account using seedphrase
    - default phrase: `candy maple cake sugar pudding cream honey rich smooth crumble sweet treat` **Don't** let the honey pot in on the Main net scam you.
- change Metamask to point to Localhost
    
Gotchas:
- when re-deploying contracts remember to delete the build folder as truffle compile doesn't delete older versions

Source Code Taken from: https://truffleframework.com/boxes/react and modified slightly.
