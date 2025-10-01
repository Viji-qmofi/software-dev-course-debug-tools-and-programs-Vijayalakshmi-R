# 🛠️ Debugging Practice: E-Commerce Application

## 🎯 Objective

Students will apply **debugging tools and strategies** to identify and fix errors in a pre-written JavaScript application.

This exercise emphasizes using:

- The **Console**
- The **Sources tab**
- The **`debugger` statement**
- Practical strategies like **isolating problematic code** and **testing edge cases**

---

## 🛒 Scenario

You are tasked with debugging a simple **JavaScript application** for an **e-commerce platform**.

The application is supposed to:

- Calculate the **total price** of items in a shopping cart
- Apply **discounts**
- Generate a **receipt**

Unfortunately, the application has several bugs that are causing it to malfunction.

---

## 🧩 Your Task

You will:

- 🐛 **Identify and fix errors** using browser developer tools
- 🔍 **Analyze error messages and the call stack** for clues
- 🧪 **Test edge cases** to make sure the program behaves correctly in different scenarios

---

## 🖥️ Instructions

### 1. Set Up the Debugging Environment

- Open the project’s `index.html` file in your **browser**
- Launch **Developer Tools** using:
  - `F12`, or  
  - `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
  
From there, use the **Console**, **Sources tab**, and **debugger statements** to investigate and fix issues in the JavaScript code.

---

Let me know if you'd like to add starter files, error clues, or a checklist of bugs to find!


Debug Summary

Errors Found:

Loop in calculateTotal used <= → caused undefined access. Fixed to <.

applyDiscount lacked validation → added validation for invalid discount rates.

generateReceipt crashed when total was NaN. Fixed with Number(total).toFixed(2).

Receipt formatting used \n, which doesn’t render in HTML. Changed to <br> and innerHTML.

How DevTools Helped:

Console Tab showed runtime errors (undefined item access).

Call Stack pointed directly to the faulty line inside calculateTotal.

Sources Tab with breakpoints and debugger let me inspect i and cartItems[i].

Tested edge cases in Console to validate fixes (empty cart, single item, extreme discounts).
