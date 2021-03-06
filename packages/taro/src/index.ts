import { IPluginContext } from '@tarojs/service'

export default (ctx: IPluginContext, pluginOpts) => {
  // 接下来使用 ctx 的时候就能获得智能提示了
  ctx.onBuildStart(() => {
    console.log('编译开始！')
  })

  ctx.onBuildFinish(() => {
    console.log('IPluginContext 编译结束111!')
  })

}