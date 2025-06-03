# TVRoots Backend

TVRoots Backend là một ứng dụng NestJS cung cấp API cho dự án TVRoots - nền tảng cung cấp thông tin về các di tích lịch sử và văn hóa tại tỉnh Trà Vinh.

## Mục lục

- [Cài đặt](#cài-đặt)
- [Chạy ứng dụng](#chạy-ứng-dụng)
- [Kiến trúc dự án](#kiến-trúc-dự-án)
- [Cấu trúc dữ liệu](#cấu-trúc-dữ-liệu)
- [API Endpoints](#api-endpoints)
  - [Lấy danh sách địa điểm](#lấy-danh-sách-địa-điểm)
  - [Lấy thông tin chi tiết địa điểm](#lấy-thông-tin-chi-tiết-địa-điểm)
  - [Tìm kiếm địa điểm](#tìm-kiếm-địa-điểm)
  - [Lấy thông tin tổng quan](#lấy-thông-tin-tổng-quan)
  - [Lấy thông tin thống kê](#lấy-thông-tin-thống-kê)
  - [Lấy danh sách địa điểm theo khu vực](#lấy-danh-sách-địa-điểm-theo-khu-vực)
- [Kiểm thử](#kiểm-thử)
- [Giấy phép](#giấy-phép)

## Cài đặt

```bash
# Cài đặt các gói phụ thuộc
$ npm install
```

## Chạy ứng dụng

```bash
# Chế độ phát triển
$ npm run start

# Chế độ theo dõi (tự động khởi động lại khi có thay đổi)
$ npm run start:dev

# Chế độ sản phẩm
$ npm run start:prod
```

## Kiến trúc dự án

Dự án được xây dựng trên framework NestJS với cấu trúc như sau:

- `src/main.ts`: Điểm khởi đầu của ứng dụng
- `src/app.module.ts`: Module chính của ứng dụng
- `src/sites`: Module quản lý các địa điểm di tích
  - `sites.controller.ts`: Định nghĩa các API endpoints
  - `sites.service.ts`: Xử lý logic nghiêp vụ
  - `schemas/site.schema.ts`: Định nghĩa schema MongoDB cho địa điểm
- `src/data`: Chứa dữ liệu JSON
  - `data.json`: Dữ liệu về các di tích và thông tin tổng quan

## Cấu trúc dữ liệu

### Site (Địa điểm)

```typescript
{
  id: string;              // ID duy nhất của địa điểm
  name: string;            // Tên địa điểm
  image: string;           // Đường dẫn hình ảnh
  description: string;     // Mô tả ngắn
  location: string;        // Vị trí địa lý
  established: string;     // Thời gian thành lập
  recognition: string;     // Thời gian công nhận di tích
  details: {               // Thông tin chi tiết
    history: string;       // Lịch sử
    culturalValue: string[]; // Giá trị văn hóa
    historicalValue: string[]; // Giá trị lịch sử
    services: string[];    // Dịch vụ
    info: string[];        // Thông tin chung
    mapUrl: string;        // URL nhúng bản đồ
    directionsUrl: string; // URL chỉ đường
  }
}
```

## API Endpoints

### Lấy danh sách địa điểm

```
GET /sites
```

Lấy tất cả các địa điểm di tích.

**Tham số truy vấn:**
- `recognition` (tùy chọn): Lọc theo cấp công nhận
  - `quocgia`: Lấy các di tích cấp quốc gia
  - `tinh`: Lấy các di tích cấp tỉnh

**Ví dụ:**
```
GET /sites?recognition=quocgia
```

**Phản hồi:**
```json
[
  {
    "id": "aobaom",
    "name": "Ao Ba Om",
    "image": "ditichquocgia/aobaom.jpg",
    "description": "Ao Ba Om được hình thành vào thế kỷ thứ 10, theo truyền thuyết do bà Om - một phụ nữ người Khmer đào nên.",
    "location": "Phường 8, TP. Trà Vinh",
    "established": "Thế kỷ 10",
    "recognition": "02/12/1994",
    "details": {
      "history": "Ao Ba Om được hình thành vào thế kỷ thứ 10, theo truyền thuyết do bà Om - một phụ nữ người Khmer đào nên. Ban đầu ao được đào để trữ nước phục vụ sinh hoạt và tưới tiêu.",
      "culturalValue": [
        "Trung tâm văn hóa Khmer",
        "Nơi diễn ra lễ hội Ok Om Bok",
        "Điểm tổ chức lễ hội truyền thống",
        "Công trình thủy lợi cổ"
      ],
      "historicalValue": [
        "Di tích văn hóa cấp quốc gia",
        "Chứng tích lịch sử Khmer",
        "Nơi lưu giữ văn hóa truyền thống",
        "Điểm son văn hóa tâm linh"
      ],
      "services": [
        "Hướng dẫn tham quan",
        "Khu vui chơi giải trí",
        "Không gian xanh mát",
        "Bãi đỗ xe"
      ],
      "info": [
        "Mở cửa: 6:00 - 18:00",
        "Thuyết minh đa ngôn ngữ",
        "Tham quan miễn phí",
        "Chụp ảnh tự do"
      ],
      "mapUrl": "https://www.google.com/maps/embed?...",
      "directionsUrl": "https://www.google.com/maps/dir//..."
    }
  },
  // ... các địa điểm khác
]
```

### Lấy thông tin chi tiết địa điểm

```
GET /sites/:id
```

Lấy thông tin chi tiết của một địa điểm theo ID.

**Tham số đường dẫn:**
- `id`: ID của địa điểm

**Ví dụ:**
```
GET /sites/aobaom
```

**Phản hồi:**
```json
{
  "id": "aobaom",
  "name": "Ao Ba Om",
  "image": "ditichquocgia/aobaom.jpg",
  "description": "Ao Ba Om được hình thành vào thế kỷ thứ 10, theo truyền thuyết do bà Om - một phụ nữ người Khmer đào nên.",
  "location": "Phường 8, TP. Trà Vinh",
  "established": "Thế kỷ 10",
  "recognition": "02/12/1994",
  "details": {
    "history": "Ao Ba Om được hình thành vào thế kỷ thứ 10, theo truyền thuyết do bà Om - một phụ nữ người Khmer đào nên. Ban đầu ao được đào để trữ nước phục vụ sinh hoạt và tưới tiêu.",
    "culturalValue": [
      "Trung tâm văn hóa Khmer",
      "Nơi diễn ra lễ hội Ok Om Bok",
      "Điểm tổ chức lễ hội truyền thống",
      "Công trình thủy lợi cổ"
    ],
    "historicalValue": [
      "Di tích văn hóa cấp quốc gia",
      "Chứng tích lịch sử Khmer",
      "Nơi lưu giữ văn hóa truyền thống",
      "Điểm son văn hóa tâm linh"
    ],
    "services": [
      "Hướng dẫn tham quan",
      "Khu vui chơi giải trí",
      "Không gian xanh mát",
      "Bãi đỗ xe"
    ],
    "info": [
      "Mở cửa: 6:00 - 18:00",
      "Thuyết minh đa ngôn ngữ",
      "Tham quan miễn phí",
      "Chụp ảnh tự do"
    ],
    "mapUrl": "https://www.google.com/maps/embed?...",
    "directionsUrl": "https://www.google.com/maps/dir//..."
  }
}
```

### Tìm kiếm địa điểm

```
GET /sites/search
```

Tìm kiếm địa điểm theo từ khóa.

**Tham số truy vấn:**
- `query`: Từ khóa tìm kiếm

**Ví dụ:**
```
GET /sites/search?query=chùa
```

**Phản hồi:**
```json
[
  {
    "id": "chuaan",
    "name": "Chùa Âng",
    "image": "ditichquocgia/chuaang.jpg",
    "description": "Chùa Âng được xây dựng vào khoảng năm 990, là một trong những ngôi chùa Khmer cổ nhất tại Trà Vinh.",
    "location": "Khóm 4, Phường 8, TP. Trà Vinh",
    "established": "Khoảng năm 990",
    "recognition": "16/11/2018",
    "details": {
      // ... chi tiết
    }
  },
  // ... các địa điểm khác
]
```

### Lấy thông tin tổng quan

```
GET /sites/overview
```

Lấy thông tin tổng quan về các di tích.

**Tham số truy vấn:**
- `type` (tùy chọn): Loại di tích
  - `quocgia`: Chỉ lấy thông tin về di tích cấp quốc gia
  - `tinh`: Chỉ lấy thông tin về di tích cấp tỉnh
  - `all` (mặc định): Lấy thông tin về cả hai loại

**Ví dụ:**
```
GET /sites/overview?type=quocgia
```

**Phản hồi:**
```json
{
  "introduction": {
    "title": "Giá trị di sản văn hóa Trà Vinh (Di tích cấp quốc gia)",
    "description": "Di tích cấp quốc gia tại Trà Vinh là minh chứng cho sự đa dạng và phong phú trong di sản văn hóa - lịch sử của vùng đất này...",
    "values": [
      {
        "title": "Giá trị lịch sử",
        "description": "Ghi dấu những sự kiện, nhân vật quan trọng trong lịch sử địa phương và đất nước"
      },
      // ... các giá trị khác
    ],
    "conclusion": "Việc bảo tồn và phát huy giá trị của các di tích này không chỉ góp phần gìn giữ bản sắc văn hóa dân tộc..."
  },
  "statistics": {
    "total": 12,
    "categories": [
      {
        "name": "Di tích kiến trúc nghệ thuật",
        "count": 5
      },
      // ... các loại khác
    ]
  },
  "distribution": [
    {
      "location": "TP. Trà Vinh",
      "count": 4
    },
    // ... các địa điểm khác
  ],
  "generalInfo": [
    "Được công nhận từ năm 1990 đến nay",
    // ... thông tin khác
  ]
}
```

### Lấy thông tin thống kê

```
GET /sites/statistics
```

Lấy thông tin thống kê về các di tích.

**Phản hồi:**
```json
{
  "quocgia": {
    "total": 12,
    "categories": [
      {
        "name": "Di tích kiến trúc nghệ thuật",
        "count": 5
      },
      // ... các loại khác
    ]
  },
  "tinh": {
    "total": 12,
    "categories": [
      {
        "name": "Di tích kiến trúc nghệ thuật",
        "count": 5
      },
      // ... các loại khác
    ]
  }
}
```

### Lấy danh sách địa điểm theo khu vực

```
GET /sites/locations
```

Lấy danh sách địa điểm được nhóm theo khu vực địa lý.

**Phản hồi:**
```json
[
  {
    "location": "TP. Trà Vinh",
    "sites": [
      {
        "id": "aobaom",
        "name": "Ao Ba Om",
        "image": "ditichquocgia/aobaom.jpg"
      },
      // ... các địa điểm khác
    ],
    "count": 4
  },
  {
    "location": "H. Châu Thành",
    "sites": [
      // ... các địa điểm
    ],
    "count": 2
  },
  // ... các khu vực khác
]
```

## Kiểm thử

```bash
# Kiểm thử đơn vị
$ npm run test

# Kiểm thử end-to-end
$ npm run test:e2e

# Độ phủ kiểm thử
$ npm run test:cov
```

## Giấy phép

Dự án này được phát hành dưới [Giấy phép MIT](LICENSE).
