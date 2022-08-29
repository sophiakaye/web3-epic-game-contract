const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(                     
        ["Saul Goodman", "Mike Ehrmantraut", "Walter White"],       
        ["https://i1.sndcdn.com/avatars-000023440200-orwnp2-t500x500.jpg", 
        "https://upload.wikimedia.org/wikipedia/tr/e/ea/Mike_Ehrmantraut_BCS_S3.png", 
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/220px-Walter_White_S5B.png"],
        [100, 200, 300],                    
          [100, 50, 25],
          "Skyler White", // Boss name
          "https://upload.wikimedia.org/wikipedia/tr/f/fb/Skyler_White_S5B.png", // Boss image
          10000, // Boss hp
          50 // Boss attack damage
      );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    // Get the value of the NFT's URI.
    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token URI:", returnedTokenUri);
  };
  
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();