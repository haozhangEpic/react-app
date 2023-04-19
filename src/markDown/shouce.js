let text = `# 环境

分为fat环境和uat环境，prod生产环境，环境只是叫法不同，代码分支不同，但是只要是通过npm run build 或者 流水线跑过以后的代码，**前端代码**里面都是当作了生产环境来运行的，比如没有报错提示了，全局对象中的env值是production。发布完以后分的环境只是域名不同，测试环境也就是地址，不被外面的人知道，就咱们自己用。生产环境就是开放给别人用的

##  fat环境

一般情况下develop分支发布fat环境，域名地址里带有fat5345，或者fat5590。

hr-plus项目（最大的那个项目）一般情况下称呼fat环境都是fat5345地址，冒烟环境是fat5590地址

##  uat环境

这个环境不常用，不过为了流程也会发uat

小程序的uat环境是比较常用的，就是测试环境，在[mcd](http://ehrinternal.fat5345.qa.nt.ctripcorp.com/#/employee/onboarding)上发布

![image-20221214135251093](D:\markdownImgs\image-20221214135251093.png)

##  

##  冒烟环境

也是测试环境的一种叫法这个环境其实就是发布的马上要上生产的release的代码。这也就是为了上生产前最后一步测试

#  项目

##  hr-plus、hr-plus、hr工作台、人事通

![image-20221214142855105](D:\markdownImgs\image-20221214142855105.png)

###  进入方法

[http://ehrinternal.fat5345.qa.nt.ctripcorp.com/#/](http://ehrinternal.fat5345.qa.nt.ctripcorp.com/#/)

###  仓库地址

[http://git.dev.sh.ctripcorp.com/sixthquake/ehrms](http://git.dev.sh.ctripcorp.com/sixthquake/ehrms)

###  发布地址Captain

[http://captain.release.ctripcorp.com/app/100011156/info](http://captain.release.ctripcorp.com/app/100011156/info)

###  发布方法

####  测试环境

直接合并到develop分支，目前是在项目中使用npm run build 命令打包，打包完以后会自动把打包出来的代码推到  [internal-build](http://git.dev.sh.ctripcorp.com/HR/internal-build)   然后去对应的后端项目  [ehrms-int](http://git.dev.sh.ctripcorp.com/HR/ehrms-int)  中跑对应的分支的流水线

等以后前后端分离以后直接在仓库中跑对应分支的流水线就可以了，流水线跑完以后去分离以后的[captain项目](http://captain.release.ctripcorp.com/app/100038817/info)发布

####  生产环境

先切到master分支，pull一下新代码，然后切到自己的分支，使用 git merge master 命令看有没有冲突，有冲突就解决一下冲突，如果冲突中有不是自己改动的地方，就优先保留master分支的代码。好了以后再push到仓库中，在仓库上创建合并请求（merge_requests）。

##  人事通 HR-portal(PC)、人事通、hr-portal、人事通PC端

![image-20221214143023933](D:\markdownImgs\image-20221214143023933.png)

###  进入方法

[http://hr.fat-1.qa.nt.ctripcorp.com/](http://hr.fat-1.qa.nt.ctripcorp.com/)

###  仓库地址

[http://git.dev.sh.ctripcorp.com/sixthquake/hr-protal-cisfe](http://git.dev.sh.ctripcorp.com/sixthquake/hr-protal-cisfe)

###  发布地址Captain

[http://captain.release.ctripcorp.com/app/100026040/info](http://captain.release.ctripcorp.com/app/100026040/info)

###  发布方法

这个项目已经完全做了前后端分离

####  测试环境

代码合并到develop，推上去以后，仓库就会自动跑流水线，跑完流水线就可以在captain上看到镜像了，一般情况下fat517和fat-1两个集群都可以发，点击里面的流量管理就可以再展开SLB就可以看到域名地址了。

![image-20221214143506174](D:\markdownImgs\image-20221214143506174.png)

####  生产环境

生产环境需要在仓库中合并，先切到master同步一下代码，再切到自己分支git merge master，再把自己分支推上去，在仓库中提交合并请求。这个项目没有release分支，发生产用master分支。等审批完成以后，就会自动跑流水线了，然后在captain上发布，生产镜像也别忘了发一下uat，生产发布时别忘了一直看着发布界面，有些步骤需要手动点击下一步，不然会卡住

![image-20221214144037375](D:\markdownImgs\image-20221214144037375.png)



##  onboarading（H5）、onboarding移动端、入职信息填写

![image-20221214144712070](D:\markdownImgs\image-20221214144712070.png)

###  进入方法

项目启动以后需要参数id ：例如http://ehrext.fat5345.qa.nt.ctripcorp.com/templates/ob/index.html#/login?id=1dbd8ab3427746ee99f31c301e6222e6

里面的 **?id=1dbd8ab3427746ee99f31c301e6222e6**，这个id可以去相应的5345环境的[hr-plus](http://ehrinternal.fat5345.qa.nt.ctripcorp.com/#/employee/onboarding)里面用短链接拿

###  仓库地址

[http://git.dev.sh.ctripcorp.com/hr-front/onboarding](http://git.dev.sh.ctripcorp.com/hr-front/onboarding)

###  发布地址Captain

[http://captain.release.ctripcorp.com/app/100040509/info](http://captain.release.ctripcorp.com/app/100040509/info)

###  发布方法（前后端已经分离）

####  测试环境

直接合并develop，然后推上去，项目仓库会自动跑流水线然后去captain发布fat环境

####  生产环境

先直接合并到mater看行不行，如果推不上去，就跟前面的项目一样在仓库中使用合并请求，这个项目生产环境用的是master分支

##  请假单、HR-PLUS-Mobile(h5)、mobile-HrPlus

![image-20221214145554001](D:\markdownImgs\image-20221214145554001.png)

###  进入方法

1、[http://ehrext.fat5345.qa.nt.ctripcorp.com/templates/att/index.html](http://ehrext.fat5345.qa.nt.ctripcorp.com/templates/att/index.html)

2、 tp工作台中点击请假单模块进入，人事通小程序里点击请假单

<img src="D:\markdownImgs\image-20221214152331072.png" alt="image-20221214152331072" style="zoom:25%;" /><img src="D:\Users\hzhang28\AppData\Roaming\Typora\typora-user-images\image-20221214152458723.png" alt="image-20221214152458723" style="zoom:25%;" />

###  仓库地址

[http://git.dev.sh.ctripcorp.com/HR/mobile-hrplus](http://git.dev.sh.ctripcorp.com/HR/mobile-hrplus)


###  发布地址Captain

[http://captain.release.ctripcorp.com/app/100009627/info](http://captain.release.ctripcorp.com/app/100009627/info)

###  发布方法

目前这个项目还有进行前后端分离，正在准备分离，还需要和后端项目一起发

####  测试环境

直接合并到develop分支，目前是在项目中使用npm run build 命令打包，打包完以后会自动把打包出来的代码推到  [ext-build](http://git.dev.sh.ctripcorp.com/HR/ext-build)   然后去对应的后端项目  [ehrms-ext](http://git.dev.sh.ctripcorp.com/HR/ehrms-ext)  中跑对应的分支的流水线

####  生产环境

先切到master分支，pull一下新代码，然后切到自己的分支，使用 git merge master 命令看有没有冲突，有冲突就解决一下冲突，如果冲突中有不是自己改动的地方，就优先保留master分支的代码。好了以后再push到仓库中，在仓库上创建合并请求（merge_requests）。

##  onsigning、三方协议移动端、三方协议学生端、三方协议签署端

###  进入方法

[http://ehrext.fat5345.qa.nt.ctripcorp.com/templates/os/index.html#/login](http://ehrext.fat5345.qa.nt.ctripcorp.com/templates/os/index.html#/login)

###  仓库地址`

export default text