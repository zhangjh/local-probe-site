# 安装

## 系统要求

- macOS 10.15 (Catalina) 或更高版本
- Windows 10 或更高版本
- 约 200MB 磁盘空间

## macOS

1. 从 [Releases](https://github.com/nicepkg/local-probe/releases) 页面下载最新的 `.dmg` 文件
2. 双击打开 `.dmg`，将 Local Probe 拖入 Applications 文件夹
3. 首次打开时，macOS 可能提示"无法验证开发者"：
   - 打开 **系统设置 → 隐私与安全性**
   - 找到 Local Probe 的提示，点击 **仍要打开**
   - 或者右键点击应用图标，选择"打开"

### macOS 提示"已损坏，无法打开"

在终端中执行：

```bash
xattr -cr /Applications/Local\ Probe.app
```

然后重新打开应用。

## Windows

1. 从 [Releases](https://github.com/nicepkg/local-probe/releases) 页面下载最新的 `.exe` 安装程序
2. 双击运行安装程序，按提示完成安装
3. 安装完成后从开始菜单或桌面快捷方式启动
