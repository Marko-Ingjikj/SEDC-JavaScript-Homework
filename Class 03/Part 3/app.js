let accountMoney = 10000;
let withdrawnMoney = prompt("How much money would you like to withdraw");
withdrawnMoney = Number(withdrawnMoney);

function withdrawMoney() {
  if (withdrawnMoney > accountMoney) {
    alert("You don't have that much money in your account!");
  } else if (withdrawnMoney < 0) {
    alert("Are you trying to deposit on an ATM");
  } else {
    let accountMoneyLeft = accountMoney - withdrawnMoney;
    console.log(
      `You have withdrawn ${withdrawnMoney}$ and have ${accountMoneyLeft}$ left in your account!`
    );
  }
}

withdrawMoney();
