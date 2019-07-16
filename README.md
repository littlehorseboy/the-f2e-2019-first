# 第一關 - 番茄鐘

### User story

- [x] 我可以記錄待辦任務
- [x] 我可以設定蕃茄鐘定時器
- [x] 我可以透過報表檢視使用狀況

### Functional map

- 待辦事項
  - [x] 設定待辦事項名稱或內容
  - [x] 設定待辦事項成已完成狀態
  - [ ] 調整排列順序
- 蕃茄鐘
  - 固定時間區間
    - [ ] 主工作時間：25 分鐘
    - [ ] 短休息時間：5 分鐘
  - 時間倒數介面
    - [x] 顯示進行中待辦事項
    - [x] 有開始鍵能啟動倒數
    - [X] 能暫停倒數
    - [X] 能略過倒數（作廢）
    - [x] 顯示倒數時間
    - [ ] 提示鈴聲選項
  - 狀態報表
    - [x] 當天使用蕃茄鐘的記錄與成效
    - [x] 當週使用蕃茄鐘的記錄與成效 

### TODO

- [ ] React Testing Library
- [ ] Storybook showcase components
- [x] PomodoroTime.tsx workCount 顯示
- [x] ToDoListTopThree.tsx 播放按鈕加入 Link 改變 taskId，MORE 按鈕也要加 Link
- [x] MiddlePane.tsx 大顆按鈕 開始 暫停 結束 進度條
- [x] MiddlePane.tsx 大顆按鈕 時間到要累計 workCount
- [x] MiddlePane.tsx 能切換到 break 模式
- [x] WorkCountdownMain.tsx 整體的紅色要能切換藍色
- [x] FirstPlayCirclePane.tsx 播放按鈕加入 Link
- [ ] ToDoListExpansionPanel.tsx 能排序就太好了
- [x] AnalyticsMain.tsx 搭配 redux state
- [ ] RingtonesMain.tsx 沒有聲音功能
- [x] RingtonesMain.tsx 按鈕要記得換顏色
