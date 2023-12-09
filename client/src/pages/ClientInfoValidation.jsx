
const validateClientInfo = (clientInfo) => {
    const errors = {};

    if (!clientInfo.name.trim()) {
        errors.clientName = 'Client Name is required';
    }

    if (!clientInfo.email.trim()) {
        errors.clientEmail = 'Client Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(clientInfo.email)) {
        errors.clientEmail = 'Client Email is invalid';
    }

    // Add more validation rules as needed

    return errors;
};

export default validateClientInfo;
