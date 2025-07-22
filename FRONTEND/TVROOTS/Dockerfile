# Sử dụng Node.js image chính thức
FROM node:20

# Tạo thư mục làm việc
WORKDIR /app

# Copy package trước để tối ưu cache
COPY package*.json ./

RUN npm install

# Copy toàn bộ mã nguồn
COPY . .

# Build frontend nếu dùng Next.js (tùy bạn có muốn chạy `dev` hay `build`)
RUN npm run build

# Lắng nghe cổng 3001
EXPOSE 3001

# Chạy frontend ở chế độ production
CMD ["npm", "start"]
