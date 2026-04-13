# 开发指南

## 前置要求

- Node.js ≥ 20
- pnpm ≥ 8
- Rust 工具链（rustup）
- 系统依赖：参考 [Tauri v2 Prerequisites](https://v2.tauri.app/start/prerequisites/)

## 安装与启动

```bash
# 安装依赖
pnpm install

# 启动开发模式（前端 + Tauri 后端）
pnpm dev
```

## 构建

```bash
# 构建 sidecar
node apps/desktop/scripts/build-sidecar.mjs

# 构建桌面应用
pnpm build
```

## 测试与代码质量

```bash
pnpm test        # 运行测试
pnpm lint        # ESLint 检查
```

项目使用 Husky + lint-staged 在提交前自动执行 ESLint。

## Rust 代码规范

Rust 代码风格配置见 `apps/desktop/src-tauri/rustfmt.toml`。CI 会执行 `cargo fmt --check` 和 `cargo clippy`。

## CI 流程

CI 在 push 和 PR 时自动运行：

- ESLint 检查
- Vitest 测试（desktop）
- `cargo fmt` 格式检查
- `cargo clippy` 静态分析
- `cargo test`

## Release 流程

推送 `v*` 标签触发 Release 构建，自动生成 macOS（arm64 / x64）和 Windows（x64）安装包。
