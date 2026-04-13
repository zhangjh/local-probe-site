# 项目结构

```
local-probe-monorepo/
├── apps/desktop/              # Tauri 桌面应用
│   ├── src/                   # React 前端
│   │   ├── components/        # UI 组件（仪表盘、配置、登录、AI 配置）
│   │   ├── stores/            # Zustand 状态管理
│   │   └── types/             # TypeScript 类型定义
│   ├── src-tauri/             # Rust 后端
│   │   └── src/
│   │       ├── chrome/        # Chrome 进程管理
│   │       ├── db/            # SQLite 数据层
│   │       ├── keychain/      # 系统密钥链集成
│   │       ├── license/       # 试用授权控制
│   │       └── scheduler/     # 任务调度与 Sidecar 调用
│   └── scripts/               # Sidecar 构建脚本
├── packages/crawler-sidecar/  # Node.js 浏览器自动化（Tauri sidecar）
│   └── src/
│       ├── browser/           # 浏览器控制
│       ├── commands/          # CLI 命令
│       ├── prompts/           # AI Prompt 模板
│       ├── services/          # AI 调用、Webhook 推送
│       └── utils/             # 工具函数
├── docs/                      # 产品文档
└── scripts/                   # Monorepo 级脚本
```

## 模块职责

### Tauri 前端 (React UI)

- 试用状态展示
- 任务配置表单（平台、关键词、业务描述、轮询频率、通知方式）
- AI 配置表单（可选）
- 登录入口和任务启停
- 仪表盘与运行记录

### Tauri 后端 (Rust Core)

- SQLite 初始化和查询
- 调度器生命周期管理
- Sidecar 调用与结果落库
- 密钥读写封装
- 试用到期检查
- Tauri Commands 暴露

### Node Sidecar

- 启动独立浏览器 Profile
- 跳转登录页并等待用户登录
- 执行单次搜索抓取
- 输出结构化帖子列表
- AI 模型调用（启用时）
- Webhook 通知推送
