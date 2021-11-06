module.exports = {
    ACCOUNT_A: [
        {
            monthNumber: 0, // current month
            account: {
                balance: { amount: 50 },
            },
        },
        {
            monthNumber: 1, // last month
            account: {
                balance: { amount: 100 },
            },
        },
        {
            monthNumber: 2, // two months ago
            account: {
                balance: { amount: 200 },
            },
        },
        {
            monthNumber: 3, // two months ago
            account: {
                balance: { amount: 300 },
            },
        }
    ],
    ACCOUNT_B: [
        {
            monthNumber: 0,
            account: {
                balance: { amount: 0 },
            },
        },
        {
            monthNumber: 1,
            account: {
                balance: { amount: 100 },
            },
        },
        {
            monthNumber: 2,
            account: {
                balance: { amount: 200 },
            },
        },
        {
            monthNumber: 3,
            account: {
                balance: { amount: 300 },
            },
        }
    ],
    INCREASING_BAL: [
        {
            monthNumber: 0,
            account: {
                balance: { amount: 0 },
            },
        },
        {
            monthNumber: 1,
            account: {
                balance: { amount: 500 },
            },
        },
        {
            monthNumber: 2,
            account: {
                balance: { amount: 200 },
            },
        },
        {
            monthNumber: 3,
            account: {
                balance: { amount: 300 },
            },
        }
    ],
    ONLY_2_OBJ: [
        {
            monthNumber: 0,
            account: {
                balance: { amount: 0 },
            },
        },
        {
            monthNumber: 3,
            account: {
                balance: { amount: 300 },
            },
        }
    ]
}