# 适用于Cocos的红点系统Demo

一个用于Cocos引擎的红点系统 Demo，帮助开发者快速集成和管理红点通知功能。

---

## 介绍

本项目提供一个简单易用的红点系统 Demo，适用于 CocosCreator 引擎。红点系统广泛应用于游戏和应用中，主要用于提示用户未读的消息、任务、活动等内容，增强用户的互动性和留存率。本 Demo 展示了如何实现和管理红点的显示、消失、更新等逻辑，帮助开发者更高效地在 Cocos 项目中集成该功能。

---

## 功能

- **红点显示与隐藏**：基于条件触发红点的显示与隐藏。
- **多层次树状结构管理**：使用树形结构来管理红点，使得复杂的红点逻辑可以分层次处理。
- **自动更新与清除红点**：自动根据事件更新红点状态，并能够在用户查看相关内容后自动清除红点。
- **扩展性强**：可根据项目需求扩展和定制红点的显示逻辑及功能。

---

## 安装与使用

### 安装步骤

1. 克隆仓库到本地：
    ```bash
    git clone https://github.com/username/repository-name.git
    ```

2. 使用 CocosCreator 打开项目：
    - 打开 CocosCreator，选择 **"打开项目"**，然后选择项目根目录。

### 使用说明

1. **引入红点系统**：
   在你的游戏/应用场景中，你可以直接引用本 Demo 中的核心脚本来管理红点。红点的管理逻辑包含在 `RedDotManager.ts` 和 `RedDotTree.ts` 中。

2. **红点显示与更新**：
   在游戏中，你可以通过 `RedDotManager` 来控制红点的显示状态。例如，当某个任务完成时，可以调用 `RedDotManager` 的接口更新对应节点的红点显示状态。

### 核心脚本

以下是项目中关键的脚本，负责管理红点系统的核心逻辑：

- **RedDotTree.ts**：红点系统的核心树状结构，管理红点的层级关系。
- **RedDotTreeNode.ts**：红点节点，用于表示树中的每一个红点。
- **RedDotManager.ts**：红点系统的业务逻辑管理器，负责红点的展示、更新、清除等操作。

## 许可证
本项目采用 MIT 许可证，详细信息请查看 LICENSE 文件。

## 联系
- 邮箱：yuzhicheng22@gmail.com