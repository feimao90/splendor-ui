usage = "\
Usage: make [target]\n\n\
Available targets:\n\
install         安装项目依赖\n\
dev             启动文档调试\n\
build           打包\n\
build-doc       文档打包\n\
"

# Must be the first target!
usage:
	@echo $(usage)

install:
	yarn install

dev:
	yarn dev

build:
	yarn build

build-doc:
	yarn build-doc

version:
	yarn version

publish: version build
	npm publish
