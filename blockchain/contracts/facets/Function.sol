// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;
// import { History } from "../History.sol";
// import { LibDiamond } from "../libraries/LibDiamond.sol";

// contract Function{

//     function init() public{
//         History _history = new History();
//         LibDiamond.historyStorage().history = _history;
//     }

//     function saveHistory(uint _value) public {
//         History _history = LibDiamond.historyStorage().history;
//         _history.addHistory(_value,msg.sender);
//     }

//     function retrieveHistory() public view returns(History.history[] memory) {
//         History _history = LibDiamond.historyStorage().history;
//         return _history.getHistory();
//     }

//     function add( uint a ,uint b) external returns(uint){
//         saveHistory(a+b);
//         return a+b;
//     }

//     function sub(uint a, uint b) public pure returns (uint) {
//         // saveHistory(a - b);
//         return a - b;
//     }

//     function multiply(uint a, uint b) public pure returns (uint) {
//         // saveHistory(a * b);
//         return a * b;
//     }

//     function divide(uint a, uint b) public pure returns (uint) {
//         // saveHistory(a / b);
//         return a / b;
//     }
// }
