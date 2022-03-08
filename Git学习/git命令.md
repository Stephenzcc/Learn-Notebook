## 三种状态
 modified 已修改    staged已暂存  committed 已提交

## 基本工作流程
 1.在工作区修改文件
 2.将你想要下次提交的更改进行暂存
 3.提交更新 找到暂存区的文件 把快照永久性存储到git仓库
```
git config --global user.name
git config --global user.email
 配置用户名和邮箱

git config --list --global  查看全局配置项
git config user.name
git config user.email   这两条查看指定的全局配置项

git help config  打开帮助手册

git config -h  获取git config命令的快速参考

git status 查看文件状态
git status -s 精简模式查看文件状态
git add . 提交到暂存区

git commit -m "提交了两个文件"

git restore --staged 移除文件
git rm --cached +文件 移除文件

git checkout --文件名 撤销对 哪个文件的更改

git reset HEAD 要移出的文件名称  从暂存区中移除对应的文件

git commit -a -m "日志信息"  把所有已经追踪过的文件暂存起来一并提交 从而跳过git add步骤

git touch +文件名，直接新建一个文件

vi+文件名，新建一个文件并进入编辑状态（如果文件存在，则直接进入编辑状态）

git branch 显示所有分支

git branch  +分支名，创建新分支

git merge  合并
```