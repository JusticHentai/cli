import CommandOptions from '../types/CommandOptions'
import path from 'path'

const test: CommandOptions = {
  name: 'test',
  dec: 'debug 专用',
  args: [
    {
      arg: 'value',
      dec: '测试用 value',
      required: false,
    },
  ],
  action: async (value: string) => {
    console.log(`当前 debug 目录：${path.resolve()}`)
    console.log(`当前 value：${value}`)
  },
}

export default test
