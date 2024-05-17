function InsecureDataLoading() {
    return (
        <>
            <p>{`Let's assume a normal user can have informations about another user's postings on some sort of market.`}</p>
            InsecureDataLoading


            <p>{`The front end might not use the other user's posting adress, 
            but the Brocken Object Property Level Authorisation in the API allows 
            a supposed attacker to gather information.
            This information can now be used to perform further attacks.`}</p>
        </>
    );
}

export default InsecureDataLoading;
