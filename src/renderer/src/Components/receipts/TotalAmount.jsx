import React, { useEffect, useState } from 'react';

const TotalAmount = ({ total }) => {
  const [spendingLimit, setSpendingLimit] = useState(null);
  const [isLimitExceeded, setIsLimitExceeded] = useState(false);

  useEffect(() => {
    const storedLimit = localStorage.getItem('userSpendingLimit');
    if (storedLimit) {
      const { amount } = JSON.parse(storedLimit);
      setSpendingLimit(parseFloat(amount));
    }
  }, []);

  useEffect(() => {
    setIsLimitExceeded(spendingLimit !== null && typeof total === 'number' && total < spendingLimit);
  }, [total, spendingLimit]);

  const formatAmount = (amount) => {
    return typeof amount === 'number' ? amount.toFixed(2) : '0.00';
  };

  return (
    <div className={`total-amount ${isLimitExceeded ? 'limit-exceeded' : ''}`}>
      <strong>Total Amount: ${formatAmount(total)}</strong>
      {/* {spendingLimit === null ? (
        <div className="no-limit-message">No spending limit set. Set a limit to monitor your spending!</div>
      ) : isLimitExceeded ? (
        <div className="limit-exceeded">
          <span className="limit-exceeded-message">Warning! Spending Limit Exceeded</span>
        </div>
      ) : (
        <div className="limit-progress">
          Limit: ${formatAmount(spendingLimit)} (${formatAmount(spendingLimit - (total || 0))} remaining)
        </div>
      )} */}
    </div>
  );
};

export default TotalAmount;