# 更新现有 GitHub Pages 网站（`ttaozhiming/wenmai-scroll`）

你已经建立了 [wenmai-scroll 仓库](https://github.com/ttaozhiming/wenmai-scroll)并上传过第一版。**这次直接更新该仓库，不用再创建一个仓库。**更新成功后，网站仍使用 <https://ttaozhiming.github.io/wenmai-scroll/>；例如苏轼故事的独立链接应是 <https://ttaozhiming.github.io/wenmai-scroll/?person=su-shi>。本地新版本尚未自动出现在这些线上链接中，需要完成下列上传和发布检查。

## 1. 先认清本次要上传的文件

把新版 `wenmai-scroll-source.zip` 解压，**进入解压后的项目文件夹**。这次新增或修改的文件如下，右侧是它们在 GitHub 仓库中的位置：

```text
README.md
AI_USE.md
PUBLISH_GUIDE.md
src/App.jsx
src/DetailPanel.jsx
src/detail.css
src/StoryPage.jsx
src/stories.js
src/story.css
public/portraits/qu-yuan.webp
public/portraits/sima-qian.webp
public/portraits/tao-yuanming.webp
public/portraits/li-bai.webp
public/portraits/du-fu.webp
public/portraits/wang-anshi.webp
public/portraits/su-shi.webp
public/portraits/li-qingzhao.webp
public/portraits/xin-qiji.webp
```

`screenshot.png` 是原首页截图，原首页未改，可以保留仓库中已有的这张。如果交付包另外包含新的故事页截图，也把该图片上传到仓库顶层。`index.html`、`package.json`、`package-lock.json`、`vite.config.js`、`src/main.jsx`、`src/figures.js`、`src/styles.css`、`.gitignore` 和 `.github/workflows/deploy.yml` 是网站运行所需的文件，**已有且与本地一致时无需重复上传**；若仓库里缺少任何一个，就从新版 ZIP 补上。不要把 ZIP 文件本身、`node_modules/`、`dist/`、`.git/`、`.DS_Store` 或个人密钥传到仓库。

## 2. 在 GitHub 网站上传更新

1. 登录 GitHub，打开 [仓库的 Code 页面](https://github.com/ttaozhiming/wenmai-scroll)，确认左上角分支是 `main`。
2. 在文件列表上方点击 **Add file → Upload files**。这与刚建空仓库时的 **uploading an existing file** 是同一个上传功能；现在仓库有文件，所以看不到那句链接是正常的。
3. 在 Mac 的 Finder 打开**解压后的项目文件夹**，把上面列出的 `README.md`、`AI_USE.md`、`PUBLISH_GUIDE.md` 以及整个 `src`、`public` 文件夹拖进网页上传区域。GitHub 支持拖入文件夹。**请不要拖入项目最外层文件夹或 ZIP**，否则仓库里可能多一层目录。
4. 在提交前的文件列表确认能看到 `src/DetailPanel.jsx`、`src/detail.css`、`src/StoryPage.jsx`、`src/stories.js`、`src/story.css` 和 `public/portraits/` 下的 **九张 `.webp`**。如果看到 `wenmai-scroll-source/src/...`，说明多套了一层文件夹，先取消上传再重新选择。若当前 `src` 里还有未改的文件，一并上传并保持同名原路径也可以。
5. 下方提交说明写 `Combine character notes and dialogue stories`。选 **Commit directly to the main branch**，点击 **Commit changes**（界面也可能显示 **Propose changes**，以实际按钮文字为准）。GitHub 会用同一路径的新文件更新旧文件。
6. 回到仓库 Code 页面，分别点开 `src`、`public → portraits`，核对 `DetailPanel.jsx`、`detail.css`、故事文件和九张图片都在正确目录。浏览器上传如果没保留文件夹路径，可以进入 GitHub 上的 `src` 文件夹，用 **Add file → Upload files** 单独上传代码文件；图片文件夹可以从仓库顶层拖入整个 `public` 文件夹，再检查路径。

`.github` 是隐藏文件夹。在 Mac Finder 中按 **Command + Shift + .** 可显示它；只有仓库缺少 `.github/workflows/deploy.yml` 时才需补传。补传后到仓库该路径确认确实存在。GitHub 官方上传说明：[Adding a file to a repository](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)。

## 3. 确认 GitHub Pages 已设置并完成发布

1. 在仓库顶部点击 **Settings**；如果窗口窄，可能藏在顶部的 `…` 菜单里。左侧点击 **Pages**。
2. 在 **Build and deployment → Source** 看是否为 **GitHub Actions**。如果不是，选 **GitHub Actions**；出现 **Save** 就点击保存。看到 **Static HTML** 或 **Jekyll** 建议卡片时不用点 Configure，本项目已有自己的 `.github/workflows/deploy.yml`。
3. 点击仓库顶部 **Actions**，在左侧选择 **发布文脉长卷**，打开最新一次运行。全部步骤绿色对勾表示构建和部署成功。若刚上传时没有自动运行，可点 **Run workflow**、分支选 `main`、再点绿色 **Run workflow**；若失败，点进失败的红色步骤查看错误。
4. 运行成功后回到 **Settings → Pages**，点击 **Visit site**，或者打开 <https://ttaozhiming.github.io/wenmai-scroll/>。Pages 更新可能需要短暂等待。

GitHub 官方步骤：[设置 Actions 为发布来源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)、[使用自定义工作流](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

## 4. 在线核对这次更新

1. 首页仍应是原来的长卷。点苏轼卡片，先看到人物手札，其中依次有“深入了解”“卷内阅读”“细读一句”“史料小注”。点红色“深入了解”，再看到苏轼水墨图像和底部对话框；读到回应选项并选择，继续到卷末小结。
2. 进入苏轼故事页后复制网址，在新标签粘贴并刷新；网址应保留 `?person=su-shi`，人物页仍能打开。回到原标签按浏览器返回键，应回到长卷。
3. 再随机打开几位人物，确认图像不同；缩窄浏览器或用手机检查文字和按钮是否完整。收藏一位人物，回首页看书签是否增加。
4. 如果页面白屏、样式丢失或图片不显示，先回 Code 页面确认 `index.html` 在仓库根目录、九张图在 `public/portraits/`、仓库名仍是 `wenmai-scroll`，再看 Actions 最新运行是否成功。不要直接双击本地 `index.html` 验证 Vite 网站。

确认线上新版正常后，作业同时提交**源码 ZIP**和在线链接；在线链接不能替代 ZIP。

## 5. 如果链接仍跳到已过期的 `blog.taozhiming.top`

这与人物页代码无关，应检查 GitHub Pages 的自定义域名。根据此前的排查，你的账号主页仓库 `ttaozhiming.github.io` 曾设置 `blog.taozhiming.top`；项目站点可能继承它。

1. 打开 [账号主页仓库](https://github.com/ttaozhiming/ttaozhiming.github.io)，注意不是 `wenmai-scroll` 仓库。
2. 点击 **Settings → Pages**，在 **Custom domain** 中若还显示 `blog.taozhiming.top`，点击 **Remove**。这也会改变原博客的域名设置，但不会删除它的源码。
3. 回到该主页仓库的 **Code** 页面，若根目录仍有指向旧域名的 `CNAME` 文件，删除它并提交。若主页仓库是通过自定义 GitHub Actions 发布，GitHub 说明现有 `CNAME` 可能被忽略；关键仍是 Pages 页面中的域名设置。
4. 等 Pages 更新后，在无痕窗口访问 <https://ttaozhiming.github.io/wenmai-scroll/>。若仍跳转，分别检查账号主页仓库与项目仓库的 **Settings → Pages → Custom domain** 是否留着旧域名。

GitHub 官方说明：[项目站点继承自定义域名](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)、[移除自定义域名](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)。
