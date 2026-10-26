const imagePath = (filename) => {
    return `${import.meta.env.BASE_URL}images/${filename}`;
};

export default imagePath;