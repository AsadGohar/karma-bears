import Web3 from 'web3';
import KarmaBear from '../artifacts/KarmaBears.json'

export const web3Instance = new Web3(Web3.givenProvider || 
    'https://rinkeby.infura.io/v3/8f7bb415bf7b4dceb66c27ceea3bfb64','web3');

export const getAddress = async () => {
    let acc = await web3Instance.eth.getAccounts();
    if(acc[0] !== undefined ) {
        return acc[0]
    }
    else if(acc[0] === undefined) {
        return ''
    }
}

export const contract = new web3Instance.eth.Contract(KarmaBear.output.abi,
    '0xb582936bee77A4c30Fa4C98C24145E6ad165f66F')  

export const getPaused = async () =>  { 
    return await contract.methods.paused().call()
}

export const getRevealed = async () =>  { 
    return await contract.methods.revealed().call()
}

export const getOwner = async () => {
    return await contract.methods.owner().call()
}

export const getPublicSaleCost = async () =>  { 
    return web3Instance.utils.fromWei(await contract.methods.publicSaleCost().call(), 'ether') 
}

export const getPreSaleCost = async () =>  { 
    return web3Instance.utils.fromWei(await contract.methods.preSaleCost().call(), 'ether') 
}

export const getTotalMinted = async () =>  { 
    return await contract.methods.totalMinted().call()
}

export const setPauseContract = async (value,address) =>  { 
    return await contract.methods.setPaused(Boolean(value)).send({from: String(address)},(err)=>{
        if(err !== undefined){
            console.log(err,'err')
        }
    })
}

export const setRevealContract = async (value,address) =>  { 
    return await contract.methods.setRevealed(value).send({from: String(address)},(err)=>{
        if(err !== undefined){
            console.log(err,'err')
        }
    })
}

export const setPreSaleCostContract = async (value,address) =>  { 
    return await contract.methods.setPresaleCost(value).send({from: String(address)},(err)=>{
        if(err !== undefined){
            console.log(err,'err')
        }
    })
}
export const setPublicSaleCostContract = async (value,address) =>  { 
    return await contract.methods.setPublicSaleCost(value).send({from: String(address)},(err)=>{
        if(err !== undefined){
            console.log(err,'err')
        }
    })
}

export const updateWhiteList = async (whiteListAddress,adminAddress) =>  { 
    return await contract.methods.addUserToWhiteList(whiteListAddress).send({from: String(adminAddress)},
    (err)=>{
        if(err !== undefined){
            console.log(err,'err')
        }
    })
}

export const setBaseUri = async (uri,address) =>  { 
    return await contract.methods.setBaseURI(uri).send({from: String(address)},(err)=>{
        if(err !== undefined){
            console.log(err,'err')
        }
    })
}

export const getBaseUri = async () =>  { 
    return await contract.methods.baseURI().call()
}

export const mintByAdmin = async (quantity,address) =>  { 
    return await contract.methods.adminMint(quantity).send({from: String(address),value:''},(err)=>{
        if(err !== undefined){
            console.log(err,'err')
        }
    })
}

export const setUnRevealedURIAdmin = async (uri,address) =>  { 
    return await contract.methods.setNotRevealedURI(uri).send({from: String(address),value:''},(err)=>{
        if(err !== undefined){
            console.log(err,'err')
        }
    })
}

export const getUnRevealedURI = async () =>  { 
    return await contract.methods.notRevealedUri().call()
}

export const isUserWhiteListed = async (address) =>  { 
    return await contract.methods.isAddressWhitelisted(address).call()
}


