'use strict'

module.exports = class Dynamic
{
    constructor()
    {
        this.functions = {};
    }

    addfunction(key, f)
    {
        this.functions[key] = f;
    }

    removefunction(key)
    {
        delete this.functions[key];
    }

    execute(key, args)
    {
        return this.functions[key](args);
    }
}
