# Sử dụng Node.js image chính thức
FROM node:20

# Tạo thư mục làm việc
WORKDIR /app

# Copy file và cài đặt package
COPY . .

RUN npm install

# Lắng nghe cổng 3000
EXPOSE 3000

# Chạy ứng dụng
CMD ["npm", "start"]
