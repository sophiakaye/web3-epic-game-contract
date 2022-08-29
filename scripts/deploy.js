const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(                     
        ["Saul Goodman", "Mike Ehrmantraut", "Walter White"],       
        ["https://gateway.pinata.cloud/ipfs/QmUnwwUK5SsJmatLN1wKFe6jTR1qVBD2bkEseCXRpe16KP", 
        "https://gateway.pinata.cloud/ipfs/QmXgofqV9qNUdvMgmLoj8qmAmW57551kMuEvrqxmMyjNpd", 
        "https://gateway.pinata.cloud/ipfs/QmVwa7a4AX1SegsyTvCdxde8KbJYW2yoQ5JieRjfhCGjeU"],
      [100, 200, 300],                    
        [100, 50, 25],
        "Marty Byrde", // Boss name
        "https://gateway.pinata.cloud/ipfs/QmaeUtrWDSwpXsSshvm2FGyX7GrpQoBUPrFLV8q5r1VQW4", // Boss image
        10000, // Boss hp
        50 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

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