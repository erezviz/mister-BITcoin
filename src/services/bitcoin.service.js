'use strict'
import axios from "axios"
import { storageService } from "./storage.service"

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

const RATE_KEY = 'rateBTC'
const MARKET_KEY = 'marketPrice'
const TRANSACTIONS_KEY = 'dailyTransactions'

function getRate(coins) {
    let BTCRate = storageService.load(RATE_KEY)
    if (!BTCRate) {
        (async() => {
            const { data } = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
            BTCRate = data
            storageService.save(RATE_KEY, BTCRate)

        })();
    }
    return BTCRate
}



function getMarketPrice() {
    let marketPrice = storageService.load(MARKET_KEY)

    if (!marketPrice) {
        (async() => {
            try {
                const { data } = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
                marketPrice = data
                storageService.save(MARKET_KEY, marketPrice)
            } catch (err) {
                console.error('ERROR: Cannot retrieve market prices', err)
            }
        })();
    }
    return marketPrice
}

function getConfirmedTransactions() {
    let transactions = storageService.load(TRANSACTIONS_KEY)

    if (!transactions) {
        (async() => {
            try {
                const { data } = await axios.get(`https://api.blockchain.info/charts/n-transactions?timespan=2months&format=json&cors=true`)
                transactions = data
                storageService.save(TRANSACTIONS_KEY, transactions)
            } catch (err) {
                console.error('ERROR: Cannot retrieve transactions', err)
            }
        })();
    }
    return transactions
}