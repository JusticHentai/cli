import CommandOptions from '../types/CommandOptions'
import selectQuestionConfig, {
  SelectQuestion,
} from '../utils/inquirer/selectQuestion'
import utilsTemplate from '../utils/templates/utilsTemplate'

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
  action: async (options: { name: string; dirname: string }) => {
    // 初始化问题
    const template = await questionInit()

    // 初始化模板
    await templateInit({
      ...options,
      template,
    })
  },
}

export default i

async function questionInit() {
  const questions: SelectQuestion = {
    message: ' ♥ 请选择模板 ♥ ',
    choices: [
      { name: '[1]工具包模板(utils-template)', value: 'utilsTemplate' },
    ],
  }

  return await selectQuestionConfig(questions)
}

async function templateInit(options: {
  name: string
  dirname: string
  template: string
}) {
  const templateList: Record<string, any> = {
    utilsTemplate,
  }

  const { template, ...rest } = options

  await templateList[template](rest)
}
