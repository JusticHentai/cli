import CommandOptions from '../types/CommandOptions'
import gitUpdate from '../utils/git/gitUpdate'

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
  action: async (message: string) => {
    await gitUpdate(message)
  },
}

export default u
