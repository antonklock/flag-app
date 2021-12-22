const getRandomKey = ( object ) => {
    const keys = Object.keys( object );
    return object[keys[keys.length * Math.random() << 0]];
}

export default getRandomKey;