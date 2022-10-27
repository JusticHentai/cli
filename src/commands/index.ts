import CommandOptions from '../types/CommandOptions'
import command from '../utils/command'
import u from './u'

/**
 * 注册的命令队列
 */
export const commandList: CommandOptions[] = [u]

/**
 * 注册命令
 */
export default function commandConfig() {
  for (const commandOptions of commandList) {
    commandInit(commandOptions)
  }

  command.init()
}

/**
 * 初始化命令
 * @param commandOptions
 */
async function commandInit(commandOptions: CommandOptions) {
  const { action, ...rest } = commandOptions

  const res = await command.add({
    ...rest,
  })

  action && action(res)
}
