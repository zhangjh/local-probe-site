# 安装

## 系统要求

- macOS 10.15 (Catalina) 或更高版本
- Windows 10 或更高版本
- 约 200MB 磁盘空间

## macOS

根据你的芯片类型选择对应版本：

- [Mac (Apple 芯片 M1/M2/M3/M4)](https://r2.zhangjh.cn/local-probe/Local.Probe_1.0.3_aarch64.dmg)
- [Mac (Intel 芯片)](https://r2.zhangjh.cn/local-probe/Local.Probe_1.0.3_x64.dmg)

::: tip 不确定自己的芯片类型？
点击左上角  → 关于本机，查看"芯片"一栏。显示 Apple M 开头选 Apple 芯片版，显示 Intel 选 Intel 版。
:::

下载后双击 `.dmg`，将 Local Probe 拖入 Applications 文件夹。

首次打开时，macOS 可能提示"无法验证开发者"：
- 打开 **系统设置 → 隐私与安全性**
- 找到 Local Probe 的提示，点击 **仍要打开**

### macOS 提示"已损坏，无法打开"

在终端中执行：

```bash
xattr -cr /Applications/Local\ Probe.app
```

然后重新打开应用。

## Windows

[下载 Windows 安装包](https://r2.zhangjh.cn/local-probe/Local.Probe_1.0.3_x64-setup.exe)

双击运行安装程序，按提示完成安装。安装完成后从开始菜单或桌面快捷方式启动。
