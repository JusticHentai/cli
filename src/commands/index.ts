/**
 * 注册的命令队列
 */
export const commandList = [

]

/**
 * 注册命令
 */
export default function commandConfig() {
  for (const command of commandList) {
    command()
  }
}
