# 通知渠道

Local Probe 通过 Webhook 将监控结果推送到你的接收端。

## 企微群推送

1. 访问 [sct.ftqq.com](https://sct.ftqq.com/) 注册并获取 SendKey
2. 在通知方式中选择"企业微信群机器人"
3. 填入 Webhook 地址：`https://sctapi.ftqq.com/YOUR_KEY.send`

## 企业微信群机器人

1. 在企业微信群中添加群机器人，获取 Webhook 地址
2. 在通知方式中选择"企业微信"
3. 填入 Webhook 地址

## 推送内容

每条推送包含：

- 原帖链接
- 标题或摘要
- 关键词命中信息
- 推荐处理优先级
- 如已启用 AI，则附带摘要与回复样本

你收到消息后，自行判断是否打开原帖、是否采用样本、是否进行回复。
