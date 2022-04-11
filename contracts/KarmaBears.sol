// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import './ERC721A.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract KarmaBears is ERC721A, Ownable {

    mapping(address=>bool) public whiteListAddresses;

    uint256 public preSaleCost = 0.06 ether;
    uint256 public publicSaleCost = 0.08 ether;

    bool public paused = true;
    bool public revealed = false;

    constructor() ERC721A('Karma Bears','KBR') {}

    function addUserToWhiteList(address _user) public onlyOwner  {
        require(!isAddressWhitelisted(_user), "User Is Already Whitelisted");
        whiteListAddresses[_user]=true;
    }

    function isAddressWhitelisted(
        address _user
    ) public view returns (bool) {
       return whiteListAddresses[_user];
    }

    function setPaused(bool _state) public onlyOwner {
        paused = _state;
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

    function preSaleMint(
        uint256 quantity
    ) public {
        require(!paused, "The contract is paused!");
        require(isAddressWhitelisted(msg.sender), "User Is Not Whitelisted");
        _safeMint(msg.sender, quantity);
    }

    function publicSaleMint(
        uint256 quantity
    ) public {
        require(!paused, "The contract is paused!");
        _safeMint(msg.sender, quantity);
    }
    
    function removeWhitelistUser(address _user) public onlyOwner {
        whiteListAddresses[_user] = false;
    }

    function adminMint(uint256 quantity) public onlyOwner {
        require(!paused, "Contract is paused");
        _safeMint(msg.sender, quantity);
    }
    
}
