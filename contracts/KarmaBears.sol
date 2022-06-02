// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import './ERC721A.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Strings.sol';

contract KarmaBears is ERC721A, Ownable {

    using Strings for uint256;

    mapping(address=>bool) public whiteListAddresses;
    mapping(address=>uint256) public mintCountByAddress;

    uint256 public preSaleCost = 0.006 ether;
    uint256 public publicSaleCost = 0.008 ether;

    string public baseURI = "https://gateway.pinata.cloud/ipfs/QmTDsVGjC6SATGhRieAF9EqZ8V6RdhApANWAbBTDNetNH2/";

    bool public paused = false;
    bool public revealed = false;

    string public notRevealedUri;

    constructor() ERC721A('Karma Bears','KBR') {
        setNotRevealedURI(
            "https://gateway.pinata.cloud/ipfs/Qmd2Qi4i5Mfw5Ne65dnzLwehcMhCihBMHxCyAQjUGLoL39"
        );
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    function addUserToWhiteList(address _user) public onlyOwner  {
        require(!isAddressWhitelisted(_user), "User Is Already Whitelisted");
        whiteListAddresses[_user]=true;
    }

    function isAddressWhitelisted(
        address _user
    ) public view returns (bool) {
       return whiteListAddresses[_user];
    }

    function totalMinted() public view returns (uint256) {
        return _totalMinted();
    }

    function preSaleMint(
        uint256 quantity
    ) public payable {
        require(!paused, "Contract is paused!");
        require(isAddressWhitelisted(msg.sender), "User Is Not Whitelisted");
        require(msg.value == preSaleCost*quantity, "Value is Not Correct");
        _safeMint(msg.sender, quantity);
        setMintCount(msg.sender,quantity);
    }

    function publicSaleMint(
        uint256 quantity
    ) public payable {
        require(!paused, "Contract is paused!");
        require(msg.value == publicSaleCost*quantity, "Value is Not Correct");
        _safeMint(msg.sender, quantity);
        setMintCount(msg.sender,quantity);
    }
    
    function adminMint(uint256 quantity) public payable onlyOwner {
        require(!paused, "Contract is paused");
        _safeMint(msg.sender, quantity);
    }

     function giveAway(address winnerAddress) public payable onlyOwner {
        _safeMint(winnerAddress, 1);
    }

    function removeWhitelistUser(address _user) public onlyOwner {
        whiteListAddresses[_user] = false;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory){
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        if (revealed == false) {
            return notRevealedUri;
        }

        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseURI,
                        tokenId.toString(),
                        ".json"
                    )
                )
                : "";
    }

    function withdraw() external onlyOwner {
        //sending 5% to another account
        address custom = 0x89d2993cc2f0F4E576218bCBDf034AfE17a6EA59;
        (bool hs, ) = payable(custom).call{value: address(this).balance * 5 / 100}("");
        require(hs);

        //sending rest to the owner
        (bool os, ) = payable(owner()).call{value: address(this).balance}("");
        require(os);
    }

    function setMintCount(address _user,uint256 quantity) public {
        mintCountByAddress[_user]+=quantity;
    }

    function setPaused(bool _state) public onlyOwner {
        paused = _state;
    }

    function setNotRevealedURI(string memory _notRevealedURI) public {
        notRevealedUri = _notRevealedURI;
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function setRevealed(bool _state) public onlyOwner {
        revealed = _state;
    }

     function setPresaleCost(uint256 _newCost) public onlyOwner {
        preSaleCost = _newCost;
    }

    function setPublicSaleCost(uint256 _newCost) public onlyOwner {
        publicSaleCost = _newCost;
    }
    
}