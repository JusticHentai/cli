import { MyFunction } from '@justichentai/types-utils'
import command from '../utils/command'

/**
 * 注册的命令队列
 */
export const commandList: MyFunction[] = []

/**
 * 注册命令
 */
export default function commandConfig() {
  for (const commandInit of commandList) {
    commandInit()
  }

  command.init()
}
