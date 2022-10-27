import CommandOptions from '../types/CommandOptions'
import path from 'path'

const test: CommandOptions = {
  name: 'i',
  dec: '安装模板',
  args: [
    {
      arg: 'name',
      dec: '项目名',
      required: true,
    },
  ],
  action: async (options: { name: string }) => {
    const { name } = options

    console.log(`当前 debug 目录：${path.resolve()}`)
    console.log(`当前 value：${name}`)
  },
}

export default test
