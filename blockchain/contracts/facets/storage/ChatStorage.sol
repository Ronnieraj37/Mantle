//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ChatStorage{ 

    bytes32 constant USER_STORAGE_POSITION = keccak256("diamond.standard.userchats.storage");

    struct User {
        string Name;
        string About;
        string uniqueId;
        address Address;
        string Image;
    }

    struct Message {
        address sender;
        bool isText;
        string message;
        uint256 timestamp;
    }

    struct Friend {
        string name;
        address friendAddress;
    }

    struct Post {
        address sender;
        string hash;
        uint256 timestamp;
    }

    struct Storage{
        mapping(address => Post[])  posts;
        mapping(address => Friend[])  friendList;
        mapping(bytes32 => Message[])  allMessages;
    }

    function userStorage() internal pure returns (Storage storage ds) {
        bytes32 position = USER_STORAGE_POSITION;
        assembly {
            ds.slot := position
        }
    }

    function addMessage(bytes32 _chatCode ,Message memory _message ) internal {
        Storage storage _store = userStorage();
        _store.allMessages[_chatCode].push(_message);
    }

    function viewMessages(bytes32 _chatCode) internal view returns(Message[] memory){
        Storage storage _store = userStorage();
        return _store.allMessages[_chatCode];
    }
}