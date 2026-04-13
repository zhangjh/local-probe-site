# 开发任务拆解

**拆解粒度:** 单个 Git Commit / 单个文件或函数级别

## Phase 0: 工程基建 ✅

- [x] Monorepo 初始化（pnpm workspace）
- [x] ESLint + Husky + lint-staged
- [x] Rust 代码规范（rustfmt + clippy）
- [x] Vitest 测试基建
- [x] Tauri 脚手架 + 联调验证

## Phase 1: 核心抓取引擎 ✅

- [x] CLI 骨架（login / run 子命令）
- [x] Browser Launcher 封装（独立 userDataDir）
- [x] 小红书 DOM 提取逻辑
- [x] 浏览行为节流工具
- [x] Run 命令集成 + 提取器测试

## Phase 2: 通知链路与 AI 增强 ✅

- [x] LLM Client 封装
- [x] Prompt 模板层
- [x] 结构化输出校验
- [x] Webhook Client（Server 酱 + 企业微信）
- [x] Sidecar 流程串联

## Phase 3: Rust 后端与本地调度（进行中）

- [x] SQLite 初始化 + Config DAO + 去重 DAO
- [x] 调度器内核 + Sidecar Runner
- [ ] 试用到期检查
- [ ] Tauri Command 暴露试用状态

## Phase 4: AI 可选配置与安全存储

- [ ] AI Provider 配置模型
- [ ] API Key Keychain 存储
- [ ] Sidecar 注入方案
- [ ] 连接测试能力

## Phase 5: 可观测性与仪表盘

- [ ] execution_runs / matched_posts / deliveries 表
- [ ] Dashboard Snapshot 查询
- [ ] 模型调用错误落库

## Phase 6: GUI 前端交互

- [ ] 试用状态页
- [ ] 任务配置表单 + AI 配置表单
- [ ] IPC 对接
- [ ] Dashboard + Tray 集成

## Phase 7: 产品验证

- [ ] 命中准确率评估
- [ ] 回复样本质量评估
- [ ] 推送体验回访
- [ ] Prompt 迭代

## Phase 8: 内测打包与发布

- [ ] CI 工作流
- [ ] Tauri Release 构建
- [ ] 安装引导文档

## Phase 9: 商业化（有付费用户后启动）

- [ ] License Control Plane 选型
- [ ] 激活 / 校验 / 解绑 / 撤销接口
- [ ] 客户端接入远程校验

## 当前优先级

1. 试用到期检查（Phase 3）
2. 执行日志和推送结果落库（Phase 5）
3. 前端配置页和仪表盘（Phase 6）
4. AI 可选配置（Phase 4）
5. 真实用户验证（Phase 7）
6. 内测打包和分发（Phase 8）
