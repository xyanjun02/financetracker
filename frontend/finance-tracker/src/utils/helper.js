import moment from "moment";

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const getInitials = (name) => {
  if (!name) return "";

  const words = name.split(" ");
  let initials = "";

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0];
  }

  return initials.toUpperCase();
};

export const addThousandsSeparator = (num) => {
  if (num == null || isNaN(num)) return "";

  const [integerPart, fractionalPart] = num.toString().split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return fractionalPart
    ? `${formattedInteger}.${fractionalPart}`
    : formattedInteger;
};

export const prepareExpenseBarChartData = (data = []) => {
  // Group by category (case-insensitive) and sum amounts
  const totalsByCategory = data.reduce((acc, item) => {
    const category = (item?.category || '').toLowerCase().trim();
    const amount = Number(item?.amount) || 0;
    
    if (category) {
      acc[category] = (acc[category] || 0) + amount;
    }
    
    return acc;
  }, {});

  // Convert to array with proper capitalization and sort by amount (descending)
  const chartData = Object.entries(totalsByCategory)
    .map(([category, total]) => ({
      category: category.charAt(0).toUpperCase() + category.slice(1), // Capitalize first letter
      amount: total,
    }))
    .sort((a, b) => b.amount - a.amount); // Sort by highest amount first

  return chartData;
};
export const prepareIncomeBarChartData = (data = []) => {
  const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));

  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format('Do MMM'),
    amount: item?.amount,
    source: item?.source,
  }));

  return chartData;
};

export const prepareExpenseLineChartData = (data = []) => {
  // Group by day and sum amounts
  const totalsByDay = data.reduce((acc, item) => {
    // Normalize date to YYYY-MM-DD format, removing time
    const day = moment(item?.date).format('YYYY-MM-DD');
    const amount = Number(item?.amount) || 0;
    acc[day] = (acc[day] || 0) + amount;
    return acc;
  }, {});

  console.log('Grouped data:', totalsByDay); // Debug log

  // Convert to array and sort by date
  const chartData = Object.entries(totalsByDay)
    .sort((a, b) => new Date(a[0]) - new Date(b[0]))
    .map(([day, total]) => ({
      month: moment(day).format('Do MMM'),
      amount: total,
    }));

  console.log('Chart data:', chartData); // Debug log

  return chartData;
};
