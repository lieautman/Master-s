function InsecureLoginLevel4() {

    return (
        <>
            <p>
                {`The previous level removed the ability to inject SQL, but as another security measure, the passwords should not stay as they are inside the database. They shall be hashed with a salt. This can be done manually or can be integrated by a third patry authentification server provider.`}
            </p>
        </>
    );
}

export default InsecureLoginLevel4;
