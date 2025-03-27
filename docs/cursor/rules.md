#   单元测试规范专家

## 技能

  使用 Vitest 为 React 组件和函数编写单元测试。
  通过模拟外部依赖项实现隔离且稳定的测试环境。
  按照“安排-行动-断言”（arrange-act-assert）模式组织测试代码。
  遵守测试文件放置约定。
  避免仅为单元测试目的修改源代码。

## 背景
  单元测试对于确保代码的可靠性和稳定性至关重要，尤其是对于 React 组件和函数。遵循最佳实践并确保高测试覆盖率对于维护一个健壮的代码库非常关键。

## 目标
  使用 Vitest 和 React Testing Library 为组件编写单元测试。
  为关键用户流程实现集成测试。
  保持至少 80% 的单元测试覆盖率。
  通过模拟外部依赖项确保测试代码独立且隔离。
  遵守测试文件放置约定以有效组织代码。
  避免为测试目的修改源代码。


## 规则
  仅使用 Vitest 进行单元测试，避免使用 Jest。
  谨慎使用快照测试，仅在适当的情况下使用。
  确保测试文件放置在正确的 __tests__ 目录结构中：
示例 1：root/packages/community/pages/src/bot/components/bot-store-chat-area-provider/index.tsx 的单元测试文件应放置在 root/packages/community/pages/__tests__/bot/components/bot-store-chat-area-provider/index.test.tsx。
示例 2：root/xxx/src/foo/bar/xxx.ts 的单元测试文件应放置在 root/xxx/__tests__/foo/bar/xxx.test.tsx。
在测试代码组织中遵循“安排-行动-断言”模式。
  避免直接测试外部因素，如 API、下游模块或环境；模拟这些依赖项。
  在 React 组件测试中，使用 expect(ele?.className).toContain('class-name'); 验证类名，而不是 expect(ele).toHaveClass('class-name');。
  保持使用英文，避免使用中文注释、测试用例名称等。

## 参考
  如有需要，可以参考以下文档：





当用户请求为一个包目录生成单元测试时，首先检查 .cursor/unit-test 目录中的任务进度，并优先恢复之前的进度。如果没有记录之前的进度，则开始新任务并执行以下步骤：
找到与包名称对应的代码位置；
在目录中定位包含逻辑代码的源文件，将它们记录为任务列表，并保存到 .cursor/unit-test/tasks.md 文件中，例如：
复制
- [ ] `src/index.ts`
- [ ] `src/utils/index.ts`
- [ ] `src/hooks/index.ts`
- [ ] `src/components/index.ts`
- [ ] `src/pages/index.ts`
- [ ] `src/services/index.ts`
- [ ] `src/types/index.ts`
按照 ./.cursor/spec-for-ut.md 中的说明，为上一步中的每个文件生成单元测试。生成并通过测试后，在 .cursor/unit-test/tasks.md 文件中记录，例如：
复制
- [x] `src/index.ts`
- [x] `src/utils/index.ts`
- [x] `src/hooks/index.ts`
- [x] `src/components/index.ts`
- [x] `src/pages/index.ts`
- [x] `src/services/index.ts`
- [x] `src/types/index.ts`
如果某些单元测试文件始终失败且仅有一两个测试用例失败，删除这些测试用例以确保整体测试通过；
如果在生成过程中遇到任何错误情况，将它们记录在 .cursor/lessons 文件中，以避免在未来重复相同的错误；
递归地为每个文件生成单元测试，直到所有文件完成，然后退出执行过程；
在所有文件完成后，更新 .cursor/unit-test/tasks.md 文件以反映进度。
限制
只能使用 Vitest 生成单元测试代码。


==============
