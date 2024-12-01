import { Account } from "@/utils/types";

export const mockAccounts: Account[] = [
  {
    account_id: "ACC001",
    holder: {
      firstName: "James",
      lastName: "Radford",
      jointNames: "",
      username: "sample1",
      password: "sample1",
    },
    bank_details: {
      account_type: "Checking",
      balance_usd: 2500000.0,
    },
    transaction_mgs_code: {
      transaction_text_msg: "",
      transaction_code: "",
      wireDate: true,
    },
    transaction_history: [
      {
        transaction_id: "TXN001",
        dateTime: "March 23rd 2024, 3:32:32 am",
        description: "Sinlair's Store - Trx",
        status: "Success",
        amount_usd: 452.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN002",
        dateTime: "March 20th 2024, 2:02:22 am",
        description: "Justin Loci",
        status: "Success",
        amount_usd: 1152.21,
        account_no: "****7676",
      },
      {
        transaction_id: "TXN003",
        dateTime: "March 20th 2024, 2:02:22 am",
        description: "Transfer",
        status: "Success",
        amount_usd: -100.0,
        account_no: "****4409",
      },
      {
        transaction_id: "TXN004",
        dateTime: "March 20th 2024, 2:02:22 am",
        description: "Payment",
        status: "Success",
        amount_usd: -50.0,
        account_no: "****5093",
      },
      {
        transaction_id: "TXN005",
        dateTime: "March 20th 2024, 2:02:22 am",
        description: "Online Purchase",
        status: "Success",
        amount_usd: -75.0,
        account_no: "****2334",
      },
      {
        transaction_id: "TXN006",
        dateTime: "March 20th 2024, 2:02:22 am",
        description: "ATM Withdrawal",
        status: "Success",
        amount_usd: -150.0,
        account_no: "****3213",
      },
      {
        transaction_id: "TXN007",
        dateTime: "March 20th 2024, 2:02:22 am",
        description: "Transfer",
        status: "Pending",
        amount_usd: 200.0,
        account_no: "****4434",
      },
    ],
  },
  {
    account_id: "ACC002",
    holder: {
      firstName: "Andrew",
      lastName: "McNulty",
      jointNames: "",
      username: "andymcnulty185",
      password: "Andy4Sarah",
    },
    bank_details: {
      account_type: "Checking",
      balance_usd: 115678.0,
    },
    transaction_mgs_code: {
      transaction_text_msg: "To continue this transaction, Please enter the code sent to you",
      transaction_code: "",
      wireDate: true,
    },
    transaction_history: [
      {
        transaction_id: "TXN001",
        dateTime: "June 10 2024, 3:32:32 am",
        description: "Grimms supply holding's",
        status: "Success",
        amount_usd: 58000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN002",
        dateTime: "April 15 2023, 1:04:02 pm",
        description: "Transfer from TABITHA MARTEL",
        status: "Success",
        amount_usd: 250000.0,
        account_no: "****2930",
      },
      {
        transaction_id: "TXN003",
        dateTime: "February 8 2022, 10:11:22 am",
        description: "Transfer from NICHOLAS DUKE",
        status: "Success",
        amount_usd: 650000.0,
        account_no: "****3839",
      },
      {
        transaction_id: "TXN004",
        dateTime: "July 2 2021, 7:08:32 am",
        description: "Transfer from BRANDON PERKINS",
        status: "Success",
        amount_usd: 175000.0,
        account_no: "****3249",
      },
      {
        transaction_id: "TXN005",
        dateTime: "November 23 2020, 1:15:02 pm",
        description: "Sinlair's Store - Trx",
        status: "Success",
        amount_usd: -650.0,
        account_no: "****1403",
      }, 
      {
        transaction_id: "TXN005",
        dateTime: "April 23 2020, 8:15:02 pm",
        description: "Project Milestone Payment",
        status: "Success",
        amount_usd: 65000.0,
        account_no: "****1403",
      },
      {
        transaction_id: "344734",
        dateTime: "March 15, 2019, 7:20:15 am",
        description: "Project Completion Bonus",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****5012",
      },
      {
        transaction_id: "343r4",
        dateTime: "February 12, 2019, 10:45:00 am",
        description: "Walmart",
        status: "Success",
        amount_usd: -4000.0,
        account_no: "****5013",
      },
      {
        transaction_id: "TXN0232",
        dateTime: "April 16, 2019, 2:45:15 pm",
        description: "AT&T",
        status: "Success",
        amount_usd: -400.0,
        account_no: "****5007",
      },
    ],
  },
  {
    account_id: "ACC003",
    holder: {
      firstName: "Scott",
      lastName: "Carmen Uther",
      jointNames: "",
      username: "Scottcarmen22",
      password: "Carmen1234",
    },
    bank_details: {
      account_type: "Checking",
      balance_usd: 546000.0,
    },
    transaction_mgs_code: {
      transaction_text_msg: "To continue this transaction, Please enter the code sent to you",
      transaction_code: "",
      wireDate: true,
    },
    transaction_history: [
      {
        transaction_id: "TXN003",
        dateTime: "June 8 2024, 10:11:22 am",
        description: "Transfer from NICHOLAS DUKE",
        status: "Success",
        amount_usd: 650000.0,
        account_no: "****3839",
      },
      {
        transaction_id: "TXN004",
        dateTime: "March 2 2024, 7:08:32 am",
        description: "Transfer from BRANDON PERKINS",
        status: "Success",
        amount_usd: 175000.0,
        account_no: "****3249",
      },
      {
        transaction_id: "TXN005",
        dateTime: "January 23 2024, 1:15:02 pm",
        description: "Sinlair's Store - Trx",
        status: "Success",
        amount_usd: -650.0,
        account_no: "****1403",
      }, 
      {
        transaction_id: "TXN005",
        dateTime: "November 23 2023, 8:15:02 pm",
        description: "Project Milestone Payment",
        status: "Success",
        amount_usd: 65000.0,
        account_no: "****1403",
      },
      {
        transaction_id: "344734",
        dateTime: "June 15, 2023, 7:20:15 am",
        description: "Project Completion Bonus",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****5012",
      },
      {
        transaction_id: "343r4",
        dateTime: "April 12, 2023, 10:45:00 am",
        description: "Walmart",
        status: "Success",
        amount_usd: -4000.0,
        account_no: "****5013",
      },
      {
        transaction_id: "TXN0232",
        dateTime: "February 16, 2023, 2:45:15 pm",
        description: "AT&T",
        status: "Success",
        amount_usd: -400.0,
        account_no: "****5007",
      },
    ],
  },
  {
    account_id: "ACC004",
    holder: {
      firstName: "Malcolm Allen",
      lastName: "Crawford",
      jointNames: "",
      username: "Malcolm779",
      password: "Malcolm1234",
    },
    bank_details: {
      account_type: "Checking",
      balance_usd: 100000000.0,
    },
    transaction_mgs_code: {
      transaction_text_msg: "To continue this transaction, Please enter the code sent to you",
      transaction_code: "",
      wireDate: true,
    },
    transaction_history: [
      {
        transaction_id: "TXN001",
        dateTime: "December 2 2024, 12:03:05 am",
        description: "Transfer from Federal Government Agencies",
        status: "Success",
        amount_usd: 50000000.0,
        account_no: "****3839",
      },
      {
        transaction_id: "TXN001",
        dateTime: "November 23 2024, 10:11:22 am",
        description: "Transfer from Federal Government Agencies",
        status: "Success",
        amount_usd: 50000000.0,
        account_no: "****3839",
      },
      {
        transaction_id: "TXN002",
        dateTime: "November 23 2024, 12:16:02 pm",
        description: "Transfer from Federal Government Agencies",
        status: "Success",
        amount_usd: 50000000.0,
        account_no: "****3839",
      },
    ],
  },
];
