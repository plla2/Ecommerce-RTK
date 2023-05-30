# 카테고리별 상품들이 있는 잡화점

</br>

## 🧲 Stacks
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Redux-Tookit-764ABC?style=for-the-badge&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">

</br>

## 🎬 결과 GIF
![May-30-2023 23-28-53](https://github.com/plla2/Ecommerce-RTK/assets/120915990/759c4995-b253-450c-b85d-43e9d790b5c0)


</br>


## 💻 Repo 소개
메인페이지엔 5개의 카테고리와 각 카테고리별 대표 상품들이 있고</br>
상품의 이미지를 누르면 모달로 개수를 선택한 후 장바구니에 추가하는 쇼핑몰 페이지이다.

</br>

## 🖋️ 주요 기능
<ul>
  <li> 헤더에는 로고와 검색창 장바구니가 있다. 로고는 클릭시 '/' 경로로 이동한다. 장바구니 클릭시 '/cart' 경로로 이동한다.</li></br>
  <li> 메인페이지에서('/') 는 5개의 카테고리가 필터링의 역할로 보여지고 있다.</li></br>
  <li> 메인페이지('/') 에서 상품들을 클릭해보면 모달이 뜬다. 모달에는 상품의 사진과 설명, 가격, 개수를 선택하고 장바구니에 추가할 수 있다.</li></br>
  <li> 장바구니페이지('/cart') 에서는 메인페이지에서 장바구니에 추가했던 상품의 정보들과, 개수, 가격이 나와있고</br> 장바구니에서도 각각 상품별로 개수를 증.감 시킬수 있고, 장바구니   에서 휴지통 버튼을 눌러 해당 아이템을 장바구니에서 삭제할 수 있다.</br> 또한 장바구니 초기화 버튼을 통해 장바구니 모든상품들을 삭제할 수 있다.</li></br>
  <li> 장바구페이지('/cart') 오른편에는 주문서로 장바구니에 추가된 상품의 개수와 가격을 곱하고 다 더해서 총 가격을 나타내준다.</li>
</ul>

</br>

## ❌ 에러내용 및 해결
1. 에러내용 : ```SingleCategory.js``` 파일 작업중에 상품의 이름을 동적으로 띄우려는데 해당 에러가 발생하였다.
</br>

![image](https://github.com/plla2/Ecommerce-RTK/assets/120915990/a4a52d4b-c8ad-4129-9077-90169ae13a9d)

해결방법 : 상품의 이름인 ```product.category.name``` 을 입력해 주었어야 했는데</br> ```product.category``` 라고 작성하여 name 프로퍼티를 읽지 못했던 것이다.</br></br></br>

2. 에러내용 : ```productSlice.js``` 파일 코딩 후 새로고침을 하고 나니 해당 에러가 발생하였다.
</br>

![image](https://github.com/plla2/Ecommerce-RTK/assets/120915990/21755034-39ee-4f43-86e5-27d20f85a8b8)

해결방법 : ```store.js``` 에서 ```productSlice.js``` 의 리듀서 함수들을 import해오지 않아서 생긴 오류였다.</br>
store.js에서 해당 상태 값이 업데이트되는 액션 및 리듀서를 확인해야 합니다. 
상태 값을 가져오는 컴포넌트가 마운트되기 전에 해당 상태 값이 업데이트되는지 확인해야 합니다.
```productSlice.js``` 의 리듀서함수들을 가져와서 ```store.js``` 에 저장했더니 에러가 해결되었다.</br></br></br>

3. 에러내용 : ```singleProduct.js``` 파일 코딩 후 상품 모달에서 수량을 업데이트 하는 -, + 버튼을 눌러보니 아래의 에러가 발생하였다.
</br>

![image](https://github.com/plla2/Ecommerce-RTK/assets/120915990/1d354fdc-cd85-4345-b5da-14cdd62f87f6)

해결방법 : 에러 메세지를 읽어보니 숫자타입이 아니라서 +1, -1을 못한다는 에러메세지였다.</br>
수량의 상태를 나타내는 ```qty``` 를 ```useState``` 훅을 통해 상태를 저장할 때 기본값으로 1을 지정해주지 않아 나타난 에러였다.</br>
```const [qty, setQty] = useState(1)```로 기본값을 주어 숫자타입을 명시해주니까 해결되었다.</br></br></br>

4. 에러내용 : ```cartSlice.js``` 파일 코딩 후 새로고침을 하고나니 아래의 에러가 발생하였다.
</br>

![image](https://github.com/plla2/Ecommerce-RTK/assets/120915990/4c537a19-85a3-42f9-b250-d18564cefc87)

해결방법 : 해당 에러는 ```setItem``` 메서드를 호출할 때, 필요한 인수(argument)가 2개가 필요하지만, 현재는 1개만 전달되었기 때문에 발생하는 것입니다.</br>
```localStorage.setItem('cart')``` 의 반환 값은 ```undefined``` 이므로, ```JSON.parse(undefined)``` 를 호출하게 되어 에러가 발생합니다.</br>
아래의 코드에서 ```localStorage.getItem('cart')``` 는 ```'cart'``` 키에 해당하는 값을 가져옵니다.</br> 그리고 해당 값을 ```JSON.parse()``` 메서드를 사용하여 JavaScript 객체로 변환한 후 반환합니다.</br>이렇게 하면 localStorage에서 가져온 값을 올바르게 반환하게 됩니다.</br></br>
<b>변겅 전 코드</b>

![image](https://github.com/plla2/Ecommerce-RTK/assets/120915990/49448072-1a10-49cb-9a98-a29cc80f5c36)

<b>변겅 후 코드</b>

![image](https://github.com/plla2/Ecommerce-RTK/assets/120915990/497e6614-bbf9-46e2-bbd1-463e27ca7ab6)

</br></br>

5. 에러내용 : ```cartPage.js``` 파일 코딩 후 새로고침을 하고나니 아래의 에러가 발생하였다.
</br>

![image](https://github.com/plla2/Ecommerce-RTK/assets/120915990/f53abd56-50c1-4ad2-9db1-3b25de8c33ca)

해결방법 : 해당 경고 메시지는 React에서 함수를 컴포넌트의 자식(child)으로 사용할 수 없다는 것을 나타내는 것입니다. </br>컴포넌트를 렌더링할 때 함수를 반환하고 있는 경우 React 컴포넌트를 렌더링할 때, 함수를 호출하여 반환된 값을 사용해야 합니다.</br>
그래서 ```useSelector``` 로 ```totalItems``` 를 받아와서 에러를 없앨 수 있었다.</br>하지만 navbar의 장바구니에 담아진 아이템의 개수가 떠야하는데 ```localstorage``` 에 아이템을 담아도 0만 떴다. </br>30분간 헤맸었는데
이유는 아주 간단했음. </br>Navbar 컴포넌트에서 ```getCartTotals``` 리듀서를 ```dispatch()``` 해주지않아서 스토어의 totalItems의 새로운 값을 반환받아오지 못했기 때문에 계속 0으로 뜬 것이다.</br>```dispatch()``` 에 리듀서를 넣어주어 액션을 처리하여서 totalItems를 받아올 수 있었다.</br></br></br>


## ⚙️ Prerequisites
<ul>
<li>react >= 18.2.0
<li>react-router-dom >= 6.11.2
<li>@reduxjs/toolkit >= 1.9.5
<li>sass >= 1.62.1

### Install
```npx create-react-app .```</br>
```npm install react-router-dom --save```</br>
```npm install @reduxjs/toolkit```</br>
```npm install styled-components@latest```</br>

</br>

## 🗄️ 폴더 구조
```
Ecommerce-RTK
│
├─ node_modules
├─ .gitattributes
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ index.html
│  ├─ manifest.json
│  └─ robots.txt
│
├─ README.md
└─ src
   ├─ App.scss
   ├─ App.js
   ├─ index.js
   ├─ assets
   │  └─ images
   │     ├─ error.png
   │     ├─ img1.png
   │     ├─ img2.png
   │     ├─ img3.png
   │     └─ spinner.png
   │ 
   ├─ components
   │  ├─ Category
   │  │  ├─ Category.js
   │  │  └─ Category.scss
   │  ├─ Error
   │  │  ├─ Error.js
   │  │  └─ Error.scss
   │  ├─ Footer
   │  │  ├─ Footer.js
   │  │  └─ Footer.scss
   │  ├─ Footer
   │  │  ├─ Footer.js
   │  │  └─ Footer.scss
   │  ├─ Loader
   │  │  ├─ Loader.js
   │  │  └─ Loader.scss
   │  ├─ Navbar
   │  │  ├─ Navbar.js
   │  │  └─ Navbar.scss
   │  ├─ ProductList
   │  │  ├─ ProductList.js
   │  │  └─ ProductList.scss
   │  ├─ SingleCategory
   │  │  ├─ SingleCategory.js
   │  │  └─ SingleCategory.scss
   │  ├─ SingleProduct
   │  │  ├─ SingleProduct.js
   │  │  └─ SingleProduct.scss
   │  └─ Slider
   │     ├─ Slider.js
   │     └─ Slider.scss
   │  
   │
   ├─ stores
   │  ├─ cartSlice.js
   │  ├─ modalSlice.js
   │  ├─ productSlice.js
   │  ├─ categorySlice.js
   │  └─ store.js
   │
   ├─ pages
   │  ├─ CartPage
   │  │  ├─ CartPage.js
   │  │  └─ CartPage.scss
   │  ├─ CategoryPage
   │  │  ├─ CategoryPage.js
   │  │  └─ CategoryPage.scss
   │  ├─ HomePage
   │  │  ├─ HomePage.js
   │  │  └─ HomePage.scss
   │  └─ index.js
   │
   └─ utils
      ├─ apiURL.js
      ├─ helpers.js
      ├─ images.js
      └─ status.js
     
 ```
