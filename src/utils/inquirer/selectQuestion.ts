import inquirer from 'inquirer'
import { error } from '../style/chalk'

/**
 * 选项提问的选项
 */
export interface SelectQuestion {
  message: string // 首行文案
  choices: Array<Chose | any> // 选项本体 Array<单个选项类型 | 分割线类型>
}

// 单个选项的类型
interface Chose {
  name: string // 单个选项文案
  value: Result // 单个选项回复的结果
}

/**
 * 选项提问的结果
 */
export interface Result {
  type: number // 哪个模块
  key: number // 哪个key
}

/**
 * 选项提问
 * 简易封装了一下
 * @param question
 */
export default async function selectQuestionConfig(
  question: SelectQuestion
): Promise<Result> {
  const myQuestion = [
    {
      type: 'list',
      name: 'template',
      ...question,
    },
  ]

  const [{ template }, err] = await inquirer
    .prompt(myQuestion)
    .then((e) => [e, null])
    .catch((e) => [null, e])

  err && error(err)

  return template
}
