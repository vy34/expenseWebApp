NGUYỄN THỊ NGỌC VY
22IT351
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 💰 Expense Tracker

Ứng dụng quản lý chi tiêu cá nhân, được xây dựng bằng **React.js**.  
Cho phép người dùng thêm, sửa, xóa chi tiêu, phân loại theo danh mục và hiển thị biểu đồ trực quan (Pie + Bar).  
Dữ liệu được lưu trong **LocalStorage** để không bị mất khi tải lại trang.

---

## 🚀 Tính năng

- ➕ Thêm chi tiêu mới (mô tả, số tiền, danh mục).
- ✏️ Sửa chi tiêu đã nhập.
- ❌ Xóa chi tiêu bất kỳ.
- 📊 Thống kê chi tiêu theo danh mục:
  - **Biểu đồ tròn (Pie Chart)** để xem tỷ lệ.
  - **Biểu đồ cột (Bar Chart)** để so sánh giá trị.
- 💾 Lưu dữ liệu bằng **LocalStorage** → không mất khi F5.
- 📱 Giao diện responsive, dễ sử dụng trên cả PC và mobile.

---

## 🛠️ Công nghệ sử dụng

- [React.js](https://reactjs.org/)  
- [Recharts](https://recharts.org/) (vẽ biểu đồ)  
- CSS thuần (tùy chỉnh giao diện)  

---

## 📂 Cấu trúc thư mục

src/
│── components/
│ ├── ExpenseForm.jsx # Form nhập chi tiêu
│ ├── ExpenseList.jsx # Danh sách chi tiêu
│ ├── ExpenseChart.jsx # Biểu đồ Pie + Bar
│
│── App.jsx # Thành phần chính
│── index.css # Style
│── App.css # 


---

## ▶️ Cách chạy dự án

1. **Clone project**  
   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   cd expense-tracker

npm install

npm run dev
