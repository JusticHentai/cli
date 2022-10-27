import CommandOptions from '../types/CommandOptions'

const u: CommandOptions = {
  name: 'u',
  dec: 'git 更新三连',
  args: [
    {
      arg: 'message',
      dec: 'git commit 的信息',
      required: false,
    },
  ],
  action: (res: any) => {
    console.log(res)
  },
}

export default u
