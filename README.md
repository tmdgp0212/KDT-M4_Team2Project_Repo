# 2조 프로젝트 

- 프로젝트명: 2조 프로젝트
- 팀원: 최환석, 장화현, 조승혜, 정윤조, 김민기
- 프로젝트 기간: 2023. 01. 30 ~ 2023.03.03
- 배포된 링크: [https://next-furniture.vercel.app/](https://next-furniture.vercel.app/)

- 테스트용 계정 정보
  - ID: abc@gmail.com
  - PW: 12341234

- 테스트용 마스터 페이지 가는 법
  - `fotter`  부분에 있는 `* master page` 를 클릭하면 마스터 페이지로 이동합니다.

## 프로젝트 소개

안녕하세요 저희는 2조입니다. 저희가 만든 사이트는 NEXT_FURNITURE 라는 가구 쇼핑몰을 만들었습니다.

사이트의 전체적인 모습

- 메인 화면
![example1.png](https://github.com/BeeMOre32/KDT4-M4/blob/Team3/example/example1.png?raw=true)

- 제품상세 페이지 
![example2.png](https://github.com/BeeMOre32/KDT4-M4/blob/Team3/example/example2.png?raw=true)

- 장바구니 페이지
![img.png](https://github.com/BeeMOre32/KDT4-M4/blob/Team3/example/example3.png?raw=true)

- 주문 페이지
 ![img.png](https://github.com/BeeMOre32/KDT4-M4/blob/Team3/example/example4.png?raw=true)

- 마이페이지
![img.png](https://github.com/BeeMOre32/KDT4-M4/blob/Team3/example/example5.png?raw=true)

- 검색 페이지
![img.png](https://github.com/BeeMOre32/KDT4-M4/blob/Team3/example/example6.png?raw=true)

- 로그인 페이지
![img.png](https://github.com/BeeMOre32/KDT4-M4/blob/Team3/example/example7.png?raw=true)

- 마스터 페이지
![img.png](https://github.com/BeeMOre32/KDT4-M4/blob/Team3/example/example8.png?raw=true)

## 프로젝트 멤버 및 작업 목록

|                                    최환석                                     |                                    장화현                                     |                                     조승혜                                     |                                    정윤조                                     |                                     김민기                                     |
|:--------------------------------------------------------------------------:|:--------------------------------------------------------------------------:|:---------------------------------------------------------------------------:|:--------------------------------------------------------------------------:|:---------------------------------------------------------------------------:|
| <img src="https://avatars.githubusercontent.com/u/97926993?v=4" width=110> | <img src="https://avatars.githubusercontent.com/u/74212632?v=4" width=110> | <img src="https://avatars.githubusercontent.com/u/112364408?v=4" width=110> | <img src="https://avatars.githubusercontent.com/u/89414343?v=4" width=110> | <img src="https://avatars.githubusercontent.com/u/120410962?v=4" width=110> |
|                    [최환석](https://github.com/BeeMOre32)                     |                   [장화현](https://github.com/janghwahyun/)                   |                     [조승혜](https://github.com/tmdgp0212)                     |                     [정윤조](https://github.com/jyj1111)                      |                     [김민기](https://github.com/minki-dev)                     |
|              마스터 페이지 <br/> 서버리스 펑션 및 기본 api구조 제작 <br/> 디버깅 담당              |        로그인 페이지  </br> 회원가입  페이지                              |               메인페이지 <br/> 검색 페이지 및 필터링 <br/> 페이지 전체적인 레이아웃 수정 <br/> 마이 페이지/나의 정보 페이지               |                           장바구니 페이지 <br/> 결제 페이지                            |                            마이 페이지/나의 주문 페이지 <br/>마이 페이지/나의 계좌 페이지                           |

### 프로젝트의 기능구현 사항

📌 필수사항

- [x] 제공된 API를 사용하여 해당하는 쇼핑몰을 구성하기.
- [x] 회원가입 페이지를 제작하여 회원가입 기능 구현하기.
- [x] 로그인 페이지를 제작하여 로그인 기능 구현하기.
- [x] 상품 리스트 페이지를 제작하여 상품 리스트 및 상세 페이지를 구현하여 상품 구매 기능 구현하기.
- [x] 장바구니 페이지를 제작하여 장바구니 기능 구현하기.
- [x] 주문 페이지를 제작하여 주문 기능 구현하기.
- [x] 마이페이지를 제작하여 마이페이지 기능 구현하기.
- [x] 검색 페이지를 제작하여 검색 및 필터를 통해 검색을 구현하기.

### 프로젝트 기술 스택

- Basic: `HTML` `Scss` `JavaScript`
- Library: `node-fetch` `Parcel` `Swiper` `Navigo` `Vercel`
- Deploy: `Vercel`
- Bundler: `Parcel`
- serverless function: `Vercel Serverless Function`

### 프로젝트 구조

```
├── README.md
├── package.json
├── package-lock.json
├── index.html
├── .gitignore
├── api
│   ├── (서버리스 함수)
├── src
│   ├── images
│   ├── pages
│   │   ├── (페이지를 구성하기 위한 js파일)
│   ├── style
│   │   ├── (페이지를 구성하기 위한 scss파일)
│   ├── utils
│   │   ├── (api를 호출하기 위한 js파일)
│   │   ├── (각종 유틸리티 함수 모음)
│   ├── common.js
│   ├── router.js
```

### 프로젝트 기능

- 회원가입 및 로그인 페이지
  - 회원가입 페이지에서는 이메일, 비밀번호, 이름, 전화번호를 입력받아 회원가입을 할 수 있습니다.
  - 로그인 페이지에서는 이메일과 비밀번호를 입력받아 로그인을 할 수 있습니다.

- 메인 페이지
  - 메인 페이지에서는 추천하는 혹은 새로나온 신규 상품등을 보여줍니다.
  - 상품을 클릭하면 상품 상세 페이지로 이동합니다.

- 상품 상세 페이지
  - 상품 상세 페이지에서는 상품의 상세 정보를 보여줍니다.
  - 상품을 선택하고 그것을 장바구니에 담을 수 있습니다.

- 장바구니 페이지
  - 장바구니 페이지에서는 장바구니에 담긴 상품들을 보여줍니다.
  - 상품을 선택하고 그것을 주문할 수 있습니다.
  - 장바구니안에 있는 물건의 수량을 조절 할 수 있습니다.

- 주문 페이지
    - 주문 페이지에서는 주문할 상품들을 보여줍니다.
    - 주문할 상품들을 선택하고 그것을 결제할 수 있습니다.

- 마이 페이지
  - 마이 페이지에서는 나의 정보, 나의 주문, 나의 계좌를 확인할 수 있습니다.
  - 나의 정보에서는 내 정보를 수정할 수 있습니다.
  - 나의 주문에서는 내가 주문한 내역을 확인할 수 있습니다.
  - 나의 계좌에서는 내 계좌를 확인할 수 있습니다.

- 검색 페이지
  - 검색 페이지에서는 상품을 검색할 수 있습니다.
  - 검색한 상품들을 필터링할 수 있습니다.

- 마스터 페이지
  - 마스터 페이지에는 직접 상품을 등록하여 상품을 추가할 수 있습니다.
  - 마스터 페이지에는 직접 상품을 수정 및 삭제할 수 있습니다.
  - 마스터 페이지에는 현재 거래가 완료 되거나 혹은 거래가 진행 중인 상품을 확인 할 수 있습니다.

