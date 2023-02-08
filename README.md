# SAOP

## 简介

数据标注运营平台(Simple Annotation Operation Platform, SAOP)是一款用于将各种单机标注工具转向团队化的应用。平台实现所有和团队标注相关的核心功能如供应商管理、标注员/质检员管理、项目管理、任务/任务包管理等，兼容多种主流受欢迎的标注工具。

## 体验方式

clone 仓库后，先启动后端（需要安装 docker）：

```bash
git clone https://github.com/dxsooo/saop
cd saop
docker compose -f devenv/docker-compose.yml up -d 
```

**注意：本项目仓库不含后端代码实现**

启动前端（需要安装 npm）：

```bash
npm install
npm run dev
```

页面将启动到 <http://localhost:5173/>

## 部分页面截图

TODO
