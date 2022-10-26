import { Command } from 'commander'

export interface AddOptions {
  name: string // 命令名
  dec: string // 命令描述
  args: Argument[]
  argOptions: ArgumentOptions[]
}

/**
 * 添加命令 的 参数类型
 */
export type Argument = {
  arg: string // 参数名
  dec: string // 参数描述
  required: boolean // 参数是否必选
}

/**
 * 添加命令设置的 选项 类型
 */
export type ArgumentOptions = {
  flags: string
  dec: string
}

class Commander {
  // 命令实例
  program: Command

  constructor() {
    this.program = new Command()
  }

  /**
   * 添加命令
   * @param options
   */
  add<T extends object>(options: AddOptions): Promise<T> {
    const { name, dec: commandDec, args, argOptions } = options

    return new Promise((resolve) => {
      let myCommand = new Command(name).description(commandDec)

      for (const { arg, dec, required } of args) {
        if (!arg) {
          return
        }

        const argName = required ? `<${arg}>` : `[${arg}]`

        myCommand = myCommand.argument(argName, dec)
      }

      for (const { flags, dec } of argOptions) {
        if (!flags) {
          return
        }

        myCommand = myCommand.option(flags, dec)
      }

      myCommand = myCommand.action((...params) => {
        let res = {}

        let i = 0
        for (; i < args.length; i++) {
          const { arg } = args[i]

          const argRes = params[i]

          res = { ...res, [arg]: argRes }
        }

        if (argOptions.length > 0) {
          res = { ...res, ...params[i] }
        }

        resolve(res as T)
      })

      this.program.addCommand(myCommand)
    })
  }

  /**
   * 解析命令
   * 添加后必需解析 会把命令与输入进行对比并触发commander的action
   */
  init() {
    this.program.parse(process.argv)
  }
}

/**
 * 命令实例
 * 由于命令都维护在同一个实例里 所以只导出一个实例
 */
const command = new Commander()

export default command
