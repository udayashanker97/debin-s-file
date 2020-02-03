//pragma solidity >=0.4.21 <0.7.0;
pragma solidity >=0.4.2;

contract Election {
    //Model a candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }
    //Store Candidate
    mapping(uint => Candidate) public candidates; //associative array or hash where associative key value pair with one other
    //Fetch Candidate
    //Store candidate count
    uint public candidatesCount=0;
    //Constructor --> Run when we initialize our project
    function e
    lection () public {
        addCandidate("Sandra Ann Sajan");
        addCandidate("Udaya Shanker M");
    }
    function addCandidate (string memory _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }
}

//truffle migrate --reset to reset the smart contract in a blockchain
//Election.deployed().then(function(i) { app=i; })
//app.candidates()

