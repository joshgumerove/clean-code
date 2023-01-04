main();

function main() {
  const transactions = [
    {
      id: "t1",
      type: "PAYMENT",
      status: "OPEN",
      method: "CREDIT_CARD",
      amount: "23.99",
    },
    {
      id: "t2",
      type: "PAYMENT",
      status: "OPEN",
      method: "PAYPAL",
      amount: "100.43",
    },
    {
      id: "t3",
      type: "REFUND",
      status: "OPEN",
      method: "CREDIT_CARD",
      amount: "10.99",
    },
    {
      id: "t4",
      type: "PAYMENT",
      status: "CLOSED",
      method: "PLAN",
      amount: "15.99",
    },
  ];

  processTransactions(transactions);
}

// function processTransactions(transactions) {
//   if (transactions && transactions.length > 0) {
//     for (const transaction of transactions) {
//       if (transaction.type === "PAYMENT") {
//         if (transaction.status === "OPEN") {
//           if (transaction.method === "CREDIT_CARD") {
//             processCreditCardPayment(transaction);
//           } else if (transaction.method === "PAYPAL") {
//             processPayPalPayment(transaction);
//           } else if (transaction.method === "PLAN") {
//             processPlanPayment(transaction);
//           }
//         } else {
//           console.log("Invalid transaction type!");
//         }
//       } else if (transaction.type === "REFUND") {
//         if (transaction.status === "OPEN") {
//           if (transaction.method === "CREDIT_CARD") {
//             processCreditCardRefund(transaction);
//           } else if (transaction.method === "PAYPAL") {
//             processPayPalRefund(transaction);
//           } else if (transaction.method === "PLAN") {
//             processPlanRefund(transaction);
//           }
//         } else {
//           console.log("Invalid transaction type!", transaction);
//         }
//       } else {
//         console.log("Invalid transaction type!", transaction);
//       }
//     }
//   } else {
//     console.log("No transactions provided!");
//   }
// }

function processCreditCardPayment(transaction) {
  console.log(
    "Processing credit card payment for amount: " + transaction.amount
  );
}

function processCreditCardRefund(transaction) {
  console.log(
    "Processing credit card refund for amount: " + transaction.amount
  );
}

function processPayPalPayment(transaction) {
  console.log("Processing PayPal payment for amount: " + transaction.amount);
}

function processPayPalRefund(transaction) {
  console.log("Processing PayPal refund for amount: " + transaction.amount);
}

function processPlanPayment(transaction) {
  console.log("Processing plan payment for amount: " + transaction.amount);
}

function processPlanRefund(transaction) {
  console.log("Processing plan refund for amount: " + transaction.amount);
}

// bad code above
// should use guards and fail fast
// guards --> inverted the conditional logic and returning inside the condition (only)
// all code after the if statement will not execute (helps with removing nested code)

// adding a guard to dirty code
// function processTransactions(transactions) {
//   if (!transactions || transactions.length === 0) {
//     console.log("No transactions provided!");
//     return; // helped to remove one level of nesting
//   }

//   for (const transaction of transactions) {
//     if (transaction.type !== "OPEN") {
//       console.log("invalid transaction type!");
//       continue;
//     }
//     if (transaction.type === "PAYMENT") {
//       if (transaction.method === "CREDIT_CARD") {
//         processCreditCardPayment(transaction);
//       } else if (transaction.method === "PAYPAL") {
//         processPayPalPayment(transaction);
//       } else if (transaction.method === "PLAN") {
//         processPlanPayment(transaction);
//       }
//     } else if (transaction.type === "REFUND") {
//       if (transaction.status === "OPEN") {
//         if (transaction.method === "CREDIT_CARD") {
//           processCreditCardRefund(transaction);
//         } else if (transaction.method === "PAYPAL") {
//           processPayPalRefund(transaction);
//         } else if (transaction.method === "PLAN") {
//           processPlanRefund(transaction);
//         }
//       } else {
//         console.log("Invalid transaction type!", transaction);
//       }
//     } else {
//       console.log("Invalid transaction type!", transaction);
//     }
//   }
// }

// extracting control structures refactor of above
function processTransactions(transactions) {
  if (isEmpty(transactions)) {
    showErrorMessage("Not transactions provided!");
    return;
  }

  for (const transaction of transactions) {
    processTransaction(transaction);
  }
}

function isEmpty(transactions) {
  !transactions || transactions.length === 0;
}

function showErrorMessage(message) {
  console.log(message);
}

function processTransaction(transaction) {
  if (!isOpen(transaction)) {
    console.log("invalid transaction type!");
    return;
  }
  if (isPayment(transaction)) {
    processPayment(transaction);
  } else if (isRefund(transaction)) {
    processRefund(transaction);
  } else {
    console.log("Invalid transaction type!", transaction);
  }
}

function isOpen(transaction) {
  return transaction.status === "OPEN";
}

function usesCreditCard(transaction) {
  return transaction.method === "CREDIT_CARD";
}

function usesPayPal(transaction) {
  return transaction.method === "PAYPAL";
}

function usesPlan(transaction) {
  return transaction.method === "PLAN";
}

function isPayment(transaction) {
  return transaction.type === "PAYMENT";
}

function isRefund(transaction) {
  return transaction.type === "Refund";
}

function processPayment(paymentTransaction) {
  if (paymentTransaction.method === "CREDIT_CARD") {
    processCreditCardPayment(paymentTransaction);
  } else if (paymentTransaction.method === "PAYPAL") {
    processPayPalPayment(paymentTransaction);
  } else if (paymentTransaction.method === "PLAN") {
    processPlanPayment(paymentTransaction);
  }
}

function processRefund(refundTransaction) {
  if (refundTransaction.status === "OPEN") {
    if (refundTransaction.method === "CREDIT_CARD") {
      processCreditCardRefund(refundTransaction);
    } else if (refundTransaction.method === "PAYPAL") {
      processPayPalRefund(refundTransaction);
    } else if (refundTransaction.method === "PLAN") {
      processPlanRefund(refundTransaction);
    }
  } else {
    console.log("Invalid Transaction type!", refundTransaction);
  }
}
