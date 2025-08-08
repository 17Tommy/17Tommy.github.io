# Tommy Li Web学习项目
## CMD命令行工具使用记录
1. 这是第一段
2. 只是第二点
## Vue项目创建启动操作记录
1. 去Node.js官网下载node.js安装包
2. 查看初始npm镜像源
```cmd
   //1. 查看镜像源命令
   npm config get registry
   //2.设置镜像源(阿里镜像源)
   //淘宝镜像: https://registry.npmmirror.com
   //华为云镜像: https://repo.huaweicloud.com/repository/npm/
   //腾讯云镜像: https://mirrors.cloud.tencent.com/npm/
   //中国科学技术大学镜像: https://npmreg.proxy.ustclug.org/
   npm config set registry https://registry.npmmirror.com

```
3. VS code中创建Vue项目
```cmd
   //在工作目录中创建vue项目
   npm create vue@latest
   //根据需求创建项目后，会出现以下三个命令
   $ cd <your-project-name>
   $ npm install
   $ npm run dev
   //依次执行以上命令就完成项目的本地部署,会自动生成对应运行地址，例如下 
   http://localhost:5173/

  
```

---