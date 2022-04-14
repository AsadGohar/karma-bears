// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import './ERC721A.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract KarmaBears is ERC721A, Ownable {

    using Strings for uint256;

    mapping(address=>bool) public whiteListAddresses;
    mapping(address=>uint256) public mintCountByAddress;

    uint256 public preSaleCost = 0.06 ether;
    uint256 public publicSaleCost = 0.08 ether;

    string public baseURI;

    bool public paused = false;
    bool public revealed = false;

    string public notRevealedUri;

    constructor() ERC721A('Karma Bears','KBR') {
        setNotRevealedURI(
            "path"
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

    function preSaleMint(
        uint256 quantity
    ) public payable {
        require(!paused, "The contract is paused!");
        require(isAddressWhitelisted(msg.sender), "User Is Not Whitelisted");
        require(msg.value == preSaleCost*quantity, "Value is Not Correct");
        _safeMint(msg.sender, quantity);
        setMintCount(msg.sender,quantity);
    }

    function publicSaleMint(
        uint256 quantity
    ) public payable {
        require(!paused, "The contract is paused!");
        require(msg.value == publicSaleCost*quantity, "Value is Not Correct");
        _safeMint(msg.sender, quantity);
        setMintCount(msg.sender,quantity);
    }
    
    function adminMint(uint256 quantity) public onlyOwner {
        require(!paused, "Contract is paused");
        _safeMint(msg.sender, quantity);
    }

    function mintById(uint256 tokenId) public payable {
        require(!paused, "Contract is paused");
        _mintById(msg.sender, 1, true, tokenId,'');
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