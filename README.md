# Boilerplate React Vite
This boilerplate is build with vite and react

## I. Develop
### A. Prerequirement
- Node **20.x**

### B. HOW to start
```sh
# install the packages
npm install

# start the project
npm run dev
```

---
## II. Descriptions
此專案使用 `Vite` 作為打包工具 \
並且使用 `React` + `Typescript` 來建構整個專案

### A. Main Packages
| Package Name     | Version |
|------------------|---------|
| React            | 18.x    |
| React-Router-Dom | 6.23.x  |
| @line/liff       | 2.23.x  |
| typescript       | 5.2.x   |

### B. Structure
- **src/api**
  > 這個資料夾主要用來存放 API 相關的功能
- **src/asset**
  > 靜態資源檔案 (png, gif, jpg...)
- **src/const**
  > 存放 `常數` 與一些常用的 `Type`
- **src/lstore**
  > 存放跟 `LocalStorage` 相關的檔案 \
  > 這邊我把 LocalStorage 包裝成一個物件 \
  > 並且使用 `Enum` 存取欄位，這樣可以更有效的管理 LocalStorage 的內容
- **src/packages**
  > 跟 `第三方套件` 相關的資料夾 \
  > 例如 `line`、`i18next`、`axios` 相關的都會被存放在個別的資料夾內
- **src/pages**
  > 存放主頁面的資料夾
- **src/routes**
  > 存放 `Routing` 相關資料夾 \
  > 整個專案的 Routing Table 也會在此資料夾內做好定義
- **src/store**
  > 存放整個專案用的 `Context` (aka `Global States`) \
  > 這邊我都是使用 `zustand` 搭配 `immer` 來完成 \
  > 相比 React 原身的 `useContext` 或 `redux` 更簡單且方便

