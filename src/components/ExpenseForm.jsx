function ExpenseForm({ formData, setFormData, onSubmit, isEditing }) {
  return (
    <form
      className="expense-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input
        type="text"
        placeholder="Mô tả"
        value={formData.desc}
        onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
      />
      <input
        type="number"
        placeholder="Số tiền"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
      />
      <select
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      >
        <option>Ăn uống</option>
        <option>Đi lại</option>
        <option>Mua sắm</option>
        <option>Khác</option>
      </select>
      <button type="submit">{isEditing ? "Cập nhật" : "Thêm"}</button>
    </form>
  );
}

export default ExpenseForm;
