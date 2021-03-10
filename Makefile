.PHONY: build
build: 	## Bundle dependencies into one file
	rm -rf build/
	mkdir build
	deno bundle src/mod.ts build/index.js	

.PHONY: format
format: ## Deno formatter
	deno fmt

.PHONY: debug
debug:
	deno run -A --inspect-brk src/mod.ts

