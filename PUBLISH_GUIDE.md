# GitHub Pages 发布全流程（给 `ttaozhiming`）

本指南以仓库名 **`wenmai-scroll`** 为准。项目中的网站路径已经按这个名字设置；请照此命名。预计公开地址是：<https://ttaozhiming.github.io/wenmai-scroll/>。

## ① 解压并认清要上传的文件

先把交付的 `wenmai-scroll-source.zip` 解压。**进入解压后的项目文件夹，上传里面的内容，不要只把 ZIP 文件传到仓库，也不要在仓库里多套一层文件夹。**

仓库顶层应看到：

```text
index.html
package.json
package-lock.json
vite.config.js
README.md
AI_USE.md
PUBLISH_GUIDE.md
screenshot.png
.gitignore
.github/workflows/deploy.yml
src/App.jsx
src/figures.js
src/main.jsx
src/styles.css
```

其中 `.github` 和 `.gitignore` 在 Mac 的 Finder 中可能被隐藏。打开项目文件夹后，按 **Command + Shift + .** 可以显示隐藏文件。**不要上传** `node_modules`、`dist`、`.git` 或源码 ZIP 本身。

## ② 在 GitHub 网站创建仓库

1. 打开 <https://github.com/> 并登录 `ttaozhiming`。
2. 点击右上角的 **`+`**，选择 **New repository**（新建仓库）。也可以直接打开 <https://github.com/new>。
3. **Owner** 选择 `ttaozhiming`；**Repository name** 输入 `wenmai-scroll`。
4. **Visibility** 选择 **Public**。可选描述：`中国历史人物与诗人的互动长卷`。
5. **Add a README file** 不勾选；`.gitignore` 和 License 也先不添加，因为项目里已有相应文件或暂不需要。
6. 点击绿色的 **Create repository**。

## ③ 上传项目源码

1. 进入刚创建的仓库首页。空仓库页面有 **“uploading an existing file”** 链接，点击它；如果已经能看到文件列表，就点击列表上方的 **Add file → Upload files**。
2. 在电脑上打开解压后的项目文件夹，显示隐藏文件后，**选中上面清单里的文件和文件夹**，拖进网页上传区域。也可以点 **choose your files** 选择。不要把源码 ZIP 一起选进去。
3. 在网页准备提交的文件列表中，确认有 `index.html`、`package-lock.json`、`src/App.jsx` 和 **`.github/workflows/deploy.yml`**。如果 `.github` 没上去，自动发布不会运行，需要回到这一步补传该文件。
4. 页面下方的提交说明可写 `Add Wenmai Scroll website`，选择 **Commit directly to the main branch**，然后点 **Commit changes**。
5. 回到仓库首页，确认文件直接位于仓库顶层：应直接看见 `index.html`、`src`、`.github` 等，而不是先进入一个额外的 `wenmai-scroll-source` 文件夹。

## ④ 打开 GitHub Pages

1. 在仓库顶部点击 **Settings**（设置）。如果屏幕较窄，Settings 可能收在顶部的 `…` 菜单里。
2. 在左侧找到 **Pages**（通常位于 **Code and automation** 一组）。
3. 在 **Build and deployment → Source** 的下拉菜单里，选择 **GitHub Actions**。若出现 **Save**，再点 Save。
4. 点击仓库顶部 **Actions**，找到名为 **“发布文脉长卷”** 的工作流。等待最新一次运行出现绿色对勾。若刚上传时的运行失败，可进入该工作流，点 **Run workflow**，分支选 `main`，再点绿色 **Run workflow**。

## ⑤ 打开链接并核对

1. 回到 **Settings → Pages**，点击 **Visit site**；或者打开 <https://ttaozhiming.github.io/wenmai-scroll/>。
2. 检查首页图片与文字是否完整；点击“展开长卷”，打开一位人物，再收藏并刷新页面。如果网页是空白或样式丢失，先检查仓库名是否恰好是 `wenmai-scroll`，以及 Actions 是否已成功。
3. 发布成功后，把实际链接写进 README，并把**源码 ZIP** 和链接一起交作业。在线链接只是补充，不能代替 ZIP。

以上网页点击路径参照 [GitHub 创建仓库](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)、[上传文件](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)及 [Vite 的 GitHub Pages 指南](https://vite.dev/guide/static-deploy)。
