# Hướng dẫn viết file Readme.md githup

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

### 2.2 Tạo bảng
Để tạo bảng được các bạn sử dụng * để khai báo một dòng.

Sử dụng [tagname] để link đến tab bên dưới.
#### Table of contents
* [Trích xuất thông tin](#23-trích-xuất-thông-tin)
* [Link ảnh](#24-link-ảnh)
* [Setup](#setup)

`Code: `

```
#### Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
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
### 2.4 Link ảnh
Để hiện thị một ảnh lên file readme thì điều đầu tiên là chúng ta cần upload ảnh lên ...

Sau đó dùng `![ name ] (link)` để link đến một ảnh
![tekst alternatywny](ścieżka/do/pliku)

