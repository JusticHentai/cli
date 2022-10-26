#! /usr/bin/env node

import clear from 'clear'
import commandConfig from './src/commands'

/**
 * 总运行入口
 * 清空当前命令行 并 初始化命令配置
 */
const init = () => {
  clear()
  commandConfig()
}

init()
