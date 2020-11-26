# Hướng dẫn viết file Readme.md githup
- [1. Readme là gì](#1-readme-l%C3%A0-g%C3%AC)
- [2. Các thành phần của readme](#2-c%C3%A1c-th%C3%A0nh-ph%E1%BA%A7n-c%E1%BB%A7a-readme)
 - [2.1 Ký tự # - ký tự header](#21-ký-tự----ký-tự-header)
 - [2.2 Tạo contents](#22-tạo-contents)
 - [2.3 Trích xuất thông tin](#23-trích-xuất-thông-tin)
 - [2.4 Link](#24-link)
 - [2.5 Xuống dòng, khoảng trống](#25-xuống-dòng-khoảng-trống-1-thủ-thuật-nhỏ) 
 - [2.6 Giả lập code](#26-viết-code-ở-file-readme)
 - [2.7 In nghiêng, in đậm](#27-in-nghiêng-in-đậm--hay-)
 - [2.8 Gạch đầu dòng](#28-gạch-đầu-dòng)
 - [2.9 Tạo bảng](#29-tạo-bảng)
- [Tham khảo] 
## 1. Readme là gì?

Readme.md là một file hiển thị thông tin trên github, được viết dưới dạng ngôn ngữ thiết kế ( markup language), tương tự HTML, XML,... 

### Vậy tại sao một dự án (repo) cần có README ?
Chúng ta có thể thấy hầu hết các project ở trên github thường có một file readme đi kèm, vậy tại sao người lập trình cần tạo ra file readme, nếu không tạo thì có được không?
Khi chúng ta vào xem code của một người khác trên github file đầu tiên hiển thị trước mắt chúng ta đó chính là file readme. Nó giống như một cái thực đơn (menu) của nhà hàng,
khi chúng ta nhìn vào một cái menu nhà  hàng thì chúng ta có thể phần nào đó đoán được nhà hàng đó bán những loại thức ăn gì, nước uống gì, giá cả ra sao. File readme cũng có nhiều phần tương tự như vậy. 

Vậy các lợi ích của file README là gì?


1. Đầu tiên là thông tin về dự án (project) của các bạn, file readme sẽ chỉ ra một cách tổng quan cho các bạn biết dự án này đang làm về vấn đề gì, code web, android, hay AI... hay chỉ đơn giản là code một bài toán nhỏ.

2. Hướng dẫn người khác sử dụng code của project, khi các bạn vào các trang githup của express hay mongodb, ... để học tập một công nghệ mới, hoặc muốn sửa code của họ nếu như bạn thấy mình đủ trình. Khi bạn lên code của một cái game trên github sau đó bạn tải về, nhưng không biết cách sử dụng, thì file readme sẽ là một cái hướng dẫn sử dụng tuyệt vời cho bạn đấy.

## 2. Các thành phần của readme?
Trong phần này mình sẽ tập trung các thành phần của Readme và hướng dẫn các bạn sử dụng file readme để viết một file readme thật tuyệt vời.

### Các ký tự sử dụng trong file readme gồm #, $, *, ``` , [], 

### 2.1 Ký tự # - ký tự header
Chúng ta sẽ có 6 header tương ứng vơi mỗi dấu #, ví dụ # sẽ là head1, ### sẽ là header3. Nó sẽ trông như này:
# header H1 
## header H2 
### header H3 
#### header H4 
##### header H5 
###### header H6 

`Code: `

```
# header H1 
## header H2 
### header H3 
#### header H4 
##### header H5 
##### header H6 
```
Lưu ý là dấu # phải ở đầu dòng và có cách ra  một khoảng trắng nhỏ với dấu # nhá.

### 2.2 Tạo contents
Để tạo bảng được các bạn sử dụng * để khai báo một dòng.

Sử dụng [tagname] để link đến tab bên dưới.
#### Table of contents
* [Trích xuất thông tin](#23-trích-xuất-thông-tin)
* [Link ảnh](#24-link-ảnh)
* [Setup](#setup)

`Code: `

```
#### Table of contents
* [Trích xuất thông tin](#23-trích-xuất-thông-tin)
* [Link ảnh](#24-link-ảnh)
* [Setup](#setup)
```


### 2.3 Trích xuất thông tin
Để trích xuất thông tin, hay nói cách khác là hiển thị nó ở một block đặc biệt ta có thể sử dụng ký tự `,``, ```

#### Setup
To run this project, install it locally using npm:
```
$ cd ../lorem
$ npm install
$ npm start
```

### 2.4 Link
Để link đến một trang web chúng ta có thể dùng `(link)`

[node](http://nodejs.org) `Code: [node](http://nodejs.org).`

Để hiện thị một ảnh lên file readme thì điều đầu tiên là chúng ta cần upload ảnh lên github...

Sau đó dùng `![ name ] (link)` để link đến một ảnh

![tekst alternatywny](ścieżka/do/pliku) `Code: ![tekst alternatywny](ścieżka/do/pliku)` 

[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/) 

`Code: [![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)`

### 2.5 Xuống dòng, khoảng trống 1 thủ thuật nhỏ
dòng 1
dòng 2

dòng 1

dòng 2

                Git point – exemplary Android application. A table of content makes navigation easier, the screenshots, mentioned functionalities, and information how to support application's development
### 2.6 Viết code ở File readme

```js
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```
```bash
$ express /tmp/foo && cd /tmp/foo
```

### 2.7 In nghiêng in đậm * hay **
**từ cần in đậm**
*từ cần in nghiêng*

### 2.8 Gạch đầu dòng
- Gạch đầu dòng thứ nhất
  
  - Thụt với đầu dòng 1
  
  - Thụt với đầu dòng 1
 
- Gạch đầu dòng thứ hai
  
  - Thụt với đầu dòng 2
  
  - Thụt với đầu dòng 2
### 2.9 Tạo bảng
| Cột 1 Hàng 1 | Cột 2 | Cột 3| Cột 4 |
|--------------|-------|------|-------|
| Hàng 2 | 2 x 1 | 2 x 2 | 2 x 3 | 2 x 4 |
| Hàng 3 | 3 x 1 | 3 x 2 | 3 x 3 | 3 x 4 |
| Hàng 4 | 4 x 1 | 4 x 2 | 4 x 3 | 4 x 4 |

## Tham khảo
### Dùng Raw để phân tích githup Readme của người khác.

### Tham khảo thêm tại
https://markdownlivepreview.com/

https://github.com/hocchudong/git-github-for-sysadmin/blob/master/README.md



