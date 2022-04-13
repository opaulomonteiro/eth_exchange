const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transacations = await Transactions.deploy();

  await transacations.deployed();

  console.log("Transactions deployed to:", transacations.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
