import Web3 from 'web3';
import KarmaBear from '../artifacts/KarmaBears.json'


export const web3Instance = new Web3(Web3.givenProvider || 
    'https://rinkeby.infura.io/v3/8f7bb415bf7b4dceb66c27ceea3bfb64','web3');

export const contract = new web3Instance.eth.Contract(KarmaBear.output.abi,
    '0x369153A761d19bCa87881cD01AabD480c2ED5018')  

export const getPaused = async () =>  { 
    return await contract.methods.paused().call()
}

export const getRevealed = async () =>  { 
    return await contract.methods.revealed().call()
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
    return await contract.methods.setPaused(value).send({from: String(address)},(err)=>{
        if(err !=undefined){
            console.log(err,'err')
            // toast.warn(err.message)
        }
    })
}

export const setRevealContract = async (value,address) =>  { 
    return await contract.methods.setRevealed(value).send({from: String(address)},(err)=>{
        if(err !=undefined){
            console.log(err,'err')
            // toast.warn(err.message)
        }
    })
}

export const setPreSaleCostContract = async (value,address) =>  { 
    return await contract.methods.setPresaleCost(value).send({from: String(address)},(err)=>{
        if(err !=undefined){
            console.log(err,'err')
            // toast.warn(err.message)
        }
    })
}
export const setPublicSaleCostContract = async (value,address) =>  { 
    return await contract.methods.setPublicSaleCost(value).send({from: String(address)},(err)=>{
        if(err !=undefined){
            console.log(err,'err')
            // toast.warn(err.message)
        }
    })
}

export const updateWhiteList = async (whiteListAddress,adminAddress) =>  { 
    return await contract.methods.addUserToWhiteList(whiteListAddress).send({from: String(adminAddress)},(err)=>{
        if(err !=undefined){
            console.log(err,'err')
            // toast.warn(err.message)
        }
    })
}

export const setBaseUri = async (uri,address) =>  { 
    return await contract.methods.addUserToWhiteList(uri).send({from: String(address)},(err)=>{
        if(err !=undefined){
            console.log(err,'err')
            // toast.warn(err.message)
        }
    })
}

export const mintByAdmin = async (quantity,address) =>  { 
    return await contract.methods.adminMint(quantity).send({from: String(address),value:''},(err)=>{
        if(err !=undefined){
            console.log(err,'err')
            // toast.warn(err.message)
        }
    })
}

