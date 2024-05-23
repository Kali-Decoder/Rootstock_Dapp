// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MessagingApp {
    struct Message {
        address sender;
        address recipient;
        string content;
        uint256 timestamp;
    }

    Message[] public messages;

    event MessageSent(address indexed sender, address indexed recipient, string content, uint256 timestamp);

    function sendMessage(address _recipient, string calldata _content) external {
        require(_recipient != address(0), "Recipient address cannot be zero address");
        require(bytes(_content).length > 0, "Message content cannot be empty");

        Message memory newMessage = Message({
            sender: msg.sender,
            recipient: _recipient,
            content: _content,
            timestamp: block.timestamp
        });

        messages.push(newMessage);
        emit MessageSent(msg.sender, _recipient, _content, block.timestamp);
    }

    function getMessages() external view returns (Message[] memory) {
        return messages;
    }

    function getMessagesByRecipient(address _recipient) external view returns (Message[] memory) {
        uint256 messageCount = 0;
        for (uint256 i = 0; i < messages.length; i++) {
            if (messages[i].recipient == _recipient) {
                messageCount++;
            }
        }

        Message[] memory recipientMessages = new Message[](messageCount);
        uint256 j = 0;
        for (uint256 i = 0; i < messages.length; i++) {
            if (messages[i].recipient == _recipient) {
                recipientMessages[j] = messages[i];
                j++;
            }
        }

        return recipientMessages;
    }
}
