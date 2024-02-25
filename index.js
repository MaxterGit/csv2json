'use strict'

const fs = require('fs')
const path = require('path')

const filename = path.join(__dirname, 'data', 'Contact_Data.csv')


// console.log(contacts)

function csv2json(filename){
    const file = fs.readFileSync(filename, 'utf8')
    const records = []

    const lines = file.split('\n')
    const headers = lines.shift().split(',')

    lines.forEach((line) => {
        const record = {}
        const values = line.split(',')
        headers.forEach((header, i) => {
          record[header] = values[i]
        })

        records.push(record)
    })

    return records
}

const contacts = csv2json(filename)
console.log(contacts)
