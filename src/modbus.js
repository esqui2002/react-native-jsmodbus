'use strict'

var fs = require('fs')
var path = require('path')
var ModbusCore = require('./modbus-client-core.js')
var ModbusTcpClient = require('./modbus-tcp-client.js')

exports.client = {
  tcp: {
    core: ModbusCore.compose(ModbusTcpClient),
    complete: ModbusCore.compose(ModbusTcpClient)
  },
  // serial: {
  //   core: require('./modbus-serial-client.js'),
  //   complete: require('./modbus-serial-client.js')
  // },
  handler: {

  }

}

exports.client.tcp.complete = exports.client.tcp.complete.compose(require('./handler/client/ReadCoils.js'))
exports.client.tcp.complete = exports.client.tcp.complete.compose(require('./handler/client/ReadDiscreteInputs.js'))
exports.client.tcp.complete = exports.client.tcp.complete.compose(require('./handler/client/ReadHoldingRegisters.js'))
exports.client.tcp.complete = exports.client.tcp.complete.compose(require('./handler/client/ReadInputRegisters.js'))
exports.client.tcp.complete = exports.client.tcp.complete.compose(require('./handler/client/WriteMultipleCoils.js'))
exports.client.tcp.complete = exports.client.tcp.complete.compose(require('./handler/client/WriteMultipleRegisters.js'))
exports.client.tcp.complete = exports.client.tcp.complete.compose(require('./handler/client/WriteSingleCoil.js'))
exports.client.tcp.complete = exports.client.tcp.complete.compose(require('./handler/client/WriteSingleRegister.js'))

exports.client.handler['ReadCoils'] = require('./handler/client/ReadCoils.js')
exports.client.handler['ReadDiscreteInputs'] = require('./handler/client/ReadDiscreteInputs.js')
exports.client.handler['ReadHoldingRegisters'] = require('./handler/client/ReadHoldingRegisters.js')
exports.client.handler['ReadInputRegisters'] = require('./handler/client/ReadInputRegisters.js')
exports.client.handler['WriteMultipleCoils'] = require('./handler/client/WriteMultipleCoils.js')
exports.client.handler['WriteMultipleRegisters'] = require('./handler/client/WriteMultipleRegisters.js')
exports.client.handler['WriteSingleCoil'] = require('./handler/client/WriteSingleCoil.js')
exports.client.handler['WriteSingleRegister'] = require('./handler/client/WriteSingleRegister.js')

// fs.readdirSync(path.join(__dirname, '/handler/client'))
//   .filter(function (file) {
//     return file.substr(-3) === '.js'
//   }).forEach(function (file) {
//     exports.client.tcp.complete = exports.client.tcp.complete.compose(require('./handler/client/' + file))
//     // exports.client.serial.complete = exports.client.serial.complete.compose(require('./handler/client/' + file))
//     exports.client.handler[file.substr(0, file.length - 3)] = require('./handler/client/' + file)
//   })

// exports.server = {
//   tcp: {
//     core: require('./modbus-tcp-server.js'),
//     complete: require('./modbus-tcp-server.js')
//   },
//   handler: { }
// }
//
// fs.readdirSync(path.join(__dirname, '/handler/server'))
//   .filter(function (file) {
//     return file.substr(-3) === '.js'
//   }).forEach(function (file) {
//     exports.server.tcp.complete = exports.server.tcp.complete.compose(require('./handler/server/' + file))
//     exports.server.handler[file.substr(0, file.length - 3)] = require('./handler/server/' + file)
//   })
