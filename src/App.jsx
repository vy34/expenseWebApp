import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  // 🔹 Khởi tạo trực tiếp từ localStorage
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    desc: "",
    amount: "",
    category: "Ăn uống",
  });

  // 🔹 Mỗi khi expenses thay đổi -> lưu vào localStorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleAddOrEdit = () => {
    if (!formData.desc || !formData.amount) return;

    if (editingIndex !== null) {
      const updated = [...expenses];
      updated[editingIndex] = {
        ...formData,
        amount: Number(formData.amount),
      };
      setExpenses(updated);
      setEditingIndex(null);
    } else {
      setExpenses([
        ...expenses,
        { ...formData, amount: Number(formData.amount) },
      ]);
    }

    setFormData({ desc: "", amount: "", category: "Ăn uống" });
  };

  const handleDelete = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(expenses[index]);
  };

  const totalExpense = expenses.reduce((t, e) => t + e.amount, 0);

  return (
    <div className="app-container">
      <h1>💰 Expense Tracker</h1>

      <ExpenseForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleAddOrEdit}
        isEditing={editingIndex !== null}
      />

      <ExpenseList
        expenses={expenses}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      <div className="total-expense">
        <strong>Tổng chi tiêu:</strong>{" "}
        <span style={{ color: "green" }}>
          {totalExpense.toLocaleString()} VND
        </span>
      </div>

      <ExpenseChart expenses={expenses} />
    </div>
  );
}

export default App;
