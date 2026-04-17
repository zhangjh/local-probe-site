---
description: 'Local Probe 下载安装指南，支持 macOS（Apple Silicon / Intel）和 Windows，含常见安装问题解决方案'
---

# 安装

## 系统要求

- macOS 10.15 (Catalina) 或更高版本
- Windows 10 或更高版本
- 约 200MB 磁盘空间

## 下载

<div style="display: flex; flex-direction: column; gap: 12px; margin: 24px 0; max-width: 420px;">
  <a id="btn-dl-mac-arm" href="https://github.com/zhangjh/local-probe-site/releases/latest"
     onclick="typeof LA !== 'undefined' && LA.track('download_mac_arm')"
     style="display: flex; align-items: center; justify-content: center; background-color: var(--vp-c-brand-1); color: white; padding: 14px 24px; border-radius: 10px; text-decoration: none; font-weight: 600; min-height: 48px; box-sizing: border-box; width: 100%;">
    Mac (Apple 芯片) 下载 (获取中...)
  </a>
  <a id="btn-dl-mac-intel" href="https://github.com/zhangjh/local-probe-site/releases/latest"
     onclick="typeof LA !== 'undefined' && LA.track('download_mac_intel')"
     style="display: flex; align-items: center; justify-content: center; background-color: var(--vp-c-brand-1); color: white; padding: 14px 24px; border-radius: 10px; text-decoration: none; font-weight: 600; min-height: 48px; box-sizing: border-box; width: 100%;">
    Mac (Intel 芯片) 下载 (获取中...)
  </a>
  <a id="btn-dl-win" href="https://github.com/zhangjh/local-probe-site/releases/latest"
     onclick="typeof LA !== 'undefined' && LA.track('download_win')"
     style="display: flex; align-items: center; justify-content: center; background-color: var(--vp-c-brand-1); color: white; padding: 14px 24px; border-radius: 10px; text-decoration: none; font-weight: 600; min-height: 48px; box-sizing: border-box; width: 100%;">
    Windows 下载 (获取中...)
  </a>
</div>

<script>
if (typeof window !== 'undefined') {
  fetch('https://api.github.com/repos/zhangjh/local-probe-site/releases/latest')
    .then(res => res.json())
    .then(data => {
      if (!data.assets || data.assets.length === 0) return;
      const mirror = 'https://gh-proxy.org/';
      const ver = data.tag_name;
      data.assets.forEach(asset => {
        const name = asset.name.toLowerCase();
        const url = mirror + asset.browser_download_url;
        if (name.includes('aarch64') && name.endsWith('.dmg')) {
          const el = document.getElementById('btn-dl-mac-arm');
          if (el) { el.href = url; el.innerText = 'Mac (Apple 芯片) 下载 (' + ver + ')'; }
        }
        if (name.includes('x64') && name.endsWith('.dmg')) {
          const el = document.getElementById('btn-dl-mac-intel');
          if (el) { el.href = url; el.innerText = 'Mac (Intel 芯片) 下载 (' + ver + ')'; }
        }
        if (name.includes('setup') && name.endsWith('.exe')) {
          const el = document.getElementById('btn-dl-win');
          if (el) { el.href = url; el.innerText = 'Windows 下载 (' + ver + ')'; }
        }
      });
    })
    .catch(err => console.error('Failed to fetch latest release:', err));
}
</script>

::: tip 不确定 Mac 芯片类型？
点击左上角  → 关于本机，查看"芯片"一栏。显示 Apple M 开头选 Apple 芯片版，显示 Intel 选 Intel 版。
:::

如加速下载不可用，可前往 [GitHub Releases](https://github.com/zhangjh/local-probe-site/releases/latest) 直接下载。

---

## macOS 安装

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

## Windows 安装

双击运行安装程序，按提示完成安装。安装完成后从开始菜单或桌面快捷方式启动。
