import CommandOptions from '../types/CommandOptions'
import selectQuestionConfig, {
  SelectQuestion,
} from '../utils/inquirer/selectQuestion'
import { error } from '../utils/style/chalk'

const i: CommandOptions = {
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

    if (!name) {
      error('参数格式不对 应为：hentai i <项目名> [项目放置目录]')
      process.exit(-1)
    }

    // 初始化问题
    const res = await questionInit()

    console.log(res)
  },
}

export default i

async function questionInit() {
  const questions: SelectQuestion = {
    message: ' ♥ 请选择模板 ♥ ',
    choices: [
      { name: '[1]js工具包(utility-library)', value: { type: 0, key: 0 } },
    ],
  }

  return await selectQuestionConfig(questions)
}
