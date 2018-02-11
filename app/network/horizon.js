/* eslint-disable */

import StellarSdk from 'stellar-sdk';
import axios from 'axios';

const BASE_URL_TEST_NET = 'http://ec2-18-219-131-250.us-east-2.compute.amazonaws.com/';
const server = new StellarSdk.Server(BASE_URL_TEST_NET);

export function createTestAccount() {
  const pair = StellarSdk.Keypair.random();
  pair.secret();
  const publicKey = pair.publicKey();

  const request = axios.get(`${BASE_URL_TEST_NET}/friendbot?addr=${publicKey}`)
    .then(response => {
      console.log('Success: ' + response);
    })
    .catch(error => {

    });
}

export function getAccountDetail() {
    server.loadAccount(pair.publicKey()).then(function(account) {
        console.log('Balances for account: ' + pair.publicKey());
        account.balances.forEach(function(balance) {
          console.log('Type:', balance.asset_type, ', Balance:', balance.balance);
        });
      });
}