function ExpenseList({ expenses, onDelete, onEdit }) {
  return (
    <ul className="expense-list">
      {expenses.map((expense, index) => (
        <li key={index} className="expense-item">
          <span className="expense-text">
            {expense.desc} - {expense.amount} VND ({expense.category})
          </span>
          <div className="expense-actions">
            <button className="edit-btn" onClick={() => onEdit(index)}>✏️ Sửa</button>
            <button className="delete-btn" onClick={() => onDelete(index)}>❌ Xóa</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
