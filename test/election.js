var Election = artifacts.require("./Election.sol");

//Declare a contract --> Inject all the accounts existing in devolopment environment
contract("Election", function(accounts) {
    it("initializes with two candidates", function() {
        return Election.deployed().then(function(instance) {
            return instance.candidatesCount();
        }).then(function(count) {
            assert.equal(count,2);
        });
    }); 
    it("initializes with two candidates", function() {
        return Election.deployed().then(function(instance) {
            electionInstance = instance;
            return electionInstance.candidates(1);
        }).then(function(candidate) {
            assert.equal(candidate[0], 1, "Contains the correct id");
            assert.equal(candidate[1], "Candidate 1", "contains the correct name");
            assert.equal(candidate[2], 0, "Correct Vote Count");
            return electionInstance.candidates(2);
        }).then(function(candidate) {
            assert.equal(candidate[0], 2, "Contains correct id");
            assert.equal(candidate[1], "Candidate 1", "Contains correct name");
            assert.equal(candidate[2], 0, "Contains the correct vote count");
        })
    });    
});             