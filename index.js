const Maybe = mrequire("core:Native.Data.Maybe:1.0.0");


const empty =
    new Map();


const singleton = k => v =>
    new Map().set(k, v);


const insert = k => v => m =>
    new Map(m).set(k, v);


const get = k => m => {
    const value =
        m.get(k);

    return value === undefined
        ? Maybe.Nothing
        : Maybe.Just(value);
};


const member = k => m =>
    get(k)(m).isJust();


const remove = k => m => {
    const result =
        new Map(m);

    result.delete(k);

    return result;
};


const entries = m =>
    [... m.entries()];


const values = m =>
    [... m.values()];


module.exports = {
    empty,
    entries,
    get,
    insert,
    member,
    remove,
    singleton,
    values
};